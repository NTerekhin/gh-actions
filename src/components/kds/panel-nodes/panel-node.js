export class PanelNode {
     _height:number = 0;
      _title:string ='';

      constructor(height:number = 20) {
          this._height = height
      }

      get height(){
          return this._height;
      }

      render(){
          return (<li>{this._title}</li>)
      };
}