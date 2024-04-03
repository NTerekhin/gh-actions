import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import KdsActionsFactory from "../../redux/actions/factories/kds-actions-factory";

import './kds-panel.css'
import {Board} from "./domain/board";

const coursesList = {
    courses:[
        {id:1,dishes:[
                {id:1,name:"Dish"},
                {id:1,name:"Dish"},
                {id:2,name:"Dish"},
                {id:3,name:"Dish"},
                {id:4,name:"Dish"},
                {id:5,name:"Dish"},
                {id:6,name:"Dish"},
                {id:7,name:"Dish"},
                {id:8,name:"Dish"},
                {id:9,name:"Dish"},
                {id:10,name:"Dish"},
                {id:11,name:"Dish"},
                {id:12,name:"Dish"},
                {id:13,name:"Dish"},
                {id:14,name:"Dish"},
                {id:15,name:"Dish"},
                {id:16,name:"Dish"},
            ], title:"Check-1"},
        {id:2,dishes:[
                {id:1,name:"Dish"},
                {id:1,name:"Dish"},
                {id:2,name:"Dish"},
                {id:3,name:"Dish"},
                {id:4,name:"Dish"},
                {id:5,name:"Dish"},
                {id:6,name:"Dish"},
                {id:7,name:"Dish"},
                {id:8,name:"Dish"},
                {id:9,name:"Dish"},
                {id:10,name:"Dish"},
                {id:11,name:"Dish"},
                {id:12,name:"Dish"},
                {id:13,name:"Dish"},
                {id:14,name:"Dish"},
                {id:15,name:"Dish"},
                {id:16,name:"Dish"},
            ], title:"Check-2"},
        {id:3,dishes:[
                {id:1,name:"Dish"},
                {id:1,name:"Dish"},
                {id:2,name:"Dish"},
                {id:3,name:"Dish"},
                {id:4,name:"Dish"},
                {id:5,name:"Dish"},
                {id:6,name:"Dish"},
                {id:7,name:"Dish"},
                {id:8,name:"Dish"},
                {id:9,name:"Dish"},
                {id:10,name:"Dish"},
                {id:11,name:"Dish"},
                {id:12,name:"Dish"},
                {id:13,name:"Dish"},
                {id:14,name:"Dish"},
                {id:15,name:"Dish"},
                {id:16,name:"Dish"},
            ], title:"Check-3"},
        {id:4,dishes:[
                {id:1,name:"Dish"},
                {id:1,name:"Dish"},
                {id:2,name:"Dish"},
                {id:3,name:"Dish"},
                {id:4,name:"Dish"},
                {id:5,name:"Dish"},
                {id:6,name:"Dish"},
                {id:7,name:"Dish"},
                {id:8,name:"Dish"},
                {id:9,name:"Dish"},
                {id:10,name:"Dish"},
                {id:11,name:"Dish"},
                {id:12,name:"Dish"},
                {id:13,name:"Dish"},
                {id:14,name:"Dish"},
                {id:15,name:"Dish"},
                {id:16,name:"Dish"},
            ], title:"Check-4"},
        {id:5,dishes:[ {id:1,name:"Dish"},
                {id:1,name:"Dish"},
                {id:2,name:"Dish"},
                {id:3,name:"Dish"},
                {id:4,name:"Dish"},
                {id:5,name:"Dish"},
                {id:6,name:"Dish"},
                {id:7,name:"Dish"},
                {id:8,name:"Dish"},
                {id:9,name:"Dish"},
                {id:10,name:"Dish"},
                {id:11,name:"Dish"},
                {id:12,name:"Dish"},
                {id:13,name:"Dish"},
                {id:14,name:"Dish"},
                {id:15,name:"Dish"},
                {id:16,name:"Dish"},
            ], title:"Check-5"},
        {id:6,dishes:[
                {id:1,name:"Dish"},
                {id:1,name:"Dish"},
                {id:2,name:"Dish"},
                {id:3,name:"Dish"},
                {id:4,name:"Dish"},
                {id:5,name:"Dish"},
                {id:6,name:"Dish"},
                {id:7,name:"Dish"},
                {id:8,name:"Dish"},
                {id:9,name:"Dish"},
                {id:10,name:"Dish"},
                {id:11,name:"Dish"},
                {id:12,name:"Dish"},
                {id:13,name:"Dish"},
                {id:14,name:"Dish"},
                {id:15,name:"Dish"},
                {id:16,name:"Dish"},
            ], title:"Check-6"},
        {id:7,dishes:[
                {id:1,name:"Dish"},
                {id:1,name:"Dish"},
                {id:2,name:"Dish"},
                {id:3,name:"Dish"},
                {id:4,name:"Dish"},
                {id:5,name:"Dish"},
                {id:6,name:"Dish"},
                {id:7,name:"Dish"},
                {id:8,name:"Dish"},
                {id:9,name:"Dish"},
                {id:10,name:"Dish"},
                {id:11,name:"Dish"},
                {id:12,name:"Dish"},
                {id:13,name:"Dish"},
                {id:14,name:"Dish"},
                {id:15,name:"Dish"},
                {id:16,name:"Dish"},
            ], title:"Check-7"},
        {id:8,dishes:[
                {id:1,name:"Dish"},
                {id:1,name:"Dish"},
                {id:2,name:"Dish"},
                {id:3,name:"Dish"},
                {id:4,name:"Dish"},
                {id:5,name:"Dish"},
                {id:6,name:"Dish"},
                {id:7,name:"Dish"},
                {id:8,name:"Dish"},
                {id:9,name:"Dish"},
                {id:10,name:"Dish"},
                {id:11,name:"Dish"},
                {id:12,name:"Dish"},
                {id:13,name:"Dish"},
                {id:14,name:"Dish"},
                {id:15,name:"Dish"},
                {id:16,name:"Dish"},
            ], title:"Check-8"},
        {id:9,dishes:[
                {id:1,name:"Dish"},
                {id:1,name:"Dish"},
                {id:2,name:"Dish"},
                {id:3,name:"Dish"},
                {id:4,name:"Dish"},
                {id:5,name:"Dish"},
                {id:6,name:"Dish"},
                {id:7,name:"Dish"},
                {id:8,name:"Dish"},
                {id:9,name:"Dish"},
                {id:10,name:"Dish"},
                {id:11,name:"Dish"},
                {id:12,name:"Dish"},
                {id:13,name:"Dish"},
                {id:14,name:"Dish"},
                {id:15,name:"Dish"},
                {id:16,name:"Dish"},
            ], title:"Check-8"},
        {id:10,dishes:[
                {id:1,name:"Dish"},
                {id:1,name:"Dish"},
                {id:2,name:"Dish"},
                {id:3,name:"Dish"},
                {id:4,name:"Dish"},
                {id:5,name:"Dish"},
                {id:6,name:"Dish"},
                {id:7,name:"Dish"},
                {id:8,name:"Dish"},
                {id:9,name:"Dish"},
                {id:10,name:"Dish"},
                {id:11,name:"Dish"},
                {id:12,name:"Dish"},
                {id:13,name:"Dish"},
                {id:14,name:"Dish"},
                {id:15,name:"Dish"},
                {id:16,name:"Dish"},
            ], title:"Check-10"},

        {id:11,dishes:[
                {id:1,name:"Dish"},
                {id:1,name:"Dish"},
                {id:2,name:"Dish"},
                {id:3,name:"Dish"},
                {id:4,name:"Dish"},
                {id:5,name:"Dish"},
                {id:6,name:"Dish"},
                {id:7,name:"Dish"},
                {id:8,name:"Dish"},
                {id:9,name:"Dish"},
                {id:10,name:"Dish"},
                {id:11,name:"Dish"},
                {id:12,name:"Dish"},
                {id:13,name:"Dish"},
                {id:14,name:"Dish"},
                {id:15,name:"Dish"},
                {id:16,name:"Dish"},
            ], title:"Check-11"},

        {id:12,dishes:[
                {id:1,name:"Dish"},
                {id:1,name:"Dish"},
                {id:2,name:"Dish"},
                {id:3,name:"Dish"},
                {id:4,name:"Dish"},
                {id:5,name:"Dish"},
                {id:6,name:"Dish"},
                {id:7,name:"Dish"},
                {id:8,name:"Dish"},
                {id:9,name:"Dish"},
                {id:10,name:"Dish"},
                {id:11,name:"Dish"},
                {id:12,name:"Dish"},
                {id:13,name:"Dish"},
                {id:14,name:"Dish"},
                {id:15,name:"Dish"},
                {id:16,name:"Dish"},
            ], title:"Check-12"},

        {id:13,dishes:[
                {id:1,name:"Dish"},
                {id:1,name:"Dish"},
                {id:2,name:"Dish"},
                {id:3,name:"Dish"},
                {id:4,name:"Dish"},
                {id:5,name:"Dish"},
                {id:6,name:"Dish"},
                {id:7,name:"Dish"},
                {id:8,name:"Dish"},
                {id:9,name:"Dish"},
                {id:10,name:"Dish"},
                {id:11,name:"Dish"},
                {id:12,name:"Dish"},
                {id:13,name:"Dish"},
                {id:14,name:"Dish"},
                {id:15,name:"Dish"},
                {id:16,name:"Dish"},
            ], title:"Check-13"},

        {id:14,dishes:[
                {id:1,name:"Dish"},
                {id:1,name:"Dish"},
                {id:2,name:"Dish"},
                {id:3,name:"Dish"},
                {id:4,name:"Dish"},
                {id:5,name:"Dish"},
                {id:6,name:"Dish"},
                {id:7,name:"Dish"},
                {id:8,name:"Dish"},
                {id:9,name:"Dish"},
                {id:10,name:"Dish"},
                {id:11,name:"Dish"},
                {id:12,name:"Dish"},
                {id:13,name:"Dish"},
                {id:14,name:"Dish"},
                {id:15,name:"Dish"},
                {id:16,name:"Dish"},
            ], title:"Check-14"}
    ]
}

const KdsPanelEx = (props)=>{
    const boardRef = useRef(null);
    const [screenBoard, setScreenBoard] = useState(null);
    const [shiftNumbers,setShiftNumbers] = useState(0);


    useEffect(()=>{
        console.log("init");
        console.log(boardRef.current.getBoundingClientRect());
        window.addEventListener('resize',drawBoard);
        drawBoard();
        return ()=>window.removeEventListener('resize',drawBoard);
    },[]);

    const drawBoard = () =>{
        const {height,width} = (boardRef.current.getBoundingClientRect());
        const board = new Board(height,width,coursesList.courses);
        board.initBoard()
       setScreenBoard(board);

    }

    const clickGoRight = (board:Board)=>{
        if(board==null)
            return;
        const shift_total = Math.ceil(board.pages[props.counter].panels/8)

        const isShift = (shiftNumbers+1)<shift_total

        if(isShift)
            setShiftNumbers(shiftNumbers+1)
        else {
            setShiftNumbers(0)
            props.shiftRight(board?.totalPages);
        }
    }
    const renderBoard = (page:number=0,shift_numbers:number=0)=>{

        if(!screenBoard) return <></>;

        page = page>screenBoard.totalPages?screenBoard.totalPages:(page<0?0:page);
        let board_page = screenBoard.pages[page];

        const shoePanelIndex= (panel,index_object,shift)=> {

            if (panel.mainPanel === null || index_object.idx===0)
                ++index_object.idx;

            if (index_object.idx>=shift+8*shift && index_object.idx <= 8*(shift+1))
                return <div className="panel-index">{index_object.idx}</div>;

            return <></>;
        }
        let index = {idx: 0}
        return (
            <div className="page-ex" key="1">
            {
                    board_page.columns.map((column, idx) => {
                return <div className="column-ex" key={idx}>
                    {column.panels.map((panel,i)=>{
                        return <div className="panel" key={i}>
                            {shoePanelIndex(panel,index,shift_numbers)}
                            <ul key={"panel-"+i} style={{marginBottom: '5px'}}>
                                <li key={"panel-title-"+i} style={{height: panel.dishHeight, fontSize: '0.8rem'}}
                                    className="panel-title" >{panel.title}</li>
                                {panel.dishes?.map((dish, i) => {
                                    return <li key={"panel-dish-"+i} style={{height: panel.dishHeight, fontSize: '0.8rem'}} className="panel-sub-dish">{dish.name}-{dish.id}</li>
                                })}
                            </ul>
                        </div>
                    })}
                </div>
                })}
        </div>
        )
    }

    return (

        <div className="kds-screen" id={crypto.randomUUID()}>
            <div className="kds-status-bar" id={crypto.randomUUID()}>
                <button onClick={()=>props.shiftLeft({board:screenBoard})} className="btn bt-primary btn-lg">Prev</button>
                <button onClick={()=>props.shiftRight({board:screenBoard})} className="btn bt-primary btn-lg">Next</button>


                <ul>
                    <li><label>Current Page:</label><span>{props.counter + 1}</span></li>
                    <li><label>Total Pages:</label><span>{(screenBoard ? screenBoard.totalPages : 0) + 1}</span></li>
                </ul>
            </div>
            <div className="kds-screen-body" ref={boardRef} key={crypto.randomUUID()}>
                {renderBoard(props.counter,shiftNumbers)}
            </div>
        </div>
    )
}
export default KdsActionsFactory.mapper(KdsPanelEx);