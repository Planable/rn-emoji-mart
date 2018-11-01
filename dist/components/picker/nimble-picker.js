'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=require('../../polyfills/extends');var _extends3=_interopRequireDefault(_extends2);var _objectGetPrototypeOf=require('../../polyfills/objectGetPrototypeOf');var _objectGetPrototypeOf2=_interopRequireDefault(_objectGetPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('../../polyfills/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('../../polyfills/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('../../polyfills/inherits');var _inherits3=_interopRequireDefault(_inherits2);require('../../vendor/raf-polyfill');var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');var _skin=require('../../utils/skin');var _skin2=_interopRequireDefault(_skin);var _frequently=require('../../utils/frequently');var _frequently2=_interopRequireDefault(_frequently);var _utils=require('../../utils');var _data=require('../../utils/data');var _sharedProps=require('../../utils/shared-props');var _=require('..');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var I18N={search:'Search',notfound:'No Emoji Found',categories:{search:'Search Results',recent:'Frequently Used',people:'Smileys & People',nature:'Animals & Nature',foods:'Food & Drink',activity:'Activity',places:'Travel & Places',objects:'Objects',symbols:'Symbols',flags:'Flags',custom:'Custom'}};var styles=_reactNative.StyleSheet.create({emojiMartPicker:{flexShrink:0,flexDirection:'column',backgroundColor:'#eceff1'},emojiMartScroll:{flexShrink:0},emojiMartAnchors:{flexShrink:0,maxHeight:90}});var NimblePicker=function(_React$PureComponent){(0,_inherits3.default)(NimblePicker,_React$PureComponent);function NimblePicker(props){(0,_classCallCheck3.default)(this,NimblePicker);var _this=(0,_possibleConstructorReturn3.default)(this,(NimblePicker.__proto__||(0,_objectGetPrototypeOf2.default)(NimblePicker)).call(this,props));_this.onScrollViewLayout=function(event){_this.clientWidth=event.nativeEvent.layout.width;};_this.onScrollViewContentSizeChange=function(contentWidth){_this.scrollWidth=contentWidth;};_this.RECENT_CATEGORY={id:'recent',name:'Recent',emojis:null};_this.CUSTOM_CATEGORY={id:'custom',name:'Custom',emojis:[]};_this.SEARCH_CATEGORY={id:'search',name:'Search',emojis:null,anchor:false};if(props.data.compressed){(0,_data.uncompress)(props.data);}_this.data=props.data;_this.i18n=(0,_utils.deepMerge)(I18N,props.i18n);_this.state={skin:props.skin||_skin2.default.get()||props.defaultSkin,firstRender:true};_this.scrollViewScrollLeft=0;_this.categories=[];var allCategories=[].concat(_this.data.categories);if(props.custom.length>0){_this.CUSTOM_CATEGORY.emojis=props.custom.map(function(emoji){return(0,_extends3.default)({},emoji,{id:emoji.short_names[0],custom:true});});allCategories.push(_this.CUSTOM_CATEGORY);}_this.hideRecent=true;if(props.include!=undefined){allCategories.sort(function(a,b){if(props.include.indexOf(a.id)>props.include.indexOf(b.id)){return 1;}return-1;});}for(var categoryIndex=0;categoryIndex<allCategories.length;categoryIndex++){var category=allCategories[categoryIndex];var isIncluded=props.include&&props.include.length?props.include.indexOf(category.id)>-1:true;var isExcluded=props.exclude&&props.exclude.length?props.exclude.indexOf(category.id)>-1:false;if(!isIncluded||isExcluded){continue;}if(props.emojisToShowFilter){var newEmojis=[];var emojis=category.emojis;for(var emojiIndex=0;emojiIndex<emojis.length;emojiIndex++){var emoji=emojis[emojiIndex];if(props.emojisToShowFilter(_this.data.emojis[emoji]||emoji)){newEmojis.push(emoji);}}if(newEmojis.length){var newCategory={emojis:newEmojis,name:category.name,id:category.id};_this.categories.push(newCategory);}}else{_this.categories.push(category);}}var includeRecent=props.include&&props.include.length?props.include.indexOf(_this.RECENT_CATEGORY.id)>-1:true;var excludeRecent=props.exclude&&props.exclude.length?props.exclude.indexOf(_this.RECENT_CATEGORY.id)>-1:false;if(includeRecent&&!excludeRecent){_this.hideRecent=false;_this.categories.unshift(_this.RECENT_CATEGORY);}if(_this.categories[0]){_this.categories[0].first=true;}_this.categories.unshift(_this.SEARCH_CATEGORY);_this.setAnchorsRef=_this.setAnchorsRef.bind(_this);_this.handleAnchorPress=_this.handleAnchorPress.bind(_this);_this.setSearchRef=_this.setSearchRef.bind(_this);_this.handleSearch=_this.handleSearch.bind(_this);_this.setScrollViewRef=_this.setScrollViewRef.bind(_this);_this.onScroll=_this.onScroll.bind(_this);_this.handleScroll=_this.handleScroll.bind(_this);_this.handleScrollPaint=_this.handleScrollPaint.bind(_this);_this.handleEmojiPress=_this.handleEmojiPress.bind(_this);_this.handleEmojiSelect=_this.handleEmojiSelect.bind(_this);_this.handleEmojiLongPress=_this.handleEmojiLongPress.bind(_this);_this.handleSkinChange=_this.handleSkinChange.bind(_this);return _this;}(0,_createClass3.default)(NimblePicker,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(props){if(props.skin){this.setState({skin:props.skin});}else if(props.defaultSkin&&!_skin2.default.get()){this.setState({skin:props.defaultSkin});}}},{key:'componentDidMount',value:function componentDidMount(){var _this2=this;if(this.state.firstRender){this.firstRenderTimeout=setTimeout(function(){_this2.setState({firstRender:false});},60);}}},{key:'componentDidUpdate',value:function componentDidUpdate(){this.handleScroll();}},{key:'componentWillUnmount',value:function componentWillUnmount(){this.SEARCH_CATEGORY.emojis=null;clearTimeout(this.leaveTimeout);clearTimeout(this.firstRenderTimeout);}},{key:'handleEmojiPress',value:function handleEmojiPress(emoji,e){this.props.onPress(emoji,e);this.handleEmojiSelect(emoji);}},{key:'handleEmojiSelect',value:function handleEmojiSelect(emoji){this.props.onSelect(emoji);if(!this.hideRecent&&!this.props.recent)_frequently2.default.add(emoji);var component=this.categoryRefs['category-1'];if(component){var maxMargin=component.maxMargin;component.forceUpdate();}}},{key:'handleEmojiLongPress',value:function handleEmojiLongPress(emoji,e){this.props.onLongPress(emoji,e);if(_reactNative.Platform.OS==='android'){_reactNative.ToastAndroid.showWithGravityAndOffset(emoji.id,_reactNative.ToastAndroid.SHORT,_reactNative.ToastAndroid.BOTTOM,0,190);}}},{key:'onScroll',value:function onScroll(event){this.scrollViewScrollLeft=event.nativeEvent.contentOffset.x;this.handleScroll();}},{key:'handleScroll',value:function handleScroll(){if(!this.waitingForPaint){this.waitingForPaint=true;this.handleScrollPaint();}}},{key:'handleScrollPaint',value:function handleScrollPaint(){this.waitingForPaint=false;if(!this.scrollView||!this.props.showAnchors){return;}var activeCategory=null;var scrollLeft=this.scrollViewScrollLeft;if(this.SEARCH_CATEGORY.emojis){activeCategory=this.SEARCH_CATEGORY;var component=this.categoryRefs['category-0'];if(component)component.handleScroll(scrollLeft);}else{for(var i=0,l=this.categories.length;i<l;i++){var ii=this.categories.length-1-i,category=this.categories[ii],_component=this.categoryRefs['category-'+ii];if(_component){var active=_component.handleScroll(scrollLeft);if(active&&!activeCategory){activeCategory=category;}}}}if(activeCategory){var anchors=this.anchors;var _activeCategory=activeCategory;var categoryName=_activeCategory.name;if(anchors.state.selected!=categoryName){anchors.onSelectAnchor(categoryName);}}this.scrollLeft=scrollLeft;}},{key:'handleSearch',value:function handleSearch(emojis){this.SEARCH_CATEGORY.emojis=emojis;for(var i=0,l=this.categories.length;i<l;i++){var component=this.categoryRefs['category-'+i];if(component&&component.props.name!='Search'){var display=emojis?false:true;component.forceUpdate();component.updateDisplay(display);}}this.forceUpdate();if(emojis)this.scrollView.scrollTo({x:0,animated:false});this.handleScroll();}},{key:'handleAnchorPress',value:function handleAnchorPress(category,i){var component=this.categoryRefs['category-'+i];var scrollView=this.scrollView;var anchors=this.anchors;var scrollToComponent=null;scrollToComponent=function scrollToComponent(){if(component){var left=component.left;if(category.first){left=0;}scrollView.scrollTo({x:left,animated:false});}};if(this.SEARCH_CATEGORY.emojis){this.handleSearch(null);this.search.clear();}setTimeout(scrollToComponent,0);}},{key:'handleSkinChange',value:function handleSkinChange(skin){var newState={skin:skin};var onSkinChange=this.props.onSkinChange;this.setState(newState);_skin2.default.set(skin);onSkinChange(skin);}},{key:'getCategories',value:function getCategories(){return this.state.firstRender?this.categories.slice(0,3):this.categories;}},{key:'setAnchorsRef',value:function setAnchorsRef(c){this.anchors=c;}},{key:'setSearchRef',value:function setSearchRef(c){this.search=c;}},{key:'setScrollViewRef',value:function setScrollViewRef(c){this.scrollView=c;}},{key:'setCategoryRef',value:function setCategoryRef(name,c){if(!this.categoryRefs){this.categoryRefs={};}this.categoryRefs[name]=c;if(!this.categoryPages){this.categoryPages={};}this.categoryPages[name]=c?c.pages:{};}},{key:'render',value:function render(){var _this3=this;var _props=this.props;var perLine=_props.perLine;var rows=_props.rows;var pagesToLazyLoad=_props.pagesToLazyLoad;var emojiSize=_props.emojiSize;var emojiMargin=_props.emojiMargin;var anchorSize=_props.anchorSize;var set=_props.set;var style=_props.style;var title=_props.title;var emoji=_props.emoji;var color=_props.color;var native=_props.native;var emojiImageFn=_props.emojiImageFn;var emojisToShowFilter=_props.emojisToShowFilter;var showSkinTones=_props.showSkinTones;var showAnchors=_props.showAnchors;var showCloseButton=_props.showCloseButton;var emojiTooltip=_props.emojiTooltip;var include=_props.include;var exclude=_props.exclude;var recent=_props.recent;var autoFocus=_props.autoFocus;var useLocalImages=_props.useLocalImages;var categoryEmojis=_props.categoryEmojis;var onPressClose=_props.onPressClose;var skin=this.state.skin;var emojiSizing=emojiSize+emojiMargin;var emojisListWidth=320;var emojisListHeight=rows*emojiSizing+emojiMargin;return _react2.default.createElement(_reactNative.View,{style:[styles.emojiMartPicker,(0,_extends3.default)({},style),{width:emojisListWidth}]},_react2.default.createElement(_.Search,{ref:this.setSearchRef,onSearch:this.handleSearch,data:this.data,i18n:this.i18n,emojisToShowFilter:emojisToShowFilter,include:include,exclude:exclude,custom:this.CUSTOM_CATEGORY.emojis,autoFocus:autoFocus,onPressClose:onPressClose,showSkinTones:showSkinTones,skinsProps:{skin:skin,onChange:this.handleSkinChange},showCloseButton:showCloseButton}),_react2.default.createElement(_reactNative.ScrollView,{ref:this.setScrollViewRef,onLayout:this.onScrollViewLayout,onContentSizeChange:this.onScrollViewContentSizeChange,style:[styles.emojiMartScroll,{width:emojisListWidth,height:emojisListHeight}],onScroll:this.onScroll,horizontal:true,pagingEnabled:true,scrollEventThrottle:100,keyboardShouldPersistTaps:'handled'},this.getCategories().map(function(category,i){return _react2.default.createElement(_.Category,{ref:_this3.setCategoryRef.bind(_this3,'category-'+i),key:category.name,id:category.id,name:category.name,emojis:category.emojis,perLine:perLine,rows:rows,pagesToLazyLoad:pagesToLazyLoad,native:native,data:_this3.data,i18n:_this3.i18n,recent:category.id==_this3.RECENT_CATEGORY.id?recent:undefined,custom:category.id==_this3.RECENT_CATEGORY.id?_this3.CUSTOM_CATEGORY.emojis:undefined,initialPosition:_this3.scrollViewScrollLeft,emojiProps:{native:native,skin:skin,size:emojiSize,margin:emojiMargin,set:set,forceSize:native,tooltip:emojiTooltip,emojiImageFn:emojiImageFn,useLocalImages:useLocalImages,onPress:_this3.handleEmojiPress,onLongPress:_this3.handleEmojiLongPress}});})),showAnchors?_react2.default.createElement(_reactNative.View,{style:styles.emojiMartAnchors},_react2.default.createElement(_.Anchors,{ref:this.setAnchorsRef,data:this.data,i18n:this.i18n,color:color,categories:this.categories,onAnchorPress:this.handleAnchorPress,categoryEmojis:categoryEmojis,emojiProps:{native:native,skin:skin,size:anchorSize,set:set,forceSize:native,emojiImageFn:emojiImageFn,useLocalImages:useLocalImages}})):null);}}]);return NimblePicker;}(_react2.default.PureComponent);NimblePicker.defaultProps=(0,_extends3.default)({},_sharedProps.PickerDefaultProps);exports.default=NimblePicker;