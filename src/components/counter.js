import CounterActionsFactory from "../redux/actions/factories/counter-actions-factory";

const Counter = ({counter, inc,dec,rnd})=>{
    return (
        <div className="counter">

        <h2>{counter}</h2>
        <button onClick={inc} className="btn btn-primary btn-lg">INC</button>
        <button onClick={dec} className="btn btn-primary btn-lg">DEC</button>
        <button onClick={()=>rnd('hello')} className="btn btn-primary btn-lg">RND</button>
        </div>
    );
}

export default CounterActionsFactory.mapper(Counter);