import CounterAction from "./counter-action";

export default class RandomAction extends CounterAction{
    static TYPE = 'RND';
    payload = '';
    constructor(payload) {
        super();
        this.payload = payload;
    }
    execute(state) {
        return {
            ...state,
            counter:state.counter+Math.floor(Math.random()*10)
        };
    }

    static toDispatch(factoryName)
    {
       let obj = super.toDispatch(factoryName)()
      return (param)=> ({
              ...obj,
              payload: param
          });

    }

}