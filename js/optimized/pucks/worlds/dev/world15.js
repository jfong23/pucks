// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.dev.world15');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.swarmevolver');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
pucks.worlds.dev.world15.agents = (function pucks$worlds$dev$world15$agents(){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__4523__auto__ = (function pucks$worlds$dev$world15$agents_$_iter__13524(s__13525){
return (new cljs.core.LazySeq(null,(function (){
var s__13525__$1 = s__13525;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13525__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__13525__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world15$agents_$_iter__13524_$_iter__13526(s__13527){
return (new cljs.core.LazySeq(null,((function (s__13525__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__13527__$1 = s__13527;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13527__$1);
if(temp__5735__auto____$1){
var s__13527__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13527__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13527__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13529 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13528 = (0);
while(true){
if((i__13528 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13528);
cljs.core.chunk_append(b__13529,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pucks.agents.vent.vent(),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__13530 = (i__13528 + (1));
i__13528 = G__13530;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13529),pucks$worlds$dev$world15$agents_$_iter__13524_$_iter__13526(cljs.core.chunk_rest(s__13527__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13529),null);
}
} else {
var y = cljs.core.first(s__13527__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pucks.agents.vent.vent(),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),pucks$worlds$dev$world15$agents_$_iter__13524_$_iter__13526(cljs.core.rest(s__13527__$2)));
}
} else {
return null;
}
break;
}
});})(s__13525__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__13525__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(1200),(200))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$dev$world15$agents_$_iter__13524(cljs.core.rest(s__13525__$1)));
} else {
var G__13531 = cljs.core.rest(s__13525__$1);
s__13525__$1 = G__13531;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(1200),(200)));
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pucks.agents.zapper.zapper(),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(450)], null)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pucks.agents.zapper.zapper(),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(450),(600)], null)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pucks.agents.zapper.zapper(),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(750),(600)], null)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pucks.agents.zapper.zapper(),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(750)], null))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pucks.agents.nursery.nursery(pucks.agents.swarmevolver.swarmevolver),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null))], null)], 0)));
});
pucks.worlds.dev.world15.settings = (function pucks$worlds$dev$world15$settings(){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$screen_DASH_size,(1200),cljs.core.cst$kw$scale,0.6,cljs.core.cst$kw$single_DASH_thread_DASH_mode,false,cljs.core.cst$kw$nursery_DASH_threshold,(5),cljs.core.cst$kw$max_DASH_velocity,(40),cljs.core.cst$kw$torpedo_DASH_energy,0.02], null);
});
