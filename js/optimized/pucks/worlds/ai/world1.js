// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.ai.world1');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.user');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
pucks.worlds.ai.world1.agents = (function pucks$worlds$ai$world1$agents(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4523__auto__ = (function pucks$worlds$ai$world1$agents_$_iter__16750(s__16751){
return (new cljs.core.LazySeq(null,(function (){
var s__16751__$1 = s__16751;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16751__$1);
if(temp__5735__auto__){
var s__16751__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16751__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16751__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16753 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16752 = (0);
while(true){
if((i__16752 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16752);
cljs.core.chunk_append(b__16753,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)));

var G__16754 = (i__16752 + (1));
i__16752 = G__16754;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16753),pucks$worlds$ai$world1$agents_$_iter__16750(cljs.core.chunk_rest(s__16751__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16753),null);
}
} else {
var y = cljs.core.first(s__16751__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)),pucks$worlds$ai$world1$agents_$_iter__16750(cljs.core.rest(s__16751__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((20),cljs.core.iterate(((function (iter__4523__auto__){
return (function (p1__16749_SHARP_){
return (p1__16749_SHARP_ + (20));
});})(iter__4523__auto__))
,(100))));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.vent.vent(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(300)], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.zapper.zapper(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.user.user(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(300)], null)], null)], 0))], null));
});
pucks.worlds.ai.world1.settings = (function pucks$worlds$ai$world1$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});