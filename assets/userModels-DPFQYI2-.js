import{a1 as t}from"./vendor-DJ8gqV4u.js";import{d as s,p as a,O as e}from"./index-DKuwJ9Lq.js";import{a as r}from"./url-DjwWyOfx.js";const o=t("userStoreData",{state:()=>({pageList:{total:0,list:[]},pageDetail:{content:""},pagination:{pageSize:10,pageNo:1}}),actions:{async getUsers(t){const s={...this.pagination,...t};return new Promise((async(t,a)=>{try{const a=await e(r.users,s);this.pageList={total:a.total,list:a.data||[]},t(a)}catch(o){a(o)}}))},async saveUser(t,s=!0){return new Promise((async(e,o)=>{try{const o=await a(r.users,t);0===(null==o?void 0:o.code)&&s&&this.getUsers({}),e(o)}catch(i){o(i)}}))},async deleteUser(t,a=!0){return new Promise((async(e,o)=>{try{const o=await s(r.users,t);0===o.code&&a&&this.getUsers({}),e(o)}catch(i){o(i)}}))}},persist:!0});export{o as u};
