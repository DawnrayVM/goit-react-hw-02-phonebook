(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{30:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(16),c=n.n(r),i=n(14),s=n(6),l=n(8),b=n(3),d=n(12),u=n(11),h=n(32),m=n(7),j=n(4),p=n.n(j),f=n(1),x=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={name:"",number:""},t.handleInputChange=function(e){t.setState(Object(m.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state,e=t.number,n=t.name;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{className:p.a.title,children:this.props.title}),Object(f.jsxs)("form",{onSubmit:this.handleSubmit,className:p.a.container,children:[Object(f.jsxs)("label",{className:p.a.formItem,children:["Name:",Object(f.jsx)("input",{type:"text",name:"name",value:n,onChange:this.handleInputChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(f.jsxs)("label",{className:p.a.formItem,children:["Number:",Object(f.jsx)("input",{type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:e,onChange:this.handleInputChange})]}),Object(f.jsx)("button",{type:"Submit",className:p.a.phonebookBtn,children:"Add contact"})]})]})}}]),n}(a.Component),g=n(10),O=Object(g.a)({contactTitle:{fontFamily:"Roboto",fontSize:28,fontWeight:700},contactsList:{flexDirection:"column",fontFamily:"Roboto",fontSize:20,width:370,marginTop:10,padding:"10px 10px",border:"1px solid rgba(225, 225, 225, 10)",borderRadius:5,boxShadow:"3px 3px 5px 0px rgba(225, 225, 225, 10)"},deleteBtn:{display:"block",width:100,borderStyle:"none",fontWeight:500,fontSize:16,color:"white",textDecoration:"none",padding:"5px 10px",borderRadius:3,background:"rgb(64,199,129)",boxShadow:"0 -3px rgb(53,167,110) inset",transition:"0.2s","&:hover":{background:"rgb(53, 167, 110)"},"&:active":{background:"rgb(33,147,90)",boxShadow:"0 3px rgb(33,147,90) inset"}},listItem:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:5,"&:last-child":{marginBottom:0}},listText:{margin:0}}),C=function(t){var e=t.contacts,n=t.onDeleteContact,a=t.title,o=t.children,r=O(),c=e.map((function(t){var e=t.name,a=t.id,o=t.number;return Object(f.jsxs)("li",{className:r.listItem,children:[Object(f.jsxs)("p",{className:r.listText,children:[e,": ",o]}),Object(f.jsx)("button",{type:"button",onClick:function(){return n(a)},className:r.deleteBtn,children:"Delete"})]},a)}));return e.length>0&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{className:r.contactTitle,children:a}),o,Object(f.jsx)("ul",{className:r.contactsList,children:c})]})},v=Object(g.a)({filterForm:{fontFamily:"Roboto",width:370,marginTop:10,padding:"15px 10px",border:"1px solid rgba(225, 225, 225, 10)",borderRadius:5,boxShadow:"3px 3px 5px 0px rgba(225, 225, 225, 10)"},filterInput:{fontSize:20,width:360},filterTitle:{fontFamily:"Roboto",fontSize:26,fontWeight:500}}),y=function(t){var e=t.filterValue,n=t.onChange,a=v();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{className:a.filterTitle,children:"Find contact by name:"}),Object(f.jsx)("form",{className:a.filterForm,children:Object(f.jsx)("label",{children:Object(f.jsx)("input",{type:"text",value:e,onChange:n,className:a.filterInput})})})]})},S=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={contacts:[],filter:""},t.handleAddContact=function(e){var n={id:Object(h.a)(),name:e.name,number:e.number};t.setState((function(t){return{contacts:Object.values(t.contacts.map((function(t){return t.name})).includes(n.name)?(alert("".concat(n.name," is already in contacts.")),Object(s.a)(t.contacts)):[].concat(Object(s.a)(t.contacts),[n]))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}})),t.filterReset()},t.handleFilter=function(e){t.setState({filter:e.currentTarget.value})},t.filterReset=function(){t.setState((function(t){return Object(i.a)(Object(i.a)({},t),{},{filter:""})}))},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,a=e.toLowerCase(),o=n.filter((function(t){return t.name.toLowerCase().includes(a)}));return Object(f.jsxs)("main",{children:[Object(f.jsx)(x,{title:"Phonebook",onAddContact:this.handleAddContact}),Object(f.jsx)(C,{title:"Contacts",contacts:o,onDeleteContact:this.deleteContact,children:Object(f.jsx)(y,{filterValue:e,onChange:this.handleFilter})})]})}}]),n}(a.Component);c.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={title:"Phonebook_title__2TudX",container:"Phonebook_container__2EiLJ",formItem:"Phonebook_formItem__zQp-s",phonebookBtn:"Phonebook_phonebookBtn__2tbtq"}}},[[30,1,2]]]);
//# sourceMappingURL=main.c4b5c0e8.chunk.js.map