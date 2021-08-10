// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.agents.zapper');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('pucks.agents.generic');
pucks.agents.zapper.draw_zapper = (function pucks$agents$zapper$draw_zapper(p){
var vec__13377 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(p);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13377,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13377,(1),null);
var radius = cljs.core.cst$kw$radius.cljs$core$IFn$_invoke$arity$1(p);
var vec__13380 = cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(p);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13380,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13380,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13380,(2),null);
quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2(x,y);

quil.core.fill.cljs$core$IFn$_invoke$arity$4(r,g,b,(100));

quil.core.ellipse((0),(0),(radius * (2)),(radius * (2)));

quil.core.fill.cljs$core$IFn$_invoke$arity$3(r,g,b);

quil.core.ellipse((0),(0),radius,radius);

return quil.core.pop_matrix();
});
pucks.agents.zapper.zapper_proposals = (function pucks$agents$zapper$zapper_proposals(p){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transfer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = (function pucks$agents$zapper$zapper_proposals_$_iter__13383(s__13384){
return (new cljs.core.LazySeq(null,(function (){
var s__13384__$1 = s__13384;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13384__$1);
if(temp__5735__auto__){
var s__13384__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13384__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13384__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13386 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13385 = (0);
while(true){
if((i__13385 < size__4522__auto__)){
var victim = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13385);
cljs.core.chunk_append(b__13386,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(victim),cljs.core.cst$kw$bid,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ask,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$energy,0.1], null)], null));

var G__13387 = (i__13385 + (1));
i__13385 = G__13387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13386),pucks$agents$zapper$zapper_proposals_$_iter__13383(cljs.core.chunk_rest(s__13384__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13386),null);
}
} else {
var victim = cljs.core.first(s__13384__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(victim),cljs.core.cst$kw$bid,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ask,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$energy,0.1], null)], null),pucks$agents$zapper$zapper_proposals_$_iter__13383(cljs.core.rest(s__13384__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mobile,cljs.core.cst$kw$overlaps.cljs$core$IFn$_invoke$arity$1(p)));
})())], null);
});
pucks.agents.zapper.zapper = (function pucks$agents$zapper$zapper(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.generic.generic(),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$zapper,true,cljs.core.cst$kw$radius,(50),cljs.core.cst$kw$color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(207),(19),(200)], null),cljs.core.cst$kw$draw_DASH_function,pucks.agents.zapper.draw_zapper,cljs.core.cst$kw$proposal_DASH_function,pucks.agents.zapper.zapper_proposals], null)], 0));
});
