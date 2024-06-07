import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import './splitter.css'
import {MainItem} from "../kds/domain/main-item";
import {Modifier} from "../kds/domain/modifier";
import {Course} from "../kds/domain/course";
import type {Item} from "../kds/domain/item";
import {ModifierNode} from "../kds/nodes/modifier-node";
import {MainItemNode} from "../kds/nodes/main-item-node";

const items_list:Array<MainItem> = [
        new MainItem("Item-1",
        [
            new Modifier("Mod-1"),
            new Modifier("Mod-2"),
            new Modifier("Mod-3"),
            new Modifier("Mod-4"),
        ]),
        new MainItem("Item-2",
        [
            new Modifier("Mod-1"),
            new Modifier("Mod-2"),
            new Modifier("Mod-3"),
            new Modifier("Mod-4"),
            new Modifier("Mod-5"),
            new Modifier("Mod-6")
        ])]

const courses:Array<Course> = [new Course(items_list,"Course-1")];
const courses_arr = [{items:[
        {name:"Item-1",
            modifiers:[
                {name:"Mod-1"},
                {name:"Mod-2"},
                {name:"Mod-3"},
                {name:"Mod-4"}
                ]},
        {name:"Item-2",
            modifiers: [
                {name:"Mod-1"},
                {name:"Mod-2"},
                {name:"Mod-3"},
                {name:"Mod-4",modifiers:[
                        {name:"Mod-4-1"},
                        {name:"Mod-4-2"},
                    ]},
                {name:"Mod-5"},
                {name:"Mod-6"}
            ]}
    ],title:"Course-1"}]

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

const buildCourses = (nums=10) =>{
   let courses_arr = [];
    for(let i=0;i<nums;i++){
        let course = {title:"course-"+i, items:[]};
       for(let item=0; item<getRandomInt(1,5); item++){
            let curr_item = {name:"Item-"+i+"-"+item,modifiers:[]}
            for(let modifier=0;modifier<getRandomInt(0,10);modifier++){
                curr_item.modifiers.push({name:"Mod-"+i+"-"+item+"-"+modifier})
            }
            course.items.push(curr_item);
       }
       courses_arr.push(course);
    }

    return courses_arr;
}

export const Splitter = () =>{

    const [coursesList,setCourseList] = useState(courses_arr);

    useEffect(()=>{
       console.log("init",coursesList)
        builder([...coursesList],10)
    },[])

    const builder = (courses:Array<Course>,edge_index,course_idx=0) =>{

        if(courses.length===course_idx)
            return 0;
        let new_courses = splitCourse(courses[course_idx],[...courses[course_idx].items],edge_index);
        courses.splice(course_idx,new_courses.length,...new_courses);
        course_idx+=new_courses.length;
        builder(courses,edge_index,course_idx)

    }
   const splitCourse = (course,items,split_edge)=>
   {
       let new_items_list = prepareItems(items)
       return split(course,new_items_list,split_edge)
   }

   const prepareItems =  (items,new_items_list,level=0) =>{
        new_items_list = new_items_list || []

        items.forEach((item,i)=>{
            let node = level===0?new MainItemNode(item):new ModifierNode(item)

            if(new_items_list.length>0) {
                let prev_node = new_items_list[new_items_list.length-1];
                node.parent = new_items_list[new_items_list.length-1];
                prev_node.child = node;
            }
            new_items_list.push(node)
            if(item.modifiers && item.modifiers.length>0)
                prepareItems(item.modifiers,new_items_list,level+1)
        })
       return new_items_list;
   }

    const split = (course,items_list,split_by, new_courses) =>{
        new_courses = new_courses || []
        if(items_list.length>split_by)
        {
            let new_course = new Course(items_list.splice(0, split_by),course.title)
                if(new_courses.length>0)
                {
                    new_course.mainCourse = new_courses[new_courses.length-1]
                    new_courses[new_courses.length-1].childCourse = new_course;
                }
                new_courses.push(new_course);
            split(course,items_list,split_by,new_courses);
        }
        else {
            let new_course = new Course(items_list, course.title)
            new_course.mainCourse = new_course[new_courses.length - 1];
            new_courses.push(new_course)
        }
        return new_courses
    }
    return (
        <div className="content">
            {
                coursesList.map((course,i) => {
                    return <div className="course" key={i}>
                        <div className="course-title" key={"course-"+i}>{course.title}</div>
                        {
                            course.items.map((item, j)=>{
                                return <ul key={j}>
                                    <li key={"title-"+j}>{item.name}</li>
                                    {
                                        item.modifiers?.map((modifier,m)=>{
                                            return <li key={m}>{modifier.name}</li>
                                        })
                                    }
                                </ul>
                            })
                        }
                    </div>
                })
            }
        </div>
    )
}