
export interface INtDialogProps{
    title:string;
    open:boolean;
    onClose:(value:any)=>void;
    actions?:Array<React.Component<any>>;
    content?:React.ReactNode;
}

export const NtDialog=(props:INtDialogProps)=>{
    console.log(props)
    const showActions = ()=>{
        if(props.actions==null || props.actions.length===0)
            return <></>
       return props.actions.map((Action,i)=>{
            console.log("Action",Action(i));
            return Action(i);
        })
    }
    return (<div className="nt-dialog-wrapper">
        <div className="nt-dialog-overlay"></div>
        <div className="nt-dialog">
            <div className="nt-dialog-header">
                <h3>{props.title}</h3>
            </div>
            <div className="nt-dialog-content">
                {props.content}
            </div>
            <>
            {showActions()}
            </>
        </div>
    </div>)
}