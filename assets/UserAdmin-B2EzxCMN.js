import{E as e,_ as t}from"./index-DKuwJ9Lq.js";import{E as s}from"./el-button-dNgr3tDI.js";import{_ as a,E as o,a as r}from"./el-message-box-BUmCxU4I.js";import{u as l}from"./userModels-DPFQYI2-.js";import{u as i}from"./homeModels-BsXxsRno.js";import{_ as n,r as p,f as m,M as u,u as d,o as c,D as f,I as j,V as v}from"./vendor-DJ8gqV4u.js";import"./wangeditor-oAbnVgNb.js";import"./el-input-DHpRzLZV.js";import"./el-overlay-ADcAqFpP.js";import"./utils-CNKHhdMi.js";import"./index-CCBTS1bG.js";import"./index-6GhR2_vx.js";import"./index-D2oWfImC.js";import"./index-Co2D6pNI.js";import"./el-select-DU0EgNDg.js";import"./el-popper-CX7lnI2R.js";import"./error-D_Dr4eZ1.js";import"./event-BwRzfsZt.js";import"./scroll-B4qvjNk2.js";import"./debounce-CzY8fXHI.js";import"./index-DFjnwy7q.js";import"./el-tooltip-IhpudEdO.js";import"./el-form-item-CKUFkJhi.js";import"./url-DjwWyOfx.js";import"./index-IMQ-qN8B.js";const g=t({__name:"UserAdmin",setup(t){const g=l(),{pageList:x,pagination:w}=n(g),b=p(null),h=p({}),{userInfo:y}=n(i()),D=m((()=>"admin"===y.value.username)),_=[{type:"input",label:"姓名",prop:"username"},{type:"query"},{type:"reset"},{render:()=>f(s,{type:"primary",onClick:()=>I({},"add")},{default:()=>[j("新增")]})}],C=m((()=>({total:x.value.total,list:x.value.list}))),M=[{prop:"username",label:"姓名",align:"center",width:"300",render:({row:t,column:s,index:a})=>f("div",{class:"name-group"},[f("div",{style:"max-width: 120px;white-space: nowrap;overflow: hidden;text-overflow:ellipsis;"},[t.username]),f("span",{class:"icon-group"},[D.value&&f(e,{title:"编辑"},{default:()=>[f(v("EditPen"),{color:"#409eff",onclick:()=>I(t,"edit")},null)]}),D.value&&f(e,{title:"删除"},{default:()=>[f(v("Delete"),{color:"red",onclick:()=>k(t)},null)]})])])},{label:"邮箱",prop:"email",align:"center"}],E=[{label:"姓名",prop:"username",type:"input",rules:[{required:!0}]},{label:"登录密码",prop:"password",type:"input",showPassword:!0,rules:[{required:!0}]},{label:"邮箱",prop:"email",type:"input",align:"center"}],I=(e,t)=>{"add"===t&&(h.value={}),"edit"===t&&(h.value={...e}),o({title:"新增/编辑",closeOnClickModal:!1,customClass:"custom-message-box",message:()=>f(r,{ref:b,formModel:h,formItems:E},null),beforeClose:(e,t,s)=>{if("confirm"===e){if(b.value){const e=b.value.form,t=b.value.formData||{};e.validate((e=>{e&&g.saveUser(t).then((e=>{0===e.code&&s()}))}))}}else s()}})},k=e=>{o({title:"",message:"确定要删除吗？",type:"warning"}).then((t=>{"confirm"===t&&g.deleteUser(e)}))};return(e,t)=>(c(),u(a,{class:"user-admin",tableData:C.value,tableColumns:M,showPagination:"",showSort:"","default-expand-all":"",fetchDataAction:d(g).getUsers,searchItems:_,pagination:d(w)},null,8,["tableData","fetchDataAction","pagination"]))}},[["__scopeId","data-v-d6989909"]]);export{g as default};
