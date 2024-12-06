import {setSelectionRange} from "@testing-library/user-event/dist/utils";

interface INode{
    get id():number;
    set id(value:number):void;
    get name():string;
    set name(value:string):void;
    get selected():boolean;
    set selected(isSelected:boolean):void;
    get disabled():boolean;
    set disabled(isDisabled:boolean):void;
    set parent(parentNode:IGroupNode):void;
    get parent():IGroupNode;
}


interface IGroupNode extends INode{
    get items(): Array<INode>;
    set items(value: Array<INode>):void;
    addItem(item:INode):void;
    addGroupNode(groupNode:GroupNode):void;
}

interface IItemNode extends INode{
    get productId():number;
    set productId(value:number):void
}
class BaseNode implements INode{
    _selected:boolean = false;
    _disabled:boolean = false;
    _parent:IGroupNode;


    get parent(): IGroupNode {
        return this._parent;
    }

    set parent(value: IGroupNode) {
        this._parent = value;
    }

    get selected(): boolean {
        return this._selected;
    }

    set selected(value: boolean) {
        this._selected = value;
    }

    get disabled(): boolean {
        return this._disabled;
    }

    set disabled(value: boolean) {
        this._disabled = value;
    }
}
class GroupNode extends BaseNode implements IGroupNode{
    _id:number;
    _name:string;
    _groups:Array<IGroupNode>;
    _items:Array<INode>;

    constructor() {
        super();
        this._groups = [];
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get items(): Array<INode> {
        return this._items;
    }

    set items(value: Array<INode>) {
        this._items = value;
    }
    static create(){
        return new GroupNodeBuilder();
    }
    get groups(){
        return this._groups;
    }
    addItem(item:INode)
    {
        if(item.selected)
            this.selected = item.selected;
        this._items.push(item);
    }
    addGroupNode(groupNode:GroupNode){
        if(groupNode.selected)
            this.selected = groupNode.selected;
        return this._groups.push(groupNode);
    }
}

class GroupNodeBuilder{
    _groupNode;

    constructor() {
        this._groupNode = new GroupNode()
    }

    withId(id:number){
        this._groupNode.id = id;
        return this;
    }
    withName(name:string){
        this._groupNode.name = name;
        return this;
    }
    withParent(parentNode:IGroupNode){

        if(parentNode)
            this._groupNode.parent = parentNode;
        return this;
    }
    withItems(items:Array<INode>){
        this._groupNode.items = items;
        return this;
    }
    withSelected(isSelected:boolean){
        if(!this._groupNode.selected) {
            this._groupNode.selected = isSelected;
        }
        return this;
    }
    build(){
        return this._groupNode;
    }
}

class ItemNode extends BaseNode implements IItemNode{
    _id:number;
    _name:string;

    _productId:number;
    constructor(id,name,productId,isSelected) {
        super();
        this._id = id;
        this._name = name;
        this._productId = productId;
        this.selected = isSelected;

    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get productId() {
        return this._productId;
    }

    set productId(value) {
        this._productId = value;
    }
}

class StepElementNode{
    _id:number;
    _name:string;
    _disabled:boolean;
    _selected:boolean;

    constructor(id: number, name: string, disabled: boolean, selected: boolean) {
        this._id = id;
        this._name = name;
        this._disabled = disabled;
        this._selected = selected;
    }
}
class ItemStepElementNode extends StepElementNode{
    _productId:number;

    constructor(id: number, name: string, disabled: boolean, selected: boolean, productId: number) {
        super(id, name, disabled, selected);
        this._productId = productId;
    }
}
class StepNode{
    _id:string;
    _elements:Array<StepElementNode> = [];

    constructor() {
        this._id = crypto.randomUUID()
    }


    get elements(): Array<StepElementNode> {
        return this._elements;
    }

    set elements(value: Array<StepElementNode>) {
        this._elements = value;
    }

    static create(){
        return new StepNodeBuilder();
    }
}


class StepNodeBuilder{
        _selected:boolean = false;
        _elements:Array<StepElementNode> = [];

        withSelected(isSelected:boolean)
        {
            if(!this._selected)
                this._selected = isSelected;
            return this;
        }
        withNode(node:INode)
        {
            if(node instanceof GroupNode)
                this._elements.push(new StepElementNode(node.id,node.name,node.disabled,node.selected))
            if(node instanceof ItemNode)
                this._elements.push(new ItemStepElementNode(node.id,node.name,node.disabled,node.selected,node.productId));

            return this;
        }
        build(){
            if(this._selected)
            {
                const step = new StepNode();
                step.elements = this._elements;
                return step;
            }
            return null;
        }
}

export class SelectionHistoryService{
    _menuObject:null;

    constructor(menuObject) {
        this._menuObject = menuObject
    }

    build(productId):Array<INode>
    {
        const _self = this;
        let _menuItemsList:Array<INode> = [];
        let _stepsList:Array<StepNode> = [];
        let _itemsPathsList:Map<number,IItemNode> = new Map();

        console.log("MENU_OBJECT",this._menuObject);
        this.createSteps(productId,this._menuObject.menu,_stepsList,_menuItemsList,_itemsPathsList);

        console.log(_itemsPathsList);
        return _menuItemsList;
    }

    setAsParent(currentParent:IGroupNode,rootNode:IGroupNode)
    {
        if(currentParent && currentParent.parent)
            this.setAsParent(currentParent.parent,rootNode);
        else
            currentParent.parent = rootNode;
    }
    setSelectedParent(currentParent:IGroupNode)
    {
        if(currentParent)
            currentParent.selected = true;

        if(currentParent && currentParent.parent) {
            this.setSelectedParent(currentParent.parent);
        }
    }
    createSteps(productId, groupsList,stepsList:Array<StepNode>,_menuItemsList:Array<INode>,_itemsPathsList:Map<number,IItemNode>,parentNode:IGroupNode=null)
    {
        const _self = this;
        groupsList.groups.forEach((g) => {
            const menuGroup = _self._menuObject.menuGroup
                .sort((a, b) => a.sequence - b.sequence)
                .find((mg) => mg.id === g.group);
            if (menuGroup) {

                const groupNode = GroupNode.create()
                    .withId(menuGroup.id)
                    .withName(menuGroup.name)
                    .withParent(parentNode)
                    .build()

                if (parentNode)
                    parentNode.addItem(groupNode)
                else
                    _menuItemsList.push(groupNode);

                groupNode.items = this.addItemNode(productId,menuGroup.items,groupNode,_itemsPathsList);


                if(menuGroup.groups.length>0)
                    this.createSteps(productId,menuGroup,stepsList,_menuItemsList,_itemsPathsList,groupNode);
            }
        });
        if(!parentNode) {
            const rootNode = GroupNode.create().withId(0).withName('root').withItems(_menuItemsList).build();
            if(rootNode.items)
                rootNode.items = [...rootNode.items,...this.addItemNode(productId,groupsList.items,rootNode,_itemsPathsList)];
            this.setAsParent(_itemsPathsList[productId].parent,rootNode);
        }
    }

    addItemNode(productId,itemsList,groupNode:IGroupNode,_itemsPathsList:Map<number,IItemNode>)
    {
        const _self = this;
        return itemsList
            .sort((a, b) => a.sequence - b.sequence)
            .map((i) => {
                const item = _self._menuObject.menuItem.find((mi) => mi.id === i.item);
                if(item)
                {
                    const itemNode = new ItemNode(item.id, item.name, item.product, item.id === productId);
                    if(itemNode.selected) {
                        _self.setSelectedParent(groupNode);
                        itemNode.parent = groupNode;
                        if(_itemsPathsList.has(item.id))
                            _itemsPathsList.set(item.id,itemNode)
                        else
                            _itemsPathsList[item.id] = itemNode;
                    }
                    return itemNode;
                }
                return null;
            })
            .filter(Boolean);
    }
    addTool(){

    }

}