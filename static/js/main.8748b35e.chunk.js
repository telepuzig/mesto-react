(this.webpackJsonpmesto=this.webpackJsonpmesto||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/mestoLogo.e889e45f.svg"},function(e,t,a){e.exports=a.p+"static/media/editButton.58afbe73.svg"},function(e,t,a){e.exports=a.p+"static/media/addButton.bdfb8ebb.svg"},,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),o=a.n(r),s=(a(19),a(12)),c=a(13),l=a(1),p=a(2),u=a(4),d=a(3),m=a(9),h=a.n(m),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return i.a.createElement("header",{className:"header"},i.a.createElement("img",{className:"logo",src:h.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}))}}]),a}(i.a.Component),_=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))}}]),a}(i.a.Component),v=i.a.createContext(),b=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).handleClick=function(){e.props.onCardClick(e.props.card)},e.handleLikeClick=function(){e.props.onCardLike(e.props.card)},e.handleDeleteCard=function(){e.props.onCardDelete(e.props.card)},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.props.card.owner._id===this.context._id,a=this.props.card.likes.some((function(t){return t._id===e.context._id}));return i.a.createElement("div",{className:"place"},i.a.createElement("img",{className:"place__image",src:this.props.card.link,alt:this.props.card.name,onClick:this.handleClick}),t&&i.a.createElement("button",{type:"button",className:"place__delete-card",onClick:this.handleDeleteCard}),i.a.createElement("div",{className:"place__description"},i.a.createElement("p",{className:"place__name"},this.props.card.name),i.a.createElement("div",{className:"place__like-box"},i.a.createElement("button",{type:"button",className:a?"place__like place__like_active":"place__like",onClick:this.handleLikeClick}),i.a.createElement("p",{className:"place__count"},this.props.card.likes.length))))}}]),a}(i.a.Component);b.contextType=v;var k=b,C=a(10),E=a.n(C),g=a(11),O=a.n(g),y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("main",{className:"content"},i.a.createElement("section",{className:"profile"},i.a.createElement("div",{className:"profile__box"},i.a.createElement("button",{className:"profile__avabutton",type:"button",onClick:this.props.onEditAvatar},i.a.createElement("img",{alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar",src:this.context.avatar})),i.a.createElement("div",{className:"profile__info"},i.a.createElement("div",{className:"profile__details"},i.a.createElement("h1",{className:"profile__name"},this.context.name),i.a.createElement("button",{type:"button",className:"button profile__edit-button",onClick:this.props.onEditProfile},i.a.createElement("img",{src:E.a,alt:"\u0420\u0443\u0447\u043a\u0430"}))),i.a.createElement("p",{className:"profile__job"},this.context.about))),i.a.createElement("button",{type:"button",className:"button profile__add-button",onClick:this.props.onAddPlace},i.a.createElement("img",{src:O.a,alt:"\u041f\u043b\u044e\u0441"}))),i.a.createElement("section",{className:"places"},this.props.cards.map((function(t){return i.a.createElement(k,{card:t,key:t._id,onCardClick:e.props.onCardClick,onCardLike:e.props.onCardLike,onCardDelete:e.props.onCardDelete})}))))}}]),a}(i.a.Component);y.contextType=v;var N=y;var P=function(){return i.a.createElement("div",{className:"spinner"})},j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(p.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:this.props.card?"popup popup_type_img popup_opened":"popup popup_type_img"},i.a.createElement("div",{className:"popup__image-container"},i.a.createElement("button",{className:"popup__close",type:"button",onClick:this.props.onClose}),i.a.createElement("img",{className:"popup__image",src:this.props.image.link,alt:this.props.image.name}),i.a.createElement("p",{className:"popup__text"},this.props.image.name)))}}]),a}(i.a.Component);var A=function(e){return i.a.createElement("div",{className:"popup popup_type_".concat(e.name,"\n    ").concat(e.isOpen?"popup_opened":"")},i.a.createElement("div",{className:"popup__container"},i.a.createElement("button",{className:"popup__close",type:"button",onClick:e.onClose}),i.a.createElement("h3",{className:"popup__title"},e.title),i.a.createElement("form",{className:"form",name:e.name,noValidate:!0,onSubmit:e.onSubmit},e.children,i.a.createElement("button",{type:"submit",className:"popup__save-btn"},e.btnTitle))))},S=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleNameChange=function(e){n.setState({name:e.target.value})},n.handleLinkChange=function(e){n.setState({link:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.onAddPlace({name:n.state.name,link:n.state.link}),n.setState({name:"",link:""})},n.state={name:"",link:""},n}return Object(p.a)(a,[{key:"render",value:function(){return i.a.createElement(A,{name:"card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",btnTitle:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:this.props.isOpen,onClose:this.props.onClose,onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_type_place",minLength:"1",maxLength:"30",required:!0,id:"name-input",value:this.state.name,onChange:this.handleNameChange}),i.a.createElement("span",{className:"popup__input-error",id:"name-input-error"}),i.a.createElement("input",{type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_type_link",required:!0,id:"url-input",value:this.state.link,onChange:this.handleLinkChange}),i.a.createElement("span",{className:"popup__input-error",id:"url-input-error"}))}}]),a}(i.a.Component),L=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),n.props.onUpdateAvatar(n.imageLinkRef.current.value),n.imageLinkRef.current.value=""},n.imageLinkRef=i.a.createRef(),n}return Object(p.a)(a,[{key:"render",value:function(){return i.a.createElement(A,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:this.props.isOpen,onClose:this.props.onClose,onSubmit:this.handleSubmit,btnTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"},i.a.createElement("input",{type:"url",className:"popup__input popup__input_type_link",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"avatar-input",required:!0,ref:this.imageLinkRef}),i.a.createElement("span",{className:"popup__input-error",id:"avatar-input-error"}))}}]),a}(i.a.Component),U=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleNameChange=function(e){n.setState({name:e.target.value})},n.handleDescriptionChange=function(e){n.setState({description:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.onUpdateUser({name:n.state.name,about:n.state.description})},n.state={name:"",description:""},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.setState({name:this.context.name,description:this.context.about})}},{key:"render",value:function(){return i.a.createElement(A,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:this.props.isOpen,onClose:this.props.onClose,onSubmit:this.handleSubmit,btnTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"},i.a.createElement("input",{type:"text",name:"name",placeholder:"\u0418\u043c\u044f",className:"popup__input popup__input_type_name",required:!0,pattern:"[a-zA-Z\u0410-\u042f\u0401\u0430-\u044f\u0451\\s\\-]+",minLength:"2",maxLength:"40",id:"name-input",value:this.state.name,onChange:this.handleNameChange}),i.a.createElement("span",{className:"popup__input-error",id:"name-input-error"}),i.a.createElement("input",{type:"text",name:"job",placeholder:"\u041e \u0441\u0435\u0431\u0435",className:"popup__input popup__input_type_job",required:!0,minLength:"2",maxLength:"200",id:"job-input",value:this.state.description,onChange:this.handleDescriptionChange}),i.a.createElement("span",{className:"popup__input-error",id:"job-input-error"}))}}]),a}(i.a.Component);U.contextType=v;var x=U,I=new(function(){function e(t,a){Object(l.a)(this,e),this._baseURL=t,this._token=a}return Object(p.a)(e,[{key:"_fetchInfo",value:function(e,t){return fetch(this._baseURL+e,t).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return this._fetchInfo("/users/me",{headers:{authorization:this._token}})}},{key:"updUserInfo",value:function(e){return this._fetchInfo("/users/me",{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(e)})}},{key:"getInitialCards",value:function(){return this._fetchInfo("/cards",{headers:{authorization:this._token}})}},{key:"uploadCard",value:function(e){return this._fetchInfo("/cards",{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(e)})}},{key:"likeCard",value:function(e,t){var a;return a=t?"DELETE":"PUT",this._fetchInfo("/cards/likes/"+e,{method:a,headers:{authorization:this._token}})}},{key:"deleteCard",value:function(e){return this._fetchInfo("/cards/"+e,{method:"DELETE",headers:{authorization:this._token}})}},{key:"changeAvatar",value:function(e){return this._fetchInfo("/users/me/avatar",{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})})}}]),e}())("https://mesto.nomoreparties.co/v1/cohort-12","d358cac0-a420-4d4c-9dd2-c14a231c4bbb"),D=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleEditAvatarClick=function(){n.setState({isEditAvatarPopupOpen:!0})},n.handleEditProfileClick=function(){n.setState({isEditProfilePopupOPen:!0})},n.handleAddPlaceClick=function(){n.setState({isAddPlacePopupOpen:!0})},n.handleCardClick=function(e){n.setState({selectedCard:!0,dataImg:{link:e.link,name:e.name}})},n.closeAllPopups=function(){n.setState({isEditProfilePopupOPen:!1,isAddPlacePopupOpen:!1,isEditAvatarPopupOpen:!1,selectedCard:!1,dataImg:{link:null,name:null}})},n.handleUpdateUser=function(e){I.updUserInfo(e).then((function(e){n.setState({currentUser:e}),n.closeAllPopups()})).catch((function(e){return console.log(e)}))},n.handleUpdateAvatar=function(e){I.changeAvatar(e).then((function(e){n.setState({currentUser:e}),n.closeAllPopups()})).catch((function(e){return console.log(e)}))},n.handleAddPlaceSubmit=function(e){I.uploadCard(e).then((function(e){n.setState({cards:[e].concat(Object(c.a)(n.state.cards))}),n.closeAllPopups()})).catch((function(e){return console.log(e)}))},n.handleCardLike=function(e){var t=e.likes.some((function(e){return e._id===n.state.currentUser._id}));I.likeCard(e._id,t).then((function(t){var a=n.state.cards.map((function(a){return a._id===e._id?t:a}));n.setState({cards:a})})).catch((function(e){return console.log(e)}))},n.handleCardDelete=function(e){I.deleteCard(e._id).then((function(t){var a=n.state.cards.filter((function(t){return t._id!==e._id}));n.setState({cards:a})})).catch((function(e){return console.log(e)}))},n.state={isEditProfilePopupOPen:!1,isAddPlacePopupOpen:!1,isEditAvatarPopupOpen:!1,isLoading:!1,selectedCard:!1,currentUser:null,dataImg:{link:null,name:null}},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),Promise.all([I.getUserInfo(),I.getInitialCards()]).then((function(t){var a=Object(s.a)(t,2),n=a[0],i=a[1];e.setState({currentUser:n,cards:i,isLoading:!1})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"page"},i.a.createElement(v.Provider,{value:this.state.currentUser},i.a.createElement(f,null),this.state.isLoading?i.a.createElement(P,null):this.state.currentUser&&i.a.createElement(N,{onEditProfile:this.handleEditProfileClick,onAddPlace:this.handleAddPlaceClick,onEditAvatar:this.handleEditAvatarClick,onCardClick:this.handleCardClick,cards:this.state.cards,onCardLike:this.handleCardLike,onCardDelete:this.handleCardDelete}),i.a.createElement(_,null),this.state.currentUser&&i.a.createElement(x,{isOpen:this.state.isEditProfilePopupOPen,onClose:this.closeAllPopups,onUpdateUser:this.handleUpdateUser}),i.a.createElement(S,{isOpen:this.state.isAddPlacePopupOpen,onClose:this.closeAllPopups,onAddPlace:this.handleAddPlaceSubmit}),i.a.createElement(L,{isOpen:this.state.isEditAvatarPopupOpen,onClose:this.closeAllPopups,onUpdateAvatar:this.handleUpdateAvatar}),i.a.createElement(j,{card:this.state.selectedCard,onClose:this.closeAllPopups,image:this.state.dataImg})))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.8748b35e.chunk.js.map