(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const styles="";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const REVISION="150",MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},CullFaceNone=0,CullFaceBack=1,CullFaceFront=2,CullFaceFrontBack=3,BasicShadowMap=0,PCFShadowMap=1,PCFSoftShadowMap=2,VSMShadowMap=3,FrontSide=0,BackSide=1,DoubleSide=2,TwoPassDoubleSide=2,NoBlending=0,NormalBlending=1,AdditiveBlending=2,SubtractiveBlending=3,MultiplyBlending=4,CustomBlending=5,AddEquation=100,SubtractEquation=101,ReverseSubtractEquation=102,MinEquation=103,MaxEquation=104,ZeroFactor=200,OneFactor=201,SrcColorFactor=202,OneMinusSrcColorFactor=203,SrcAlphaFactor=204,OneMinusSrcAlphaFactor=205,DstAlphaFactor=206,OneMinusDstAlphaFactor=207,DstColorFactor=208,OneMinusDstColorFactor=209,SrcAlphaSaturateFactor=210,NeverDepth=0,AlwaysDepth=1,LessDepth=2,LessEqualDepth=3,EqualDepth=4,GreaterEqualDepth=5,GreaterDepth=6,NotEqualDepth=7,MultiplyOperation=0,MixOperation=1,AddOperation=2,NoToneMapping=0,LinearToneMapping=1,ReinhardToneMapping=2,CineonToneMapping=3,ACESFilmicToneMapping=4,CustomToneMapping=5,UVMapping=300,CubeReflectionMapping=301,CubeRefractionMapping=302,EquirectangularReflectionMapping=303,EquirectangularRefractionMapping=304,CubeUVReflectionMapping=306,RepeatWrapping=1e3,ClampToEdgeWrapping=1001,MirroredRepeatWrapping=1002,NearestFilter=1003,NearestMipmapNearestFilter=1004,NearestMipMapNearestFilter=1004,NearestMipmapLinearFilter=1005,NearestMipMapLinearFilter=1005,LinearFilter=1006,LinearMipmapNearestFilter=1007,LinearMipMapNearestFilter=1007,LinearMipmapLinearFilter=1008,LinearMipMapLinearFilter=1008,UnsignedByteType=1009,ByteType=1010,ShortType=1011,UnsignedShortType=1012,IntType=1013,UnsignedIntType=1014,FloatType=1015,HalfFloatType=1016,UnsignedShort4444Type=1017,UnsignedShort5551Type=1018,UnsignedInt248Type=1020,AlphaFormat=1021,RGBAFormat=1023,LuminanceFormat=1024,LuminanceAlphaFormat=1025,DepthFormat=1026,DepthStencilFormat=1027,RedFormat=1028,RedIntegerFormat=1029,RGFormat=1030,RGIntegerFormat=1031,RGBAIntegerFormat=1033,RGB_S3TC_DXT1_Format=33776,RGBA_S3TC_DXT1_Format=33777,RGBA_S3TC_DXT3_Format=33778,RGBA_S3TC_DXT5_Format=33779,RGB_PVRTC_4BPPV1_Format=35840,RGB_PVRTC_2BPPV1_Format=35841,RGBA_PVRTC_4BPPV1_Format=35842,RGBA_PVRTC_2BPPV1_Format=35843,RGB_ETC1_Format=36196,RGB_ETC2_Format=37492,RGBA_ETC2_EAC_Format=37496,RGBA_ASTC_4x4_Format=37808,RGBA_ASTC_5x4_Format=37809,RGBA_ASTC_5x5_Format=37810,RGBA_ASTC_6x5_Format=37811,RGBA_ASTC_6x6_Format=37812,RGBA_ASTC_8x5_Format=37813,RGBA_ASTC_8x6_Format=37814,RGBA_ASTC_8x8_Format=37815,RGBA_ASTC_10x5_Format=37816,RGBA_ASTC_10x6_Format=37817,RGBA_ASTC_10x8_Format=37818,RGBA_ASTC_10x10_Format=37819,RGBA_ASTC_12x10_Format=37820,RGBA_ASTC_12x12_Format=37821,RGBA_BPTC_Format=36492,RED_RGTC1_Format=36283,SIGNED_RED_RGTC1_Format=36284,RED_GREEN_RGTC2_Format=36285,SIGNED_RED_GREEN_RGTC2_Format=36286,LoopOnce=2200,LoopRepeat=2201,LoopPingPong=2202,InterpolateDiscrete=2300,InterpolateLinear=2301,InterpolateSmooth=2302,ZeroCurvatureEnding=2400,ZeroSlopeEnding=2401,WrapAroundEnding=2402,NormalAnimationBlendMode=2500,AdditiveAnimationBlendMode=2501,TrianglesDrawMode=0,TriangleStripDrawMode=1,TriangleFanDrawMode=2,LinearEncoding=3e3,sRGBEncoding=3001,BasicDepthPacking=3200,RGBADepthPacking=3201,TangentSpaceNormalMap=0,ObjectSpaceNormalMap=1,NoColorSpace="",SRGBColorSpace="srgb",LinearSRGBColorSpace="srgb-linear",DisplayP3ColorSpace="display-p3",ZeroStencilOp=0,KeepStencilOp=7680,ReplaceStencilOp=7681,IncrementStencilOp=7682,DecrementStencilOp=7683,IncrementWrapStencilOp=34055,DecrementWrapStencilOp=34056,InvertStencilOp=5386,NeverStencilFunc=512,LessStencilFunc=513,EqualStencilFunc=514,LessEqualStencilFunc=515,GreaterStencilFunc=516,NotEqualStencilFunc=517,GreaterEqualStencilFunc=518,AlwaysStencilFunc=519,StaticDrawUsage=35044,DynamicDrawUsage=35048,StreamDrawUsage=35040,StaticReadUsage=35045,DynamicReadUsage=35049,StreamReadUsage=35041,StaticCopyUsage=35046,DynamicCopyUsage=35050,StreamCopyUsage=35042,GLSL1="100",GLSL3="300 es",_SRGBAFormat=1035;class EventDispatcher{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const _lut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _seed=1234567;const DEG2RAD=Math.PI/180,RAD2DEG=180/Math.PI;function generateUUID(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_lut[a&255]+_lut[a>>8&255]+_lut[a>>16&255]+_lut[a>>24&255]+"-"+_lut[e&255]+_lut[e>>8&255]+"-"+_lut[e>>16&15|64]+_lut[e>>24&255]+"-"+_lut[t&63|128]+_lut[t>>8&255]+"-"+_lut[t>>16&255]+_lut[t>>24&255]+_lut[i&255]+_lut[i>>8&255]+_lut[i>>16&255]+_lut[i>>24&255]).toLowerCase()}function clamp$1(a,e,t){return Math.max(e,Math.min(t,a))}function euclideanModulo(a,e){return(a%e+e)%e}function mapLinear(a,e,t,i,r){return i+(a-e)*(r-i)/(t-e)}function inverseLerp(a,e,t){return a!==e?(t-a)/(e-a):0}function lerp$2(a,e,t){return(1-t)*a+t*e}function damp(a,e,t,i){return lerp$2(a,e,1-Math.exp(-t*i))}function pingpong(a,e=1){return e-Math.abs(euclideanModulo(a,e*2)-e)}function smoothstep(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function smootherstep(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function randInt(a,e){return a+Math.floor(Math.random()*(e-a+1))}function randFloat(a,e){return a+Math.random()*(e-a)}function randFloatSpread(a){return a*(.5-Math.random())}function seededRandom(a){a!==void 0&&(_seed=a);let e=_seed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function degToRad(a){return a*DEG2RAD}function radToDeg(a){return a*RAD2DEG}function isPowerOfTwo(a){return(a&a-1)===0&&a!==0}function ceilPowerOfTwo(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function floorPowerOfTwo(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function setQuaternionFromProperEuler(a,e,t,i,r){const s=Math.cos,o=Math.sin,l=s(t/2),c=o(t/2),u=s((e+i)/2),h=o((e+i)/2),d=s((e-i)/2),p=o((e-i)/2),m=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":a.set(l*h,c*d,c*p,l*u);break;case"YZY":a.set(c*p,l*h,c*d,l*u);break;case"ZXZ":a.set(c*d,c*p,l*h,l*u);break;case"XZX":a.set(l*h,c*g,c*m,l*u);break;case"YXY":a.set(c*m,l*h,c*g,l*u);break;case"ZYZ":a.set(c*g,c*m,l*h,l*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function denormalize(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function normalize$2(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const MathUtils={DEG2RAD,RAD2DEG,generateUUID,clamp:clamp$1,euclideanModulo,mapLinear,inverseLerp,lerp:lerp$2,damp,pingpong,smoothstep,smootherstep,randInt,randFloat,randFloatSpread,seededRandom,degToRad,radToDeg,isPowerOfTwo,ceilPowerOfTwo,floorPowerOfTwo,setQuaternionFromProperEuler,normalize:normalize$2,denormalize};class Vector2{constructor(e=0,t=0){Vector2.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Matrix3{constructor(){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,l,c,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],l=i[3],c=i[6],u=i[1],h=i[4],d=i[7],p=i[2],m=i[5],g=i[8],v=r[0],_=r[3],y=r[6],b=r[1],x=r[4],S=r[7],M=r[2],E=r[5],R=r[8];return s[0]=o*v+l*b+c*M,s[3]=o*_+l*x+c*E,s[6]=o*y+l*S+c*R,s[1]=u*v+h*b+d*M,s[4]=u*_+h*x+d*E,s[7]=u*y+h*S+d*R,s[2]=p*v+m*b+g*M,s[5]=p*_+m*x+g*E,s[8]=p*y+m*S+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],c=e[6],u=e[7],h=e[8];return t*o*h-t*l*u-i*s*h+i*l*c+r*s*u-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],c=e[6],u=e[7],h=e[8],d=h*o-l*u,p=l*c-h*s,m=u*s-o*c,g=t*d+i*p+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*u-h*i)*v,e[2]=(l*i-r*o)*v,e[3]=p*v,e[4]=(h*t-r*c)*v,e[5]=(r*s-l*t)*v,e[6]=m*v,e[7]=(i*c-u*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,l){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*o+u*l)+o+e,-r*u,r*c,-r*(-u*o+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(_m3.makeScale(e,t)),this}rotate(e){return this.premultiply(_m3.makeRotation(-e)),this}translate(e,t){return this.premultiply(_m3.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _m3=new Matrix3;function arrayNeedsUint32(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}const TYPED_ARRAYS={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function getTypedArray(a,e){return new TYPED_ARRAYS[a](e)}function createElementNS(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}class Quaternion{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,l){let c=i[r+0],u=i[r+1],h=i[r+2],d=i[r+3];const p=s[o+0],m=s[o+1],g=s[o+2],v=s[o+3];if(l===0){e[t+0]=c,e[t+1]=u,e[t+2]=h,e[t+3]=d;return}if(l===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==p||u!==m||h!==g){let _=1-l;const y=c*p+u*m+h*g+d*v,b=y>=0?1:-1,x=1-y*y;if(x>Number.EPSILON){const M=Math.sqrt(x),E=Math.atan2(M,y*b);_=Math.sin(_*E)/M,l=Math.sin(l*E)/M}const S=l*b;if(c=c*_+p*S,u=u*_+m*S,h=h*_+g*S,d=d*_+v*S,_===1-l){const M=1/Math.sqrt(c*c+u*u+h*h+d*d);c*=M,u*=M,h*=M,d*=M}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const l=i[r],c=i[r+1],u=i[r+2],h=i[r+3],d=s[o],p=s[o+1],m=s[o+2],g=s[o+3];return e[t]=l*g+h*d+c*m-u*p,e[t+1]=c*g+h*p+u*d-l*m,e[t+2]=u*g+h*m+l*p-c*d,e[t+3]=h*g-l*d-c*p-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,l=Math.cos,c=Math.sin,u=l(i/2),h=l(r/2),d=l(s/2),p=c(i/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=p*h*d+u*m*g,this._y=u*m*d-p*h*g,this._z=u*h*g+p*m*d,this._w=u*h*d-p*m*g;break;case"YXZ":this._x=p*h*d+u*m*g,this._y=u*m*d-p*h*g,this._z=u*h*g-p*m*d,this._w=u*h*d+p*m*g;break;case"ZXY":this._x=p*h*d-u*m*g,this._y=u*m*d+p*h*g,this._z=u*h*g+p*m*d,this._w=u*h*d-p*m*g;break;case"ZYX":this._x=p*h*d-u*m*g,this._y=u*m*d+p*h*g,this._z=u*h*g-p*m*d,this._w=u*h*d+p*m*g;break;case"YZX":this._x=p*h*d+u*m*g,this._y=u*m*d+p*h*g,this._z=u*h*g-p*m*d,this._w=u*h*d-p*m*g;break;case"XZY":this._x=p*h*d-u*m*g,this._y=u*m*d-p*h*g,this._z=u*h*g+p*m*d,this._w=u*h*d+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],l=t[5],c=t[9],u=t[2],h=t[6],d=t[10],p=i+l+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>l&&i>d){const m=2*Math.sqrt(1+i-l-d);this._w=(h-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(l>d){const m=2*Math.sqrt(1+l-i-d);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-i-l);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(clamp$1(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,l=t._x,c=t._y,u=t._z,h=t._w;return this._x=i*h+o*l+r*u-s*c,this._y=r*h+o*c+s*l-i*u,this._z=s*h+o*u+i*c-r*l,this._w=o*h-i*l-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let l=o*e._w+i*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-l*l;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),h=Math.atan2(u,l),d=Math.sin((1-t)*h)/u,p=Math.sin(t*h)/u;return this._w=o*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Vector3{constructor(e=0,t=0,i=0){Vector3.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_quaternion$4.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_quaternion$4.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,l=e.z,c=e.w,u=c*t+o*r-l*i,h=c*i+l*t-s*r,d=c*r+s*i-o*t,p=-s*t-o*i-l*r;return this.x=u*c+p*-s+h*-l-d*-o,this.y=h*c+p*-o+d*-s-u*-l,this.z=d*c+p*-l+u*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,l=t.y,c=t.z;return this.x=r*c-s*l,this.y=s*o-i*c,this.z=i*l-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _vector$d.copy(this).projectOnVector(e),this.sub(_vector$d)}reflect(e){return this.sub(_vector$d.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(clamp$1(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _vector$d=new Vector3,_quaternion$4=new Quaternion;function SRGBToLinear(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function LinearToSRGB(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const LINEAR_SRGB_TO_LINEAR_DISPLAY_P3=new Matrix3().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),LINEAR_DISPLAY_P3_TO_LINEAR_SRGB=new Matrix3().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),_vector$c=new Vector3;function DisplayP3ToLinearSRGB(a){return a.convertSRGBToLinear(),_vector$c.set(a.r,a.g,a.b).applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB),a.setRGB(_vector$c.x,_vector$c.y,_vector$c.z)}function LinearSRGBToDisplayP3(a){return _vector$c.set(a.r,a.g,a.b).applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3),a.setRGB(_vector$c.x,_vector$c.y,_vector$c.z).convertLinearToSRGB()}const TO_LINEAR={[LinearSRGBColorSpace]:a=>a,[SRGBColorSpace]:a=>a.convertSRGBToLinear(),[DisplayP3ColorSpace]:DisplayP3ToLinearSRGB},FROM_LINEAR={[LinearSRGBColorSpace]:a=>a,[SRGBColorSpace]:a=>a.convertLinearToSRGB(),[DisplayP3ColorSpace]:LinearSRGBToDisplayP3},ColorManagement={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return LinearSRGBColorSpace},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const i=TO_LINEAR[e],r=FROM_LINEAR[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}};let _canvas;class ImageUtils{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_canvas===void 0&&(_canvas=createElementNS("canvas")),_canvas.width=e.width,_canvas.height=e.height;const i=_canvas.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=_canvas}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=createElementNS("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=SRGBToLinear(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(SRGBToLinear(t[i]/255)*255):t[i]=SRGBToLinear(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Source{constructor(e=null){this.isSource=!0,this.uuid=generateUUID(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?s.push(serializeImage(r[o].image)):s.push(serializeImage(r[o]))}else s=serializeImage(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function serializeImage(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?ImageUtils.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let textureId=0;class Texture extends EventDispatcher{constructor(e=Texture.DEFAULT_IMAGE,t=Texture.DEFAULT_MAPPING,i=ClampToEdgeWrapping,r=ClampToEdgeWrapping,s=LinearFilter,o=LinearMipmapLinearFilter,l=RGBAFormat,c=UnsignedByteType,u=Texture.DEFAULT_ANISOTROPY,h=LinearEncoding){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:textureId++}),this.uuid=generateUUID(),this.name="",this.source=new Source(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==UVMapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case RepeatWrapping:e.x=e.x-Math.floor(e.x);break;case ClampToEdgeWrapping:e.x=e.x<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case RepeatWrapping:e.y=e.y-Math.floor(e.y);break;case ClampToEdgeWrapping:e.y=e.y<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Texture.DEFAULT_IMAGE=null;Texture.DEFAULT_MAPPING=UVMapping;Texture.DEFAULT_ANISOTROPY=1;class Vector4{constructor(e=0,t=0,i=0,r=1){Vector4.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,u=c[0],h=c[4],d=c[8],p=c[1],m=c[5],g=c[9],v=c[2],_=c[6],y=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-v)<.01&&Math.abs(g-_)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+v)<.1&&Math.abs(g+_)<.1&&Math.abs(u+m+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,S=(m+1)/2,M=(y+1)/2,E=(h+p)/4,R=(d+v)/4,w=(g+_)/4;return x>S&&x>M?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=E/i,s=R/i):S>M?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=E/r,s=w/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=R/s,r=w/s),this.set(i,r,s,t),this}let b=Math.sqrt((_-g)*(_-g)+(d-v)*(d-v)+(p-h)*(p-h));return Math.abs(b)<.001&&(b=1),this.x=(_-g)/b,this.y=(d-v)/b,this.z=(p-h)/b,this.w=Math.acos((u+m+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WebGLRenderTarget extends EventDispatcher{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vector4(0,0,e,t),this.scissorTest=!1,this.viewport=new Vector4(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Texture(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:LinearFilter,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Source(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class DataArrayTexture extends Texture{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class WebGLArrayRenderTarget extends WebGLRenderTarget{constructor(e=1,t=1,i=1){super(e,t),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new DataArrayTexture(null,e,t,i),this.texture.isRenderTargetTexture=!0}}class Data3DTexture extends Texture{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class WebGL3DRenderTarget extends WebGLRenderTarget{constructor(e=1,t=1,i=1){super(e,t),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new Data3DTexture(null,e,t,i),this.texture.isRenderTargetTexture=!0}}class WebGLMultipleRenderTargets extends WebGLRenderTarget{constructor(e=1,t=1,i=1,r={}){super(e,t,r),this.isWebGLMultipleRenderTargets=!0;const s=this.texture;this.texture=[];for(let o=0;o<i;o++)this.texture[o]=s.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.texture.length;r<s;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=i;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,i=e.texture.length;t<i;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class Box3{constructor(e=new Vector3(1/0,1/0,1/0),t=new Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,l=-1/0;for(let c=0,u=e.length;c<u;c+=3){const h=e[c],d=e[c+1],p=e[c+2];h<t&&(t=h),d<i&&(i=d),p<r&&(r=p),h>s&&(s=h),d>o&&(o=d),p>l&&(l=p)}return this.min.set(t,i,r),this.max.set(s,o,l),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,l=-1/0;for(let c=0,u=e.count;c<u;c++){const h=e.getX(c),d=e.getY(c),p=e.getZ(c);h<t&&(t=h),d<i&&(i=d),p<r&&(r=p),h>s&&(s=h),d>o&&(o=d),p>l&&(l=p)}return this.min.set(t,i,r),this.max.set(s,o,l),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_vector$b.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,l=s.count;o<l;o++)_vector$b.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(_vector$b)}else i.boundingBox===null&&i.computeBoundingBox(),_box$3.copy(i.boundingBox),_box$3.applyMatrix4(e.matrixWorld),this.union(_box$3);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_vector$b),_vector$b.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_center),_extents.subVectors(this.max,_center),_v0$2.subVectors(e.a,_center),_v1$7.subVectors(e.b,_center),_v2$4.subVectors(e.c,_center),_f0.subVectors(_v1$7,_v0$2),_f1.subVectors(_v2$4,_v1$7),_f2.subVectors(_v0$2,_v2$4);let t=[0,-_f0.z,_f0.y,0,-_f1.z,_f1.y,0,-_f2.z,_f2.y,_f0.z,0,-_f0.x,_f1.z,0,-_f1.x,_f2.z,0,-_f2.x,-_f0.y,_f0.x,0,-_f1.y,_f1.x,0,-_f2.y,_f2.x,0];return!satForAxes(t,_v0$2,_v1$7,_v2$4,_extents)||(t=[1,0,0,0,1,0,0,0,1],!satForAxes(t,_v0$2,_v1$7,_v2$4,_extents))?!1:(_triangleNormal.crossVectors(_f0,_f1),t=[_triangleNormal.x,_triangleNormal.y,_triangleNormal.z],satForAxes(t,_v0$2,_v1$7,_v2$4,_extents))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_vector$b).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_vector$b).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_points),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],_vector$b=new Vector3,_box$3=new Box3,_v0$2=new Vector3,_v1$7=new Vector3,_v2$4=new Vector3,_f0=new Vector3,_f1=new Vector3,_f2=new Vector3,_center=new Vector3,_extents=new Vector3,_triangleNormal=new Vector3,_testAxis=new Vector3;function satForAxes(a,e,t,i,r){for(let s=0,o=a.length-3;s<=o;s+=3){_testAxis.fromArray(a,s);const l=r.x*Math.abs(_testAxis.x)+r.y*Math.abs(_testAxis.y)+r.z*Math.abs(_testAxis.z),c=e.dot(_testAxis),u=t.dot(_testAxis),h=i.dot(_testAxis);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>l)return!1}return!0}const _box$2=new Box3,_v1$6=new Vector3,_v2$3=new Vector3;class Sphere{constructor(e=new Vector3,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_box$2.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_v1$6.subVectors(e,this.center);const t=_v1$6.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(_v1$6,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_v2$3.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_v1$6.copy(e.center).add(_v2$3)),this.expandByPoint(_v1$6.copy(e.center).sub(_v2$3))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _vector$a=new Vector3,_segCenter=new Vector3,_segDir=new Vector3,_diff=new Vector3,_edge1=new Vector3,_edge2=new Vector3,_normal$1=new Vector3;class Ray{constructor(e=new Vector3,t=new Vector3(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_vector$a)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_vector$a.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_vector$a.copy(this.origin).addScaledVector(this.direction,t),_vector$a.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){_segCenter.copy(e).add(t).multiplyScalar(.5),_segDir.copy(t).sub(e).normalize(),_diff.copy(this.origin).sub(_segCenter);const s=e.distanceTo(t)*.5,o=-this.direction.dot(_segDir),l=_diff.dot(this.direction),c=-_diff.dot(_segDir),u=_diff.lengthSq(),h=Math.abs(1-o*o);let d,p,m,g;if(h>0)if(d=o*c-l,p=o*l-c,g=s*h,d>=0)if(p>=-g)if(p<=g){const v=1/h;d*=v,p*=v,m=d*(d+o*p+2*l)+p*(o*d+p+2*c)+u}else p=s,d=Math.max(0,-(o*p+l)),m=-d*d+p*(p+2*c)+u;else p=-s,d=Math.max(0,-(o*p+l)),m=-d*d+p*(p+2*c)+u;else p<=-g?(d=Math.max(0,-(-o*s+l)),p=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+p*(p+2*c)+u):p<=g?(d=0,p=Math.min(Math.max(-s,-c),s),m=p*(p+2*c)+u):(d=Math.max(0,-(o*s+l)),p=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+p*(p+2*c)+u);else p=o>0?-s:s,d=Math.max(0,-(o*p+l)),m=-d*d+p*(p+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(_segCenter).addScaledVector(_segDir,p),m}intersectSphere(e,t){_vector$a.subVectors(e.center,this.origin);const i=_vector$a.dot(this.direction),r=_vector$a.dot(_vector$a)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),l=i-o,c=i+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,l,c;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return u>=0?(i=(e.min.x-p.x)*u,r=(e.max.x-p.x)*u):(i=(e.max.x-p.x)*u,r=(e.min.x-p.x)*u),h>=0?(s=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(l=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(l=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,_vector$a)!==null}intersectTriangle(e,t,i,r,s){_edge1.subVectors(t,e),_edge2.subVectors(i,e),_normal$1.crossVectors(_edge1,_edge2);let o=this.direction.dot(_normal$1),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;_diff.subVectors(this.origin,e);const c=l*this.direction.dot(_edge2.crossVectors(_diff,_edge2));if(c<0)return null;const u=l*this.direction.dot(_edge1.cross(_diff));if(u<0||c+u>o)return null;const h=-l*_diff.dot(_normal$1);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Matrix4{constructor(){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,l,c,u,h,d,p,m,g,v,_){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=r,y[1]=s,y[5]=o,y[9]=l,y[13]=c,y[2]=u,y[6]=h,y[10]=d,y[14]=p,y[3]=m,y[7]=g,y[11]=v,y[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/_v1$5.setFromMatrixColumn(e,0).length(),s=1/_v1$5.setFromMatrixColumn(e,1).length(),o=1/_v1$5.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=o*h,m=o*d,g=l*h,v=l*d;t[0]=c*h,t[4]=-c*d,t[8]=u,t[1]=m+g*u,t[5]=p-v*u,t[9]=-l*c,t[2]=v-p*u,t[6]=g+m*u,t[10]=o*c}else if(e.order==="YXZ"){const p=c*h,m=c*d,g=u*h,v=u*d;t[0]=p+v*l,t[4]=g*l-m,t[8]=o*u,t[1]=o*d,t[5]=o*h,t[9]=-l,t[2]=m*l-g,t[6]=v+p*l,t[10]=o*c}else if(e.order==="ZXY"){const p=c*h,m=c*d,g=u*h,v=u*d;t[0]=p-v*l,t[4]=-o*d,t[8]=g+m*l,t[1]=m+g*l,t[5]=o*h,t[9]=v-p*l,t[2]=-o*u,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){const p=o*h,m=o*d,g=l*h,v=l*d;t[0]=c*h,t[4]=g*u-m,t[8]=p*u+v,t[1]=c*d,t[5]=v*u+p,t[9]=m*u-g,t[2]=-u,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,m=o*u,g=l*c,v=l*u;t[0]=c*h,t[4]=v-p*d,t[8]=g*d+m,t[1]=d,t[5]=o*h,t[9]=-l*h,t[2]=-u*h,t[6]=m*d+g,t[10]=p-v*d}else if(e.order==="XZY"){const p=o*c,m=o*u,g=l*c,v=l*u;t[0]=c*h,t[4]=-d,t[8]=u*h,t[1]=p*d+v,t[5]=o*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=l*h,t[10]=v*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_zero,e,_one)}lookAt(e,t,i){const r=this.elements;return _z.subVectors(e,t),_z.lengthSq()===0&&(_z.z=1),_z.normalize(),_x.crossVectors(i,_z),_x.lengthSq()===0&&(Math.abs(i.z)===1?_z.x+=1e-4:_z.z+=1e-4,_z.normalize(),_x.crossVectors(i,_z)),_x.normalize(),_y.crossVectors(_z,_x),r[0]=_x.x,r[4]=_y.x,r[8]=_z.x,r[1]=_x.y,r[5]=_y.y,r[9]=_z.y,r[2]=_x.z,r[6]=_y.z,r[10]=_z.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],l=i[4],c=i[8],u=i[12],h=i[1],d=i[5],p=i[9],m=i[13],g=i[2],v=i[6],_=i[10],y=i[14],b=i[3],x=i[7],S=i[11],M=i[15],E=r[0],R=r[4],w=r[8],A=r[12],L=r[1],V=r[5],D=r[9],B=r[13],O=r[2],$=r[6],W=r[10],ne=r[14],q=r[3],Q=r[7],J=r[11],ge=r[15];return s[0]=o*E+l*L+c*O+u*q,s[4]=o*R+l*V+c*$+u*Q,s[8]=o*w+l*D+c*W+u*J,s[12]=o*A+l*B+c*ne+u*ge,s[1]=h*E+d*L+p*O+m*q,s[5]=h*R+d*V+p*$+m*Q,s[9]=h*w+d*D+p*W+m*J,s[13]=h*A+d*B+p*ne+m*ge,s[2]=g*E+v*L+_*O+y*q,s[6]=g*R+v*V+_*$+y*Q,s[10]=g*w+v*D+_*W+y*J,s[14]=g*A+v*B+_*ne+y*ge,s[3]=b*E+x*L+S*O+M*q,s[7]=b*R+x*V+S*$+M*Q,s[11]=b*w+x*D+S*W+M*J,s[15]=b*A+x*B+S*ne+M*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],l=e[5],c=e[9],u=e[13],h=e[2],d=e[6],p=e[10],m=e[14],g=e[3],v=e[7],_=e[11],y=e[15];return g*(+s*c*d-r*u*d-s*l*p+i*u*p+r*l*m-i*c*m)+v*(+t*c*m-t*u*p+s*o*p-r*o*m+r*u*h-s*c*h)+_*(+t*u*d-t*l*m-s*o*d+i*o*m+s*l*h-i*u*h)+y*(-r*l*h-t*c*d+t*l*p+r*o*d-i*o*p+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],l=e[5],c=e[6],u=e[7],h=e[8],d=e[9],p=e[10],m=e[11],g=e[12],v=e[13],_=e[14],y=e[15],b=d*_*u-v*p*u+v*c*m-l*_*m-d*c*y+l*p*y,x=g*p*u-h*_*u-g*c*m+o*_*m+h*c*y-o*p*y,S=h*v*u-g*d*u+g*l*m-o*v*m-h*l*y+o*d*y,M=g*d*c-h*v*c-g*l*p+o*v*p+h*l*_-o*d*_,E=t*b+i*x+r*S+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=b*R,e[1]=(v*p*s-d*_*s-v*r*m+i*_*m+d*r*y-i*p*y)*R,e[2]=(l*_*s-v*c*s+v*r*u-i*_*u-l*r*y+i*c*y)*R,e[3]=(d*c*s-l*p*s-d*r*u+i*p*u+l*r*m-i*c*m)*R,e[4]=x*R,e[5]=(h*_*s-g*p*s+g*r*m-t*_*m-h*r*y+t*p*y)*R,e[6]=(g*c*s-o*_*s-g*r*u+t*_*u+o*r*y-t*c*y)*R,e[7]=(o*p*s-h*c*s+h*r*u-t*p*u-o*r*m+t*c*m)*R,e[8]=S*R,e[9]=(g*d*s-h*v*s-g*i*m+t*v*m+h*i*y-t*d*y)*R,e[10]=(o*v*s-g*l*s+g*i*u-t*v*u-o*i*y+t*l*y)*R,e[11]=(h*l*s-o*d*s-h*i*u+t*d*u+o*i*m-t*l*m)*R,e[12]=M*R,e[13]=(h*v*r-g*d*r+g*i*p-t*v*p-h*i*_+t*d*_)*R,e[14]=(g*l*r-o*v*r-g*i*c+t*v*c+o*i*_-t*l*_)*R,e[15]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*p+t*l*p)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,l=e.y,c=e.z,u=s*o,h=s*l;return this.set(u*o+i,u*l-r*c,u*c+r*l,0,u*l+r*c,h*l+i,h*c-r*o,0,u*c-r*l,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,l=t._z,c=t._w,u=s+s,h=o+o,d=l+l,p=s*u,m=s*h,g=s*d,v=o*h,_=o*d,y=l*d,b=c*u,x=c*h,S=c*d,M=i.x,E=i.y,R=i.z;return r[0]=(1-(v+y))*M,r[1]=(m+S)*M,r[2]=(g-x)*M,r[3]=0,r[4]=(m-S)*E,r[5]=(1-(p+y))*E,r[6]=(_+b)*E,r[7]=0,r[8]=(g+x)*R,r[9]=(_-b)*R,r[10]=(1-(p+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=_v1$5.set(r[0],r[1],r[2]).length();const o=_v1$5.set(r[4],r[5],r[6]).length(),l=_v1$5.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],_m1$2.copy(this);const u=1/s,h=1/o,d=1/l;return _m1$2.elements[0]*=u,_m1$2.elements[1]*=u,_m1$2.elements[2]*=u,_m1$2.elements[4]*=h,_m1$2.elements[5]*=h,_m1$2.elements[6]*=h,_m1$2.elements[8]*=d,_m1$2.elements[9]*=d,_m1$2.elements[10]*=d,t.setFromRotationMatrix(_m1$2),i.x=s,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,o){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r),p=-(o+s)/(o-s),m=-2*o*s/(o-s);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),d=(t+e)*c,p=(i+r)*u,m=(o+s)*h;return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=-2*h,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const _v1$5=new Vector3,_m1$2=new Matrix4,_zero=new Vector3(0,0,0),_one=new Vector3(1,1,1),_x=new Vector3,_y=new Vector3,_z=new Vector3,_matrix$1=new Matrix4,_quaternion$3=new Quaternion;class Euler{constructor(e=0,t=0,i=0,r=Euler.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],l=r[8],c=r[1],u=r[5],h=r[9],d=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(clamp$1(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-clamp$1(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(clamp$1(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-clamp$1(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(clamp$1(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-clamp$1(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _matrix$1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_matrix$1,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _quaternion$3.setFromEuler(this),this.setFromQuaternion(_quaternion$3,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Euler.DEFAULT_ORDER="XYZ";class Layers{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _object3DId=0;const _v1$4=new Vector3,_q1=new Quaternion,_m1$1=new Matrix4,_target=new Vector3,_position$3=new Vector3,_scale$2=new Vector3,_quaternion$2=new Quaternion,_xAxis=new Vector3(1,0,0),_yAxis=new Vector3(0,1,0),_zAxis=new Vector3(0,0,1),_addedEvent={type:"added"},_removedEvent={type:"removed"};class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_object3DId++}),this.uuid=generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DEFAULT_UP.clone();const e=new Vector3,t=new Euler,i=new Quaternion,r=new Vector3(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.multiply(_q1),this}rotateOnWorldAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.premultiply(_q1),this}rotateX(e){return this.rotateOnAxis(_xAxis,e)}rotateY(e){return this.rotateOnAxis(_yAxis,e)}rotateZ(e){return this.rotateOnAxis(_zAxis,e)}translateOnAxis(e,t){return _v1$4.copy(e).applyQuaternion(this.quaternion),this.position.add(_v1$4.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_xAxis,e)}translateY(e){return this.translateOnAxis(_yAxis,e)}translateZ(e){return this.translateOnAxis(_zAxis,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_m1$1.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_target.copy(e):_target.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_position$3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_m1$1.lookAt(_position$3,_target,this.up):_m1$1.lookAt(_target,_position$3,this.up),this.quaternion.setFromRotationMatrix(_m1$1),r&&(_m1$1.extractRotation(r.matrixWorld),_q1.setFromRotationMatrix(_m1$1),this.quaternion.premultiply(_q1.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_addedEvent)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_removedEvent)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(_removedEvent)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),_m1$1.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_m1$1.multiply(e.parent.matrixWorld)),e.applyMatrix4(_m1$1),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,e,_scale$2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,_quaternion$2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const l=r[s];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const d=c[u];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(t){const l=o(e.geometries),c=o(e.materials),u=o(e.textures),h=o(e.images),d=o(e.shapes),p=o(e.skeletons),m=o(e.animations),g=o(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(l){const c=[];for(const u in l){const h=l[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Object3D.DEFAULT_UP=new Vector3(0,1,0);Object3D.DEFAULT_MATRIX_AUTO_UPDATE=!0;Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _v0$1=new Vector3,_v1$3=new Vector3,_v2$2=new Vector3,_v3$1=new Vector3,_vab=new Vector3,_vac=new Vector3,_vbc=new Vector3,_vap=new Vector3,_vbp=new Vector3,_vcp=new Vector3;class Triangle{constructor(e=new Vector3,t=new Vector3,i=new Vector3){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),_v0$1.subVectors(e,t),r.cross(_v0$1);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){_v0$1.subVectors(r,t),_v1$3.subVectors(i,t),_v2$2.subVectors(e,t);const o=_v0$1.dot(_v0$1),l=_v0$1.dot(_v1$3),c=_v0$1.dot(_v2$2),u=_v1$3.dot(_v1$3),h=_v1$3.dot(_v2$2),d=o*u-l*l;if(d===0)return s.set(-2,-1,-1);const p=1/d,m=(u*c-l*h)*p,g=(o*h-l*c)*p;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,_v3$1),_v3$1.x>=0&&_v3$1.y>=0&&_v3$1.x+_v3$1.y<=1}static getUV(e,t,i,r,s,o,l,c){return this.getBarycoord(e,t,i,r,_v3$1),c.set(0,0),c.addScaledVector(s,_v3$1.x),c.addScaledVector(o,_v3$1.y),c.addScaledVector(l,_v3$1.z),c}static isFrontFacing(e,t,i,r){return _v0$1.subVectors(i,t),_v1$3.subVectors(e,t),_v0$1.cross(_v1$3).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _v0$1.subVectors(this.c,this.b),_v1$3.subVectors(this.a,this.b),_v0$1.cross(_v1$3).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Triangle.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Triangle.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Triangle.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Triangle.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Triangle.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,l;_vab.subVectors(r,i),_vac.subVectors(s,i),_vap.subVectors(e,i);const c=_vab.dot(_vap),u=_vac.dot(_vap);if(c<=0&&u<=0)return t.copy(i);_vbp.subVectors(e,r);const h=_vab.dot(_vbp),d=_vac.dot(_vbp);if(h>=0&&d<=h)return t.copy(r);const p=c*d-h*u;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(_vab,o);_vcp.subVectors(e,s);const m=_vab.dot(_vcp),g=_vac.dot(_vcp);if(g>=0&&m<=g)return t.copy(s);const v=m*u-c*g;if(v<=0&&u>=0&&g<=0)return l=u/(u-g),t.copy(i).addScaledVector(_vac,l);const _=h*g-m*d;if(_<=0&&d-h>=0&&m-g>=0)return _vbc.subVectors(s,r),l=(d-h)/(d-h+(m-g)),t.copy(r).addScaledVector(_vbc,l);const y=1/(_+v+p);return o=v*y,l=p*y,t.copy(i).addScaledVector(_vab,o).addScaledVector(_vac,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let materialId=0;class Material extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:materialId++}),this.uuid=generateUUID(),this.name="",this.type="Material",this.blending=NormalBlending,this.side=FrontSide,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AlwaysStencilFunc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=KeepStencilOp,this.stencilZFail=KeepStencilOp,this.stencilZPass=KeepStencilOp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(i.blending=this.blending),this.side!==FrontSide&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const l in s){const c=s[l];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _colorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_hslA={h:0,s:0,l:0},_hslB={h:0,s:0,l:0};function hue2rgb(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Color{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=SRGBColorSpace){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ColorManagement.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ColorManagement.workingColorSpace){return this.r=e,this.g=t,this.b=i,ColorManagement.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ColorManagement.workingColorSpace){if(e=euclideanModulo(e,1),t=clamp$1(t,0,1),i=clamp$1(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=hue2rgb(o,s,e+1/3),this.g=hue2rgb(o,s,e),this.b=hue2rgb(o,s,e-1/3)}return ColorManagement.toWorkingColorSpace(this,r),this}setStyle(e,t=SRGBColorSpace){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,ColorManagement.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,ColorManagement.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l)){const c=parseFloat(s[1])/360,u=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return i(s[4]),this.setHSL(c,u,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,ColorManagement.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,ColorManagement.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=SRGBColorSpace){const i=_colorKeywords[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=SRGBToLinear(e.r),this.g=SRGBToLinear(e.g),this.b=SRGBToLinear(e.b),this}copyLinearToSRGB(e){return this.r=LinearToSRGB(e.r),this.g=LinearToSRGB(e.g),this.b=LinearToSRGB(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=SRGBColorSpace){return ColorManagement.fromWorkingColorSpace(_color.copy(this),e),clamp$1(_color.r*255,0,255)<<16^clamp$1(_color.g*255,0,255)<<8^clamp$1(_color.b*255,0,255)<<0}getHexString(e=SRGBColorSpace){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ColorManagement.workingColorSpace){ColorManagement.fromWorkingColorSpace(_color.copy(this),t);const i=_color.r,r=_color.g,s=_color.b,o=Math.max(i,r,s),l=Math.min(i,r,s);let c,u;const h=(l+o)/2;if(l===o)c=0,u=0;else{const d=o-l;switch(u=h<=.5?d/(o+l):d/(2-o-l),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=ColorManagement.workingColorSpace){return ColorManagement.fromWorkingColorSpace(_color.copy(this),t),e.r=_color.r,e.g=_color.g,e.b=_color.b,e}getStyle(e=SRGBColorSpace){ColorManagement.fromWorkingColorSpace(_color.copy(this),e);const t=_color.r,i=_color.g,r=_color.b;return e!==SRGBColorSpace?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,t,i){return this.getHSL(_hslA),_hslA.h+=e,_hslA.s+=t,_hslA.l+=i,this.setHSL(_hslA.h,_hslA.s,_hslA.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_hslA),e.getHSL(_hslB);const i=lerp$2(_hslA.h,_hslB.h,t),r=lerp$2(_hslA.s,_hslB.s,t),s=lerp$2(_hslA.l,_hslB.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _color=new Color;Color.NAMES=_colorKeywords;class MeshBasicMaterial extends Material{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _vector$9=new Vector3,_vector2$1=new Vector2;class BufferAttribute{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=StaticDrawUsage,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_vector2$1.fromBufferAttribute(this,t),_vector2$1.applyMatrix3(e),this.setXY(t,_vector2$1.x,_vector2$1.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyMatrix3(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyMatrix4(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyNormalMatrix(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.transformDirection(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=denormalize(t,this.array)),t}setX(e,t){return this.normalized&&(t=normalize$2(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=denormalize(t,this.array)),t}setY(e,t){return this.normalized&&(t=normalize$2(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=denormalize(t,this.array)),t}setZ(e,t){return this.normalized&&(t=normalize$2(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=denormalize(t,this.array)),t}setW(e,t){return this.normalized&&(t=normalize$2(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=normalize$2(t,this.array),i=normalize$2(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=normalize$2(t,this.array),i=normalize$2(i,this.array),r=normalize$2(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=normalize$2(t,this.array),i=normalize$2(i,this.array),r=normalize$2(r,this.array),s=normalize$2(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==StaticDrawUsage&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Int8BufferAttribute extends BufferAttribute{constructor(e,t,i){super(new Int8Array(e),t,i)}}class Uint8BufferAttribute extends BufferAttribute{constructor(e,t,i){super(new Uint8Array(e),t,i)}}class Uint8ClampedBufferAttribute extends BufferAttribute{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}}class Int16BufferAttribute extends BufferAttribute{constructor(e,t,i){super(new Int16Array(e),t,i)}}class Uint16BufferAttribute extends BufferAttribute{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Int32BufferAttribute extends BufferAttribute{constructor(e,t,i){super(new Int32Array(e),t,i)}}class Uint32BufferAttribute extends BufferAttribute{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Float16BufferAttribute extends BufferAttribute{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}}class Float32BufferAttribute extends BufferAttribute{constructor(e,t,i){super(new Float32Array(e),t,i)}}class Float64BufferAttribute extends BufferAttribute{constructor(e,t,i){super(new Float64Array(e),t,i)}}let _id$1=0;const _m1=new Matrix4,_obj=new Object3D,_offset=new Vector3,_box$1=new Box3,_boxMorphTargets=new Box3,_vector$8=new Vector3;class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_id$1++}),this.uuid=generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(arrayNeedsUint32(e)?Uint32BufferAttribute:Uint16BufferAttribute)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Matrix3().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _m1.makeRotationFromQuaternion(e),this.applyMatrix4(_m1),this}rotateX(e){return _m1.makeRotationX(e),this.applyMatrix4(_m1),this}rotateY(e){return _m1.makeRotationY(e),this.applyMatrix4(_m1),this}rotateZ(e){return _m1.makeRotationZ(e),this.applyMatrix4(_m1),this}translate(e,t,i){return _m1.makeTranslation(e,t,i),this.applyMatrix4(_m1),this}scale(e,t,i){return _m1.makeScale(e,t,i),this.applyMatrix4(_m1),this}lookAt(e){return _obj.lookAt(e),_obj.updateMatrix(),this.applyMatrix4(_obj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_offset).negate(),this.translate(_offset.x,_offset.y,_offset.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Float32BufferAttribute(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Vector3(-1/0,-1/0,-1/0),new Vector3(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];_box$1.setFromBufferAttribute(s),this.morphTargetsRelative?(_vector$8.addVectors(this.boundingBox.min,_box$1.min),this.boundingBox.expandByPoint(_vector$8),_vector$8.addVectors(this.boundingBox.max,_box$1.max),this.boundingBox.expandByPoint(_vector$8)):(this.boundingBox.expandByPoint(_box$1.min),this.boundingBox.expandByPoint(_box$1.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Vector3,1/0);return}if(e){const i=this.boundingSphere.center;if(_box$1.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];_boxMorphTargets.setFromBufferAttribute(l),this.morphTargetsRelative?(_vector$8.addVectors(_box$1.min,_boxMorphTargets.min),_box$1.expandByPoint(_vector$8),_vector$8.addVectors(_box$1.max,_boxMorphTargets.max),_box$1.expandByPoint(_vector$8)):(_box$1.expandByPoint(_boxMorphTargets.min),_box$1.expandByPoint(_boxMorphTargets.max))}_box$1.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)_vector$8.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_vector$8));if(t)for(let s=0,o=t.length;s<o;s++){const l=t[s],c=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)_vector$8.fromBufferAttribute(l,u),c&&(_offset.fromBufferAttribute(e,u),_vector$8.add(_offset)),r=Math.max(r,i.distanceToSquared(_vector$8))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*l),4));const c=this.getAttribute("tangent").array,u=[],h=[];for(let L=0;L<l;L++)u[L]=new Vector3,h[L]=new Vector3;const d=new Vector3,p=new Vector3,m=new Vector3,g=new Vector2,v=new Vector2,_=new Vector2,y=new Vector3,b=new Vector3;function x(L,V,D){d.fromArray(r,L*3),p.fromArray(r,V*3),m.fromArray(r,D*3),g.fromArray(o,L*2),v.fromArray(o,V*2),_.fromArray(o,D*2),p.sub(d),m.sub(d),v.sub(g),_.sub(g);const B=1/(v.x*_.y-_.x*v.y);isFinite(B)&&(y.copy(p).multiplyScalar(_.y).addScaledVector(m,-v.y).multiplyScalar(B),b.copy(m).multiplyScalar(v.x).addScaledVector(p,-_.x).multiplyScalar(B),u[L].add(y),u[V].add(y),u[D].add(y),h[L].add(b),h[V].add(b),h[D].add(b))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let L=0,V=S.length;L<V;++L){const D=S[L],B=D.start,O=D.count;for(let $=B,W=B+O;$<W;$+=3)x(i[$+0],i[$+1],i[$+2])}const M=new Vector3,E=new Vector3,R=new Vector3,w=new Vector3;function A(L){R.fromArray(s,L*3),w.copy(R);const V=u[L];M.copy(V),M.sub(R.multiplyScalar(R.dot(V))).normalize(),E.crossVectors(w,V);const B=E.dot(h[L])<0?-1:1;c[L*4]=M.x,c[L*4+1]=M.y,c[L*4+2]=M.z,c[L*4+3]=B}for(let L=0,V=S.length;L<V;++L){const D=S[L],B=D.start,O=D.count;for(let $=B,W=B+O;$<W;$+=3)A(i[$+0]),A(i[$+1]),A(i[$+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new BufferAttribute(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new Vector3,s=new Vector3,o=new Vector3,l=new Vector3,c=new Vector3,u=new Vector3,h=new Vector3,d=new Vector3;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),v=e.getX(p+1),_=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,_),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,_),l.add(h),c.add(h),u.add(h),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_vector$8.fromBufferAttribute(e,t),_vector$8.normalize(),e.setXYZ(t,_vector$8.x,_vector$8.y,_vector$8.z)}toNonIndexed(){function e(l,c){const u=l.array,h=l.itemSize,d=l.normalized,p=new u.constructor(c.length*h);let m=0,g=0;for(let v=0,_=c.length;v<_;v++){l.isInterleavedBufferAttribute?m=c[v]*l.data.stride+l.offset:m=c[v]*h;for(let y=0;y<h;y++)p[g++]=u[m++]}return new BufferAttribute(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new BufferGeometry,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],u=e(c,i);t.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const c=[],u=s[l];for(let h=0,d=u.length;h<d;h++){const p=u[h],m=e(p,i);c.push(m)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const u=o[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let d=0,p=u.length;d<p;d++){const m=u[d];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(t))}const s=e.morphAttributes;for(const u in s){const h=[],d=s[u];for(let p=0,m=d.length;p<m;p++)h.push(d[p].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _inverseMatrix$2=new Matrix4,_ray$2=new Ray,_sphere$3=new Sphere,_sphereHitAt=new Vector3,_vA$1=new Vector3,_vB$1=new Vector3,_vC$1=new Vector3,_tempA=new Vector3,_morphA=new Vector3,_uvA$1=new Vector2,_uvB$1=new Vector2,_uvC$1=new Vector2,_intersectionPoint=new Vector3,_intersectionPointWorld=new Vector3;class Mesh extends Object3D{constructor(e=new BufferGeometry,t=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){_morphA.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=l[c],d=s[c];h!==0&&(_tempA.fromBufferAttribute(d,e),o?_morphA.addScaledVector(_tempA,h):_morphA.addScaledVector(_tempA.sub(t),h))}t.add(_morphA)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),_sphere$3.copy(i.boundingSphere),_sphere$3.applyMatrix4(s),_ray$2.copy(e.ray).recast(e.near),_sphere$3.containsPoint(_ray$2.origin)===!1&&(_ray$2.intersectSphere(_sphere$3,_sphereHitAt)===null||_ray$2.origin.distanceToSquared(_sphereHitAt)>(e.far-e.near)**2))||(_inverseMatrix$2.copy(s).invert(),_ray$2.copy(e.ray).applyMatrix4(_inverseMatrix$2),i.boundingBox!==null&&_ray$2.intersectsBox(i.boundingBox)===!1))return;let o;const l=i.index,c=i.attributes.position,u=i.attributes.uv,h=i.attributes.uv2,d=i.groups,p=i.drawRange;if(l!==null)if(Array.isArray(r))for(let m=0,g=d.length;m<g;m++){const v=d[m],_=r[v.materialIndex],y=Math.max(v.start,p.start),b=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let x=y,S=b;x<S;x+=3){const M=l.getX(x),E=l.getX(x+1),R=l.getX(x+2);o=checkBufferGeometryIntersection(this,_,e,_ray$2,u,h,M,E,R),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let v=m,_=g;v<_;v+=3){const y=l.getX(v),b=l.getX(v+1),x=l.getX(v+2);o=checkBufferGeometryIntersection(this,r,e,_ray$2,u,h,y,b,x),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,g=d.length;m<g;m++){const v=d[m],_=r[v.materialIndex],y=Math.max(v.start,p.start),b=Math.min(c.count,Math.min(v.start+v.count,p.start+p.count));for(let x=y,S=b;x<S;x+=3){const M=x,E=x+1,R=x+2;o=checkBufferGeometryIntersection(this,_,e,_ray$2,u,h,M,E,R),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let v=m,_=g;v<_;v+=3){const y=v,b=v+1,x=v+2;o=checkBufferGeometryIntersection(this,r,e,_ray$2,u,h,y,b,x),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function checkIntersection(a,e,t,i,r,s,o,l){let c;if(e.side===BackSide?c=i.intersectTriangle(o,s,r,!0,l):c=i.intersectTriangle(r,s,o,e.side===FrontSide,l),c===null)return null;_intersectionPointWorld.copy(l),_intersectionPointWorld.applyMatrix4(a.matrixWorld);const u=t.ray.origin.distanceTo(_intersectionPointWorld);return u<t.near||u>t.far?null:{distance:u,point:_intersectionPointWorld.clone(),object:a}}function checkBufferGeometryIntersection(a,e,t,i,r,s,o,l,c){a.getVertexPosition(o,_vA$1),a.getVertexPosition(l,_vB$1),a.getVertexPosition(c,_vC$1);const u=checkIntersection(a,e,t,i,_vA$1,_vB$1,_vC$1,_intersectionPoint);if(u){r&&(_uvA$1.fromBufferAttribute(r,o),_uvB$1.fromBufferAttribute(r,l),_uvC$1.fromBufferAttribute(r,c),u.uv=Triangle.getUV(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2)),s&&(_uvA$1.fromBufferAttribute(s,o),_uvB$1.fromBufferAttribute(s,l),_uvC$1.fromBufferAttribute(s,c),u.uv2=Triangle.getUV(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2));const h={a:o,b:l,c,normal:new Vector3,materialIndex:0};Triangle.getNormal(_vA$1,_vB$1,_vC$1,h.normal),u.face=h}return u}class BoxGeometry extends BufferGeometry{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const l=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],u=[],h=[],d=[];let p=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Float32BufferAttribute(u,3)),this.setAttribute("normal",new Float32BufferAttribute(h,3)),this.setAttribute("uv",new Float32BufferAttribute(d,2));function g(v,_,y,b,x,S,M,E,R,w,A){const L=S/R,V=M/w,D=S/2,B=M/2,O=E/2,$=R+1,W=w+1;let ne=0,q=0;const Q=new Vector3;for(let J=0;J<W;J++){const ge=J*V-B;for(let G=0;G<$;G++){const te=G*L-D;Q[v]=te*b,Q[_]=ge*x,Q[y]=O,u.push(Q.x,Q.y,Q.z),Q[v]=0,Q[_]=0,Q[y]=E>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(G/R),d.push(1-J/w),ne+=1}}for(let J=0;J<w;J++)for(let ge=0;ge<R;ge++){const G=p+ge+$*J,te=p+ge+$*(J+1),he=p+(ge+1)+$*(J+1),N=p+(ge+1)+$*J;c.push(G,te,N),c.push(te,he,N),q+=6}l.addGroup(m,q,A),m+=q,p+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new BoxGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cloneUniforms(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const r=a[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function mergeUniforms(a){const e={};for(let t=0;t<a.length;t++){const i=cloneUniforms(a[t]);for(const r in i)e[r]=i[r]}return e}function cloneUniformsGroups(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function getUnlitUniformColorSpace(a){return a.getRenderTarget()===null&&a.outputEncoding===sRGBEncoding?SRGBColorSpace:LinearSRGBColorSpace}const UniformsUtils={clone:cloneUniforms,merge:mergeUniforms};var default_vertex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,default_fragment=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ShaderMaterial extends Material{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=default_vertex,this.fragmentShader=default_fragment,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cloneUniforms(e.uniforms),this.uniformsGroups=cloneUniformsGroups(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class PerspectiveCamera extends Camera{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return RAD2DEG*2*Math.atan(Math.tan(DEG2RAD*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(DEG2RAD*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/u,r*=o.width/c,i*=o.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fov=-90,aspect=1;class CubeCamera extends Object3D{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new PerspectiveCamera(fov,aspect,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new PerspectiveCamera(fov,aspect,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new PerspectiveCamera(fov,aspect,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const l=new PerspectiveCamera(fov,aspect,e,t);l.layers=this.layers,l.up.set(0,0,1),l.lookAt(0,-1,0),this.add(l);const c=new PerspectiveCamera(fov,aspect,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const u=new PerspectiveCamera(fov,aspect,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.toneMapping,p=e.xr.enabled;e.toneMapping=NoToneMapping,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,l),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class CubeTexture extends Texture{constructor(e,t,i,r,s,o,l,c,u,h){e=e!==void 0?e:[],t=t!==void 0?t:CubeReflectionMapping,super(e,t,i,r,s,o,l,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new CubeTexture(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:LinearFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new BoxGeometry(5,5,5),s=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:cloneUniforms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:BackSide,blending:NoBlending});s.uniforms.tEquirect.value=t;const o=new Mesh(r,s),l=t.minFilter;return t.minFilter===LinearMipmapLinearFilter&&(t.minFilter=LinearFilter),new CubeCamera(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const _vector1=new Vector3,_vector2=new Vector3,_normalMatrix=new Matrix3;class Plane{constructor(e=new Vector3(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=_vector1.subVectors(i,t).cross(_vector2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(_vector1),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_normalMatrix.getNormalMatrix(e),r=this.coplanarPoint(_vector1).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _sphere$2=new Sphere,_vector$7=new Vector3;class Frustum{constructor(e=new Plane,t=new Plane,i=new Plane,r=new Plane,s=new Plane,o=new Plane){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],p=i[8],m=i[9],g=i[10],v=i[11],_=i[12],y=i[13],b=i[14],x=i[15];return t[0].setComponents(l-r,d-c,v-p,x-_).normalize(),t[1].setComponents(l+r,d+c,v+p,x+_).normalize(),t[2].setComponents(l+s,d+u,v+m,x+y).normalize(),t[3].setComponents(l-s,d-u,v-m,x-y).normalize(),t[4].setComponents(l-o,d-h,v-g,x-b).normalize(),t[5].setComponents(l+o,d+h,v+g,x+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),_sphere$2.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$2)}intersectsSprite(e){return _sphere$2.center.set(0,0,0),_sphere$2.radius=.7071067811865476,_sphere$2.applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$2)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(_vector$7.x=r.normal.x>0?e.max.x:e.min.x,_vector$7.y=r.normal.y>0?e.max.y:e.min.y,_vector$7.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_vector$7)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function WebGLAnimation(){let a=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=a.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(r),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function WebGLAttributes(a,e){const t=e.isWebGL2,i=new WeakMap;function r(u,h){const d=u.array,p=u.usage,m=a.createBuffer();a.bindBuffer(h,m),a.bufferData(h,d,p),u.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,h,d){const p=h.array,m=h.updateRange;a.bindBuffer(d,u),m.count===-1?a.bufferSubData(d,0,p):(t?a.bufferSubData(d,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):a.bufferSubData(d,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h&&(a.deleteBuffer(h.buffer),i.delete(u))}function c(u,h){if(u.isGLBufferAttribute){const p=i.get(u);(!p||p.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,h)):d.version<u.version&&(s(d.buffer,u,h),d.version=u.version)}return{get:o,remove:l,update:c}}class PlaneGeometry extends BufferGeometry{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,l=Math.floor(i),c=Math.floor(r),u=l+1,h=c+1,d=e/l,p=t/c,m=[],g=[],v=[],_=[];for(let y=0;y<h;y++){const b=y*p-o;for(let x=0;x<u;x++){const S=x*d-s;g.push(S,-b,0),v.push(0,0,1),_.push(x/l),_.push(1-y/c)}}for(let y=0;y<c;y++)for(let b=0;b<l;b++){const x=b+u*y,S=b+u*(y+1),M=b+1+u*(y+1),E=b+1+u*y;m.push(x,S,E),m.push(S,M,E)}this.setIndex(m),this.setAttribute("position",new Float32BufferAttribute(g,3)),this.setAttribute("normal",new Float32BufferAttribute(v,3)),this.setAttribute("uv",new Float32BufferAttribute(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new PlaneGeometry(e.width,e.height,e.widthSegments,e.heightSegments)}}var alphamap_fragment=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,alphamap_pars_fragment=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex="vec3 transformed = vec3( position );",beginnormal_vertex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,iridescence_fragment=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cube_uv_reflection_fragment=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment="gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_vertex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,envmap_physical_pars_fragment=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,lights_toon_fragment=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,lights_physical_pars_fragment=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,clearcoat_normal_fragment_begin=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,clearcoat_pars_fragment=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,iridescence_pars_fragment=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,output_fragment=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,premultiplied_alpha_fragment=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,skinning_vertex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,transmission_pars_fragment=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uv_pars_fragment=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uv_pars_vertex=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv_vertex=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv2_pars_fragment=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv2_pars_vertex=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uv2_vertex=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,worldpos_vertex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vertex$h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fragment$h=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$e=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fragment$e=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vertex$d=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fragment$d=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vertex$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fragment$c=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$b=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fragment$b=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$a=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fragment$a=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$9=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$9=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$8=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fragment$8=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$7=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fragment$7=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vertex$6=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$6=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$5=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fragment$5=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fragment$3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$2=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,vertex$1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fragment$1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ShaderChunk={alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,encodings_fragment,encodings_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_physical_pars_fragment,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_fragment,lightmap_pars_fragment,lights_lambert_fragment,lights_lambert_pars_fragment,lights_pars_begin,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,output_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,uv2_pars_fragment,uv2_pars_vertex,uv2_vertex,worldpos_vertex,background_vert:vertex$h,background_frag:fragment$h,backgroundCube_vert:vertex$g,backgroundCube_frag:fragment$g,cube_vert:vertex$f,cube_frag:fragment$f,depth_vert:vertex$e,depth_frag:fragment$e,distanceRGBA_vert:vertex$d,distanceRGBA_frag:fragment$d,equirect_vert:vertex$c,equirect_frag:fragment$c,linedashed_vert:vertex$b,linedashed_frag:fragment$b,meshbasic_vert:vertex$a,meshbasic_frag:fragment$a,meshlambert_vert:vertex$9,meshlambert_frag:fragment$9,meshmatcap_vert:vertex$8,meshmatcap_frag:fragment$8,meshnormal_vert:vertex$7,meshnormal_frag:fragment$7,meshphong_vert:vertex$6,meshphong_frag:fragment$6,meshphysical_vert:vertex$5,meshphysical_frag:fragment$5,meshtoon_vert:vertex$4,meshtoon_frag:fragment$4,points_vert:vertex$3,points_frag:fragment$3,shadow_vert:vertex$2,shadow_frag:fragment$2,sprite_vert:vertex$1,sprite_frag:fragment$1},UniformsLib={common:{diffuse:{value:new Color(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Matrix3},uv2Transform:{value:new Matrix3},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color(16777215)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Matrix3}}},ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},specular:{value:new Color(1118481)},shininess:{value:30}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.backgroundCube_vert,fragmentShader:ShaderChunk.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distanceRGBA:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distanceRGBA_vert,fragmentShader:ShaderChunk.distanceRGBA_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Color(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Color(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Color(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};const _rgb={r:0,b:0,g:0};function WebGLBackground(a,e,t,i,r,s,o){const l=new Color(0);let c=s===!0?0:1,u,h,d=null,p=0,m=null;function g(_,y){let b=!1,x=y.isScene===!0?y.background:null;x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x));const S=a.xr,M=S.getSession&&S.getSession();M&&M.environmentBlendMode==="additive"&&(x=null),x===null?v(l,c):x&&x.isColor&&(v(x,1),b=!0),(a.autoClear||b)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),x&&(x.isCubeTexture||x.mapping===CubeUVReflectionMapping)?(h===void 0&&(h=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.backgroundCube.uniforms),vertexShader:ShaderLib.backgroundCube.vertexShader,fragmentShader:ShaderLib.backgroundCube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=x.encoding!==sRGBEncoding,(d!==x||p!==x.version||m!==a.toneMapping)&&(h.material.needsUpdate=!0,d=x,p=x.version,m=a.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=x.encoding!==sRGBEncoding,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||p!==x.version||m!==a.toneMapping)&&(u.material.needsUpdate=!0,d=x,p=x.version,m=a.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function v(_,y){_.getRGB(_rgb,getUnlitUniformColorSpace(a)),i.buffers.color.setClear(_rgb.r,_rgb.g,_rgb.b,y,o)}return{getClearColor:function(){return l},setClearColor:function(_,y=1){l.set(_),c=y,v(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,v(l,c)},render:g}}function WebGLBindingStates(a,e,t,i){const r=a.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,l={},c=_(null);let u=c,h=!1;function d(O,$,W,ne,q){let Q=!1;if(o){const J=v(ne,W,$);u!==J&&(u=J,m(u.object)),Q=y(O,ne,W,q),Q&&b(O,ne,W,q)}else{const J=$.wireframe===!0;(u.geometry!==ne.id||u.program!==W.id||u.wireframe!==J)&&(u.geometry=ne.id,u.program=W.id,u.wireframe=J,Q=!0)}q!==null&&t.update(q,34963),(Q||h)&&(h=!1,w(O,$,W,ne),q!==null&&a.bindBuffer(34963,t.get(q).buffer))}function p(){return i.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function m(O){return i.isWebGL2?a.bindVertexArray(O):s.bindVertexArrayOES(O)}function g(O){return i.isWebGL2?a.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function v(O,$,W){const ne=W.wireframe===!0;let q=l[O.id];q===void 0&&(q={},l[O.id]=q);let Q=q[$.id];Q===void 0&&(Q={},q[$.id]=Q);let J=Q[ne];return J===void 0&&(J=_(p()),Q[ne]=J),J}function _(O){const $=[],W=[],ne=[];for(let q=0;q<r;q++)$[q]=0,W[q]=0,ne[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:W,attributeDivisors:ne,object:O,attributes:{},index:null}}function y(O,$,W,ne){const q=u.attributes,Q=$.attributes;let J=0;const ge=W.getAttributes();for(const G in ge)if(ge[G].location>=0){const he=q[G];let N=Q[G];if(N===void 0&&(G==="instanceMatrix"&&O.instanceMatrix&&(N=O.instanceMatrix),G==="instanceColor"&&O.instanceColor&&(N=O.instanceColor)),he===void 0||he.attribute!==N||N&&he.data!==N.data)return!0;J++}return u.attributesNum!==J||u.index!==ne}function b(O,$,W,ne){const q={},Q=$.attributes;let J=0;const ge=W.getAttributes();for(const G in ge)if(ge[G].location>=0){let he=Q[G];he===void 0&&(G==="instanceMatrix"&&O.instanceMatrix&&(he=O.instanceMatrix),G==="instanceColor"&&O.instanceColor&&(he=O.instanceColor));const N={};N.attribute=he,he&&he.data&&(N.data=he.data),q[G]=N,J++}u.attributes=q,u.attributesNum=J,u.index=ne}function x(){const O=u.newAttributes;for(let $=0,W=O.length;$<W;$++)O[$]=0}function S(O){M(O,0)}function M(O,$){const W=u.newAttributes,ne=u.enabledAttributes,q=u.attributeDivisors;W[O]=1,ne[O]===0&&(a.enableVertexAttribArray(O),ne[O]=1),q[O]!==$&&((i.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,$),q[O]=$)}function E(){const O=u.newAttributes,$=u.enabledAttributes;for(let W=0,ne=$.length;W<ne;W++)$[W]!==O[W]&&(a.disableVertexAttribArray(W),$[W]=0)}function R(O,$,W,ne,q,Q){i.isWebGL2===!0&&(W===5124||W===5125)?a.vertexAttribIPointer(O,$,W,q,Q):a.vertexAttribPointer(O,$,W,ne,q,Q)}function w(O,$,W,ne){if(i.isWebGL2===!1&&(O.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const q=ne.attributes,Q=W.getAttributes(),J=$.defaultAttributeValues;for(const ge in Q){const G=Q[ge];if(G.location>=0){let te=q[ge];if(te===void 0&&(ge==="instanceMatrix"&&O.instanceMatrix&&(te=O.instanceMatrix),ge==="instanceColor"&&O.instanceColor&&(te=O.instanceColor)),te!==void 0){const he=te.normalized,N=te.itemSize,re=t.get(te);if(re===void 0)continue;const oe=re.buffer,ce=re.type,fe=re.bytesPerElement;if(te.isInterleavedBufferAttribute){const ve=te.data,Se=ve.stride,Y=te.offset;if(ve.isInstancedInterleavedBuffer){for(let ee=0;ee<G.locationSize;ee++)M(G.location+ee,ve.meshPerAttribute);O.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ee=0;ee<G.locationSize;ee++)S(G.location+ee);a.bindBuffer(34962,oe);for(let ee=0;ee<G.locationSize;ee++)R(G.location+ee,N/G.locationSize,ce,he,Se*fe,(Y+N/G.locationSize*ee)*fe)}else{if(te.isInstancedBufferAttribute){for(let ve=0;ve<G.locationSize;ve++)M(G.location+ve,te.meshPerAttribute);O.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ve=0;ve<G.locationSize;ve++)S(G.location+ve);a.bindBuffer(34962,oe);for(let ve=0;ve<G.locationSize;ve++)R(G.location+ve,N/G.locationSize,ce,he,N*fe,N/G.locationSize*ve*fe)}}else if(J!==void 0){const he=J[ge];if(he!==void 0)switch(he.length){case 2:a.vertexAttrib2fv(G.location,he);break;case 3:a.vertexAttrib3fv(G.location,he);break;case 4:a.vertexAttrib4fv(G.location,he);break;default:a.vertexAttrib1fv(G.location,he)}}}}E()}function A(){D();for(const O in l){const $=l[O];for(const W in $){const ne=$[W];for(const q in ne)g(ne[q].object),delete ne[q];delete $[W]}delete l[O]}}function L(O){if(l[O.id]===void 0)return;const $=l[O.id];for(const W in $){const ne=$[W];for(const q in ne)g(ne[q].object),delete ne[q];delete $[W]}delete l[O.id]}function V(O){for(const $ in l){const W=l[$];if(W[O.id]===void 0)continue;const ne=W[O.id];for(const q in ne)g(ne[q].object),delete ne[q];delete W[O.id]}}function D(){B(),h=!0,u!==c&&(u=c,m(u.object))}function B(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:D,resetDefaultState:B,dispose:A,releaseStatesOfGeometry:L,releaseStatesOfProgram:V,initAttributes:x,enableAttribute:S,disableUnusedAttributes:E}}function WebGLBufferRenderer(a,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function l(u,h){a.drawArrays(s,u,h),t.update(h,s,1)}function c(u,h,d){if(d===0)return;let p,m;if(r)p=a,m="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,u,h,d),t.update(h,s,d)}this.setMode=o,this.render=l,this.renderInstances=c}function WebGLCapabilities(a,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext;let l=t.precision!==void 0?t.precision:"highp";const c=s(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const u=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=a.getParameter(34930),p=a.getParameter(35660),m=a.getParameter(3379),g=a.getParameter(34076),v=a.getParameter(34921),_=a.getParameter(36347),y=a.getParameter(36348),b=a.getParameter(36349),x=p>0,S=o||e.has("OES_texture_float"),M=x&&S,E=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:l,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:E}}function WebGLClipping(a){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Plane,l=new Matrix3,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||i!==0||r;return r=p,i=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,m){const g=d.clippingPlanes,v=d.clipIntersection,_=d.clipShadows,y=a.get(d);if(!r||g===null||g.length===0||s&&!_)s?h(null):u();else{const b=s?0:i,x=b*4;let S=y.clippingState||null;c.value=S,S=h(g,p,x,m);for(let M=0;M!==x;++M)S[M]=t[M];y.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,p,m,g){const v=d!==null?d.length:0;let _=null;if(v!==0){if(_=c.value,g!==!0||_===null){const y=m+v*4,b=p.matrixWorldInverse;l.getNormalMatrix(b),(_===null||_.length<y)&&(_=new Float32Array(y));for(let x=0,S=m;x!==v;++x,S+=4)o.copy(d[x]).applyMatrix4(b,l),o.normal.toArray(_,S),_[S+3]=o.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}function WebGLCubeMaps(a){let e=new WeakMap;function t(o,l){return l===EquirectangularReflectionMapping?o.mapping=CubeReflectionMapping:l===EquirectangularRefractionMapping&&(o.mapping=CubeRefractionMapping),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const l=o.mapping;if(l===EquirectangularReflectionMapping||l===EquirectangularRefractionMapping)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new WebGLCubeRenderTarget(c.height/2);return u.fromEquirectangularTexture(a,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class OrthographicCamera extends Camera{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,l=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const LOD_MIN=4,EXTRA_LOD_SIGMA=[.125,.215,.35,.446,.526,.582],MAX_SAMPLES=20,_flatCamera=new OrthographicCamera,_clearColor=new Color;let _oldTarget=null;const PHI=(1+Math.sqrt(5))/2,INV_PHI=1/PHI,_axisDirections=[new Vector3(1,1,1),new Vector3(-1,1,1),new Vector3(1,1,-1),new Vector3(-1,1,-1),new Vector3(0,PHI,INV_PHI),new Vector3(0,PHI,-INV_PHI),new Vector3(INV_PHI,0,PHI),new Vector3(-INV_PHI,0,PHI),new Vector3(PHI,INV_PHI,0),new Vector3(-PHI,INV_PHI,0)];class PMREMGenerator{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){_oldTarget=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_oldTarget),e.scissorTest=!1,_setViewport(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_oldTarget=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:LinearFilter,minFilter:LinearFilter,generateMipmaps:!1,type:HalfFloatType,format:RGBAFormat,encoding:LinearEncoding,depthBuffer:!1},r=_createRenderTarget(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_createPlanes(s)),this._blurMaterial=_getBlurShader(s,e,t)}return r}_compileMaterial(e){const t=new Mesh(this._lodPlanes[0],e);this._renderer.compile(t,_flatCamera)}_sceneToCubeUV(e,t,i,r){const l=new PerspectiveCamera(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(_clearColor),h.toneMapping=NoToneMapping,h.autoClear=!1;const m=new MeshBasicMaterial({name:"PMREM.Background",side:BackSide,depthWrite:!1,depthTest:!1}),g=new Mesh(new BoxGeometry,m);let v=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,v=!0):(m.color.copy(_clearColor),v=!0);for(let y=0;y<6;y++){const b=y%3;b===0?(l.up.set(0,c[y],0),l.lookAt(u[y],0,0)):b===1?(l.up.set(0,0,c[y]),l.lookAt(0,u[y],0)):(l.up.set(0,c[y],0),l.lookAt(0,0,u[y]));const x=this._cubeSize;_setViewport(r,b*x,y>2?x:0,x,x),h.setRenderTarget(r),v&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Mesh(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;_setViewport(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,_flatCamera)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_axisDirections[(r-1)%_axisDirections.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,l){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Mesh(this._lodPlanes[r],u),p=u.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*MAX_SAMPLES-1),v=s/g,_=isFinite(s)?1+Math.floor(h*v):MAX_SAMPLES;_>MAX_SAMPLES&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${MAX_SAMPLES}`);const y=[];let b=0;for(let R=0;R<MAX_SAMPLES;++R){const w=R/v,A=Math.exp(-w*w/2);y.push(A),R===0?b+=A:R<_&&(b+=2*A)}for(let R=0;R<y.length;R++)y[R]=y[R]/b;p.envMap.value=e.texture,p.samples.value=_,p.weights.value=y,p.latitudinal.value=o==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:x}=this;p.dTheta.value=g,p.mipInt.value=x-i;const S=this._sizeLods[r],M=3*S*(r>x-LOD_MIN?r-x+LOD_MIN:0),E=4*(this._cubeSize-S);_setViewport(t,M,E,3*S,2*S),c.setRenderTarget(t),c.render(d,_flatCamera)}}function _createPlanes(a){const e=[],t=[],i=[];let r=a;const s=a-LOD_MIN+1+EXTRA_LOD_SIGMA.length;for(let o=0;o<s;o++){const l=Math.pow(2,r);t.push(l);let c=1/l;o>a-LOD_MIN?c=EXTRA_LOD_SIGMA[o-a+LOD_MIN-1]:o===0&&(c=0),i.push(c);const u=1/(l-2),h=-u,d=1+u,p=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,v=3,_=2,y=1,b=new Float32Array(v*g*m),x=new Float32Array(_*g*m),S=new Float32Array(y*g*m);for(let E=0;E<m;E++){const R=E%3*2/3-1,w=E>2?0:-1,A=[R,w,0,R+2/3,w,0,R+2/3,w+1,0,R,w,0,R+2/3,w+1,0,R,w+1,0];b.set(A,v*g*E),x.set(p,_*g*E);const L=[E,E,E,E,E,E];S.set(L,y*g*E)}const M=new BufferGeometry;M.setAttribute("position",new BufferAttribute(b,v)),M.setAttribute("uv",new BufferAttribute(x,_)),M.setAttribute("faceIndex",new BufferAttribute(S,y)),e.push(M),r>LOD_MIN&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _createRenderTarget(a,e,t){const i=new WebGLRenderTarget(a,e,t);return i.texture.mapping=CubeUVReflectionMapping,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _setViewport(a,e,t,i,r){a.viewport.set(e,t,i,r),a.scissor.set(e,t,i,r)}function _getBlurShader(a,e,t){const i=new Float32Array(MAX_SAMPLES),r=new Vector3(0,1,0);return new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:MAX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getEquirectMaterial(){return new ShaderMaterial({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCubemapMaterial(){return new ShaderMaterial({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCommonVertexShader(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function WebGLCubeUVMaps(a){let e=new WeakMap,t=null;function i(l){if(l&&l.isTexture){const c=l.mapping,u=c===EquirectangularReflectionMapping||c===EquirectangularRefractionMapping,h=c===CubeReflectionMapping||c===CubeRefractionMapping;if(u||h)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let d=e.get(l);return t===null&&(t=new PMREMGenerator(a)),d=u?t.fromEquirectangular(l,d):t.fromCubemap(l,d),e.set(l,d),d.texture}else{if(e.has(l))return e.get(l).texture;{const d=l.image;if(u&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new PMREMGenerator(a));const p=u?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,p),l.addEventListener("dispose",s),p.texture}else return null}}}return l}function r(l){let c=0;const u=6;for(let h=0;h<u;h++)l[h]!==void 0&&c++;return c===u}function s(l){const c=l.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function WebGLExtensions(a){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=a.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function WebGLGeometries(a,e,t,i){const r={},s=new WeakMap;function o(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(d,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function c(d){const p=d.attributes;for(const g in p)e.update(p[g],34962);const m=d.morphAttributes;for(const g in m){const v=m[g];for(let _=0,y=v.length;_<y;_++)e.update(v[_],34962)}}function u(d){const p=[],m=d.index,g=d.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let x=0,S=b.length;x<S;x+=3){const M=b[x+0],E=b[x+1],R=b[x+2];p.push(M,E,E,R,R,M)}}else{const b=g.array;v=g.version;for(let x=0,S=b.length/3-1;x<S;x+=3){const M=x+0,E=x+1,R=x+2;p.push(M,E,E,R,R,M)}}const _=new(arrayNeedsUint32(p)?Uint32BufferAttribute:Uint16BufferAttribute)(p,1);_.version=v;const y=s.get(d);y&&e.remove(y),s.set(d,_)}function h(d){const p=s.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&u(d)}else u(d);return s.get(d)}return{get:l,update:c,getWireframeAttribute:h}}function WebGLIndexedBufferRenderer(a,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let l,c;function u(p){l=p.type,c=p.bytesPerElement}function h(p,m){a.drawElements(s,m,l,p*c),t.update(m,s,1)}function d(p,m,g){if(g===0)return;let v,_;if(r)v=a,_="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](s,m,l,p*c,g),t.update(m,s,g)}this.setMode=o,this.setIndex=u,this.render=h,this.renderInstances=d}function WebGLInfo(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,l){switch(t.calls++,o){case 4:t.triangles+=l*(s/3);break;case 1:t.lines+=l*(s/2);break;case 3:t.lines+=l*(s-1);break;case 2:t.lines+=l*s;break;case 0:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function numericalSort(a,e){return a[0]-e[0]}function absNumericalSort(a,e){return Math.abs(e[1])-Math.abs(a[1])}function WebGLMorphtargets(a,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Vector4,l=[];for(let u=0;u<8;u++)l[u]=[u,0];function c(u,h,d){const p=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=s.get(h);if(_===void 0||_.count!==v){let $=function(){B.dispose(),s.delete(h),h.removeEventListener("dispose",$)};var m=$;_!==void 0&&_.texture.dispose();const x=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let A=0;x===!0&&(A=1),S===!0&&(A=2),M===!0&&(A=3);let L=h.attributes.position.count*A,V=1;L>e.maxTextureSize&&(V=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const D=new Float32Array(L*V*4*v),B=new DataArrayTexture(D,L,V,v);B.type=FloatType,B.needsUpdate=!0;const O=A*4;for(let W=0;W<v;W++){const ne=E[W],q=R[W],Q=w[W],J=L*V*4*W;for(let ge=0;ge<ne.count;ge++){const G=ge*O;x===!0&&(o.fromBufferAttribute(ne,ge),D[J+G+0]=o.x,D[J+G+1]=o.y,D[J+G+2]=o.z,D[J+G+3]=0),S===!0&&(o.fromBufferAttribute(q,ge),D[J+G+4]=o.x,D[J+G+5]=o.y,D[J+G+6]=o.z,D[J+G+7]=0),M===!0&&(o.fromBufferAttribute(Q,ge),D[J+G+8]=o.x,D[J+G+9]=o.y,D[J+G+10]=o.z,D[J+G+11]=Q.itemSize===4?o.w:1)}}_={count:v,texture:B,size:new Vector2(L,V)},s.set(h,_),h.addEventListener("dispose",$)}let y=0;for(let x=0;x<p.length;x++)y+=p[x];const b=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(a,"morphTargetBaseInfluence",b),d.getUniforms().setValue(a,"morphTargetInfluences",p),d.getUniforms().setValue(a,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}else{const g=p===void 0?0:p.length;let v=i[h.id];if(v===void 0||v.length!==g){v=[];for(let S=0;S<g;S++)v[S]=[S,0];i[h.id]=v}for(let S=0;S<g;S++){const M=v[S];M[0]=S,M[1]=p[S]}v.sort(absNumericalSort);for(let S=0;S<8;S++)S<g&&v[S][1]?(l[S][0]=v[S][0],l[S][1]=v[S][1]):(l[S][0]=Number.MAX_SAFE_INTEGER,l[S][1]=0);l.sort(numericalSort);const _=h.morphAttributes.position,y=h.morphAttributes.normal;let b=0;for(let S=0;S<8;S++){const M=l[S],E=M[0],R=M[1];E!==Number.MAX_SAFE_INTEGER&&R?(_&&h.getAttribute("morphTarget"+S)!==_[E]&&h.setAttribute("morphTarget"+S,_[E]),y&&h.getAttribute("morphNormal"+S)!==y[E]&&h.setAttribute("morphNormal"+S,y[E]),r[S]=R,b+=R):(_&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),y&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),r[S]=0)}const x=h.morphTargetsRelative?1:1-b;d.getUniforms().setValue(a,"morphTargetBaseInfluence",x),d.getUniforms().setValue(a,"morphTargetInfluences",r)}}return{update:c}}function WebGLObjects(a,e,t,i){let r=new WeakMap;function s(c){const u=i.render.frame,h=c.geometry,d=e.get(c,h);return r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),d}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const emptyTexture=new Texture,emptyArrayTexture=new DataArrayTexture,empty3dTexture=new Data3DTexture,emptyCubeTexture=new CubeTexture,arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(a,e,t){const i=a[0];if(i<=0||i>0)return a;const r=e*t;let s=arrayCacheF32[r];if(s===void 0&&(s=new Float32Array(r),arrayCacheF32[r]=s),e!==0){i.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=t,a[o].toArray(s,l)}return s}function arraysEqual(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function copyArray(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function allocTexUnits(a,e){let t=arrayCacheI32[e];t===void 0&&(t=new Int32Array(e),arrayCacheI32[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function setValueV1f(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function setValueV2f(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;a.uniform2fv(this.addr,e),copyArray(t,e)}}function setValueV3f(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(arraysEqual(t,e))return;a.uniform3fv(this.addr,e),copyArray(t,e)}}function setValueV4f(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;a.uniform4fv(this.addr,e),copyArray(t,e)}}function setValueM2(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(arraysEqual(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,i))return;mat2array.set(i),a.uniformMatrix2fv(this.addr,!1,mat2array),copyArray(t,i)}}function setValueM3(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(arraysEqual(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,i))return;mat3array.set(i),a.uniformMatrix3fv(this.addr,!1,mat3array),copyArray(t,i)}}function setValueM4(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(arraysEqual(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,i))return;mat4array.set(i),a.uniformMatrix4fv(this.addr,!1,mat4array),copyArray(t,i)}}function setValueV1i(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function setValueV2i(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;a.uniform2iv(this.addr,e),copyArray(t,e)}}function setValueV3i(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(arraysEqual(t,e))return;a.uniform3iv(this.addr,e),copyArray(t,e)}}function setValueV4i(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;a.uniform4iv(this.addr,e),copyArray(t,e)}}function setValueV1ui(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function setValueV2ui(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;a.uniform2uiv(this.addr,e),copyArray(t,e)}}function setValueV3ui(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(arraysEqual(t,e))return;a.uniform3uiv(this.addr,e),copyArray(t,e)}}function setValueV4ui(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;a.uniform4uiv(this.addr,e),copyArray(t,e)}}function setValueT1(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||emptyTexture,r)}function setValueT3D1(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||empty3dTexture,r)}function setValueT6(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||emptyCubeTexture,r)}function setValueT2DArray1(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||emptyArrayTexture,r)}function getSingularSetter(a){switch(a){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(a,e){a.uniform1fv(this.addr,e)}function setValueV2fArray(a,e){const t=flatten(e,this.size,2);a.uniform2fv(this.addr,t)}function setValueV3fArray(a,e){const t=flatten(e,this.size,3);a.uniform3fv(this.addr,t)}function setValueV4fArray(a,e){const t=flatten(e,this.size,4);a.uniform4fv(this.addr,t)}function setValueM2Array(a,e){const t=flatten(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function setValueM3Array(a,e){const t=flatten(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function setValueM4Array(a,e){const t=flatten(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function setValueV1iArray(a,e){a.uniform1iv(this.addr,e)}function setValueV2iArray(a,e){a.uniform2iv(this.addr,e)}function setValueV3iArray(a,e){a.uniform3iv(this.addr,e)}function setValueV4iArray(a,e){a.uniform4iv(this.addr,e)}function setValueV1uiArray(a,e){a.uniform1uiv(this.addr,e)}function setValueV2uiArray(a,e){a.uniform2uiv(this.addr,e)}function setValueV3uiArray(a,e){a.uniform3uiv(this.addr,e)}function setValueV4uiArray(a,e){a.uniform4uiv(this.addr,e)}function setValueT1Array(a,e,t){const i=this.cache,r=e.length,s=allocTexUnits(t,r);arraysEqual(i,s)||(a.uniform1iv(this.addr,s),copyArray(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||emptyTexture,s[o])}function setValueT3DArray(a,e,t){const i=this.cache,r=e.length,s=allocTexUnits(t,r);arraysEqual(i,s)||(a.uniform1iv(this.addr,s),copyArray(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||empty3dTexture,s[o])}function setValueT6Array(a,e,t){const i=this.cache,r=e.length,s=allocTexUnits(t,r);arraysEqual(i,s)||(a.uniform1iv(this.addr,s),copyArray(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||emptyCubeTexture,s[o])}function setValueT2DArrayArray(a,e,t){const i=this.cache,r=e.length,s=allocTexUnits(t,r);arraysEqual(i,s)||(a.uniform1iv(this.addr,s),copyArray(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||emptyArrayTexture,s[o])}function getPureArraySetter(a){switch(a){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}class SingleUniform{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=getSingularSetter(t.type)}}class PureArrayUniform{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=getPureArraySetter(t.type)}}class StructuredUniform{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const l=r[s];l.setValue(e,t[l.id],i)}}}const RePathPart=/(\w+)(\])?(\[|\.)?/g;function addUniform(a,e){a.seq.push(e),a.map[e.id]=e}function parseUniform(a,e,t){const i=a.name,r=i.length;for(RePathPart.lastIndex=0;;){const s=RePathPart.exec(i),o=RePathPart.lastIndex;let l=s[1];const c=s[2]==="]",u=s[3];if(c&&(l=l|0),u===void 0||u==="["&&o+2===r){addUniform(t,u===void 0?new SingleUniform(l,a,e):new PureArrayUniform(l,a,e));break}else{let d=t.map[l];d===void 0&&(d=new StructuredUniform(l),addUniform(t,d)),t=d}}}class WebGLUniforms{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);parseUniform(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const l=t[s],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function WebGLShader(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}let programIdCount=0;function handleSource(a,e){const t=a.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const l=o+1;i.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return i.join(`
`)}function getEncodingComponents(a){switch(a){case LinearEncoding:return["Linear","( value )"];case sRGBEncoding:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function getShaderErrors(a,e,t){const i=a.getShaderParameter(e,35713),r=a.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+handleSource(a.getShaderSource(e),o)}else return r}function getTexelEncodingFunction(a,e){const t=getEncodingComponents(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function getToneMappingFunction(a,e){let t;switch(e){case LinearToneMapping:t="Linear";break;case ReinhardToneMapping:t="Reinhard";break;case CineonToneMapping:t="OptimizedCineon";break;case ACESFilmicToneMapping:t="ACESFilmic";break;case CustomToneMapping:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function generateExtensions(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(filterEmptyLine).join(`
`)}function generateDefines(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fetchAttributeLocations(a,e){const t={},i=a.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=a.getActiveAttrib(e,r),o=s.name;let l=1;s.type===35674&&(l=2),s.type===35675&&(l=3),s.type===35676&&(l=4),t[o]={type:s.type,location:a.getAttribLocation(e,o),locationSize:l}}return t}function filterEmptyLine(a){return a!==""}function replaceLightNums(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function replaceClippingPlaneNums(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const includePattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(a){return a.replace(includePattern,includeReplacer)}function includeReplacer(a,e){const t=ShaderChunk[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return resolveIncludes(t)}const unrollLoopPattern=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(a){return a.replace(unrollLoopPattern,loopReplacer)}function loopReplacer(a,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function generatePrecision(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function generateShadowMapTypeDefine(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===PCFShadowMap?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===PCFSoftShadowMap?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===VSMShadowMap&&(e="SHADOWMAP_TYPE_VSM"),e}function generateEnvMapTypeDefine(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case CubeReflectionMapping:case CubeRefractionMapping:e="ENVMAP_TYPE_CUBE";break;case CubeUVReflectionMapping:e="ENVMAP_TYPE_CUBE_UV";break}return e}function generateEnvMapModeDefine(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case CubeRefractionMapping:e="ENVMAP_MODE_REFRACTION";break}return e}function generateEnvMapBlendingDefine(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case MultiplyOperation:e="ENVMAP_BLENDING_MULTIPLY";break;case MixOperation:e="ENVMAP_BLENDING_MIX";break;case AddOperation:e="ENVMAP_BLENDING_ADD";break}return e}function generateCubeUVSize(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function WebGLProgram(a,e,t,i){const r=a.getContext(),s=t.defines;let o=t.vertexShader,l=t.fragmentShader;const c=generateShadowMapTypeDefine(t),u=generateEnvMapTypeDefine(t),h=generateEnvMapModeDefine(t),d=generateEnvMapBlendingDefine(t),p=generateCubeUVSize(t),m=t.isWebGL2?"":generateExtensions(t),g=generateDefines(s),v=r.createProgram();let _,y,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=[g].filter(filterEmptyLine).join(`
`),_.length>0&&(_+=`
`),y=[m,g].filter(filterEmptyLine).join(`
`),y.length>0&&(y+=`
`)):(_=[generatePrecision(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(filterEmptyLine).join(`
`),y=[m,generatePrecision(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",t.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",t.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ShaderChunk.encodings_pars_fragment,getTexelEncodingFunction("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(filterEmptyLine).join(`
`)),o=resolveIncludes(o),o=replaceLightNums(o,t),o=replaceClippingPlaneNums(o,t),l=resolveIncludes(l),l=replaceLightNums(l,t),l=replaceClippingPlaneNums(l,t),o=unrollLoops(o),l=unrollLoops(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,y=["#define varying in",t.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const x=b+_+o,S=b+y+l,M=WebGLShader(r,35633,x),E=WebGLShader(r,35632,S);if(r.attachShader(v,M),r.attachShader(v,E),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),a.debug.checkShaderErrors){const A=r.getProgramInfoLog(v).trim(),L=r.getShaderInfoLog(M).trim(),V=r.getShaderInfoLog(E).trim();let D=!0,B=!0;if(r.getProgramParameter(v,35714)===!1){D=!1;const O=getShaderErrors(r,M,"vertex"),$=getShaderErrors(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,35715)+`

Program Info Log: `+A+`
`+O+`
`+$)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(L===""||V==="")&&(B=!1);B&&(this.diagnostics={runnable:D,programLog:A,vertexShader:{log:L,prefix:_},fragmentShader:{log:V,prefix:y}})}r.deleteShader(M),r.deleteShader(E);let R;this.getUniforms=function(){return R===void 0&&(R=new WebGLUniforms(r,v)),R};let w;return this.getAttributes=function(){return w===void 0&&(w=fetchAttributeLocations(r,v)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=programIdCount++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=E,this}let _id=0;class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new WebGLShaderStage(e),t.set(e,i)),i}}class WebGLShaderStage{constructor(e){this.id=_id++,this.code=e,this.usedTimes=0}}function WebGLPrograms(a,e,t,i,r,s,o){const l=new Layers,c=new WebGLShaderCache,u=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w,A,L,V,D){const B=V.fog,O=D.geometry,$=w.isMeshStandardMaterial?V.environment:null,W=(w.isMeshStandardMaterial?t:e).get(w.envMap||$),ne=W&&W.mapping===CubeUVReflectionMapping?W.image.height:null,q=g[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,J=Q!==void 0?Q.length:0;let ge=0;O.morphAttributes.position!==void 0&&(ge=1),O.morphAttributes.normal!==void 0&&(ge=2),O.morphAttributes.color!==void 0&&(ge=3);let G,te,he,N;if(q){const Se=ShaderLib[q];G=Se.vertexShader,te=Se.fragmentShader}else G=w.vertexShader,te=w.fragmentShader,c.update(w),he=c.getVertexShaderID(w),N=c.getFragmentShaderID(w);const re=a.getRenderTarget(),oe=w.alphaTest>0,ce=w.clearcoat>0,fe=w.iridescence>0;return{isWebGL2:h,shaderID:q,shaderName:w.type,vertexShader:G,fragmentShader:te,defines:w.defines,customVertexShaderID:he,customFragmentShaderID:N,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,instancing:D.isInstancedMesh===!0,instancingColor:D.isInstancedMesh===!0&&D.instanceColor!==null,supportsVertexTextures:p,outputEncoding:re===null?a.outputEncoding:re.isXRRenderTarget===!0?re.texture.encoding:LinearEncoding,map:!!w.map,matcap:!!w.matcap,envMap:!!W,envMapMode:W&&W.mapping,envMapCubeUVHeight:ne,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===ObjectSpaceNormalMap,tangentSpaceNormalMap:w.normalMapType===TangentSpaceNormalMap,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===sRGBEncoding,clearcoat:ce,clearcoatMap:ce&&!!w.clearcoatMap,clearcoatRoughnessMap:ce&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:ce&&!!w.clearcoatNormalMap,iridescence:fe,iridescenceMap:fe&&!!w.iridescenceMap,iridescenceThicknessMap:fe&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===NormalBlending,alphaMap:!!w.alphaMap,alphaTest:oe,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!O.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(w.map||w.bumpMap||w.normalMap||w.specularMap||w.alphaMap||w.emissiveMap||w.roughnessMap||w.metalnessMap||w.clearcoatNormalMap||w.iridescenceMap||w.iridescenceThicknessMap||w.transmission>0||w.transmissionMap||w.thicknessMap||w.specularIntensityMap||w.specularColorMap||w.sheen>0||w.sheenColorMap||w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!B,useFog:w.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ge,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:a.shadowMap.enabled&&L.length>0,shadowMapType:a.shadowMap.type,toneMapping:w.toneMapped?a.toneMapping:NoToneMapping,useLegacyLights:a.useLegacyLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===DoubleSide,flipSided:w.side===BackSide,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function _(w){const A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)A.push(L),A.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(y(A,w),b(A,w),A.push(a.outputEncoding)),A.push(w.customProgramCacheKey),A.join()}function y(w,A){w.push(A.precision),w.push(A.outputEncoding),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.combine),w.push(A.vertexUvs),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function b(w,A){l.disableAll(),A.isWebGL2&&l.enable(0),A.supportsVertexTextures&&l.enable(1),A.instancing&&l.enable(2),A.instancingColor&&l.enable(3),A.map&&l.enable(4),A.matcap&&l.enable(5),A.envMap&&l.enable(6),A.lightMap&&l.enable(7),A.aoMap&&l.enable(8),A.emissiveMap&&l.enable(9),A.bumpMap&&l.enable(10),A.normalMap&&l.enable(11),A.objectSpaceNormalMap&&l.enable(12),A.tangentSpaceNormalMap&&l.enable(13),A.clearcoat&&l.enable(14),A.clearcoatMap&&l.enable(15),A.clearcoatRoughnessMap&&l.enable(16),A.clearcoatNormalMap&&l.enable(17),A.iridescence&&l.enable(18),A.iridescenceMap&&l.enable(19),A.iridescenceThicknessMap&&l.enable(20),A.displacementMap&&l.enable(21),A.specularMap&&l.enable(22),A.roughnessMap&&l.enable(23),A.metalnessMap&&l.enable(24),A.gradientMap&&l.enable(25),A.alphaMap&&l.enable(26),A.alphaTest&&l.enable(27),A.vertexColors&&l.enable(28),A.vertexAlphas&&l.enable(29),A.vertexUvs&&l.enable(30),A.vertexTangents&&l.enable(31),A.uvsVertexOnly&&l.enable(32),w.push(l.mask),l.disableAll(),A.fog&&l.enable(0),A.useFog&&l.enable(1),A.flatShading&&l.enable(2),A.logarithmicDepthBuffer&&l.enable(3),A.skinning&&l.enable(4),A.morphTargets&&l.enable(5),A.morphNormals&&l.enable(6),A.morphColors&&l.enable(7),A.premultipliedAlpha&&l.enable(8),A.shadowMapEnabled&&l.enable(9),A.useLegacyLights&&l.enable(10),A.doubleSided&&l.enable(11),A.flipSided&&l.enable(12),A.useDepthPacking&&l.enable(13),A.dithering&&l.enable(14),A.specularIntensityMap&&l.enable(15),A.specularColorMap&&l.enable(16),A.transmission&&l.enable(17),A.transmissionMap&&l.enable(18),A.thicknessMap&&l.enable(19),A.sheen&&l.enable(20),A.sheenColorMap&&l.enable(21),A.sheenRoughnessMap&&l.enable(22),A.decodeVideoTexture&&l.enable(23),A.opaque&&l.enable(24),w.push(l.mask)}function x(w){const A=g[w.type];let L;if(A){const V=ShaderLib[A];L=UniformsUtils.clone(V.uniforms)}else L=w.uniforms;return L}function S(w,A){let L;for(let V=0,D=u.length;V<D;V++){const B=u[V];if(B.cacheKey===A){L=B,++L.usedTimes;break}}return L===void 0&&(L=new WebGLProgram(a,A,w,s),u.push(L)),L}function M(w){if(--w.usedTimes===0){const A=u.indexOf(w);u[A]=u[u.length-1],u.pop(),w.destroy()}}function E(w){c.remove(w)}function R(){c.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:x,acquireProgram:S,releaseProgram:M,releaseShaderCache:E,programs:u,dispose:R}}function WebGLProperties(){let a=new WeakMap;function e(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function t(s){a.delete(s)}function i(s,o,l){a.get(s)[o]=l}function r(){a=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function painterSortStable(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function reversePainterSortStable(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function WebGLRenderList(){const a=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,p,m,g,v,_){let y=a[e];return y===void 0?(y={id:d.id,object:d,geometry:p,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:_},a[e]=y):(y.id=d.id,y.object=d,y.geometry=p,y.material=m,y.groupOrder=g,y.renderOrder=d.renderOrder,y.z=v,y.group=_),e++,y}function l(d,p,m,g,v,_){const y=o(d,p,m,g,v,_);m.transmission>0?i.push(y):m.transparent===!0?r.push(y):t.push(y)}function c(d,p,m,g,v,_){const y=o(d,p,m,g,v,_);m.transmission>0?i.unshift(y):m.transparent===!0?r.unshift(y):t.unshift(y)}function u(d,p){t.length>1&&t.sort(d||painterSortStable),i.length>1&&i.sort(p||reversePainterSortStable),r.length>1&&r.sort(p||reversePainterSortStable)}function h(){for(let d=e,p=a.length;d<p;d++){const m=a[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function WebGLRenderLists(){let a=new WeakMap;function e(i,r){const s=a.get(i);let o;return s===void 0?(o=new WebGLRenderList,a.set(i,[o])):r>=s.length?(o=new WebGLRenderList,s.push(o)):o=s[r],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function UniformsCache(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Vector3,color:new Color};break;case"SpotLight":t={position:new Vector3,direction:new Vector3,color:new Color,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Vector3,color:new Color,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Vector3,skyColor:new Color,groundColor:new Color};break;case"RectAreaLight":t={color:new Color,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}return a[e.id]=t,t}}}function ShadowUniformsCache(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let nextVersion=0;function shadowCastingAndTexturingLightsFirst(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function WebGLLights(a,e){const t=new UniformsCache,i=ShadowUniformsCache(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new Vector3);const s=new Vector3,o=new Matrix4,l=new Matrix4;function c(h,d){let p=0,m=0,g=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let v=0,_=0,y=0,b=0,x=0,S=0,M=0,E=0,R=0,w=0;h.sort(shadowCastingAndTexturingLightsFirst);const A=d===!0?Math.PI:1;for(let V=0,D=h.length;V<D;V++){const B=h[V],O=B.color,$=B.intensity,W=B.distance,ne=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=O.r*$*A,m+=O.g*$*A,g+=O.b*$*A;else if(B.isLightProbe)for(let q=0;q<9;q++)r.probe[q].addScaledVector(B.sh.coefficients[q],$);else if(B.isDirectionalLight){const q=t.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity*A),B.castShadow){const Q=B.shadow,J=i.get(B);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,r.directionalShadow[v]=J,r.directionalShadowMap[v]=ne,r.directionalShadowMatrix[v]=B.shadow.matrix,S++}r.directional[v]=q,v++}else if(B.isSpotLight){const q=t.get(B);q.position.setFromMatrixPosition(B.matrixWorld),q.color.copy(O).multiplyScalar($*A),q.distance=W,q.coneCos=Math.cos(B.angle),q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),q.decay=B.decay,r.spot[y]=q;const Q=B.shadow;if(B.map&&(r.spotLightMap[R]=B.map,R++,Q.updateMatrices(B),B.castShadow&&w++),r.spotLightMatrix[y]=Q.matrix,B.castShadow){const J=i.get(B);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,r.spotShadow[y]=J,r.spotShadowMap[y]=ne,E++}y++}else if(B.isRectAreaLight){const q=t.get(B);q.color.copy(O).multiplyScalar($),q.halfWidth.set(B.width*.5,0,0),q.halfHeight.set(0,B.height*.5,0),r.rectArea[b]=q,b++}else if(B.isPointLight){const q=t.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity*A),q.distance=B.distance,q.decay=B.decay,B.castShadow){const Q=B.shadow,J=i.get(B);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,J.shadowCameraNear=Q.camera.near,J.shadowCameraFar=Q.camera.far,r.pointShadow[_]=J,r.pointShadowMap[_]=ne,r.pointShadowMatrix[_]=B.shadow.matrix,M++}r.point[_]=q,_++}else if(B.isHemisphereLight){const q=t.get(B);q.skyColor.copy(B.color).multiplyScalar($*A),q.groundColor.copy(B.groundColor).multiplyScalar($*A),r.hemi[x]=q,x++}}b>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,r.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=UniformsLib.LTC_HALF_1,r.rectAreaLTC2=UniformsLib.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=m,r.ambient[2]=g;const L=r.hash;(L.directionalLength!==v||L.pointLength!==_||L.spotLength!==y||L.rectAreaLength!==b||L.hemiLength!==x||L.numDirectionalShadows!==S||L.numPointShadows!==M||L.numSpotShadows!==E||L.numSpotMaps!==R)&&(r.directional.length=v,r.spot.length=y,r.rectArea.length=b,r.point.length=_,r.hemi.length=x,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=E+R-w,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=w,L.directionalLength=v,L.pointLength=_,L.spotLength=y,L.rectAreaLength=b,L.hemiLength=x,L.numDirectionalShadows=S,L.numPointShadows=M,L.numSpotShadows=E,L.numSpotMaps=R,r.version=nextVersion++)}function u(h,d){let p=0,m=0,g=0,v=0,_=0;const y=d.matrixWorldInverse;for(let b=0,x=h.length;b<x;b++){const S=h[b];if(S.isDirectionalLight){const M=r.directional[p];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(y),p++}else if(S.isSpotLight){const M=r.spot[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(y),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(y),g++}else if(S.isRectAreaLight){const M=r.rectArea[v];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(y),l.identity(),o.copy(S.matrixWorld),o.premultiply(y),l.extractRotation(o),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(l),M.halfHeight.applyMatrix4(l),v++}else if(S.isPointLight){const M=r.point[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(y),m++}else if(S.isHemisphereLight){const M=r.hemi[_];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(y),_++}}}return{setup:c,setupView:u,state:r}}function WebGLRenderState(a,e){const t=new WebGLLights(a,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function l(d){r.push(d)}function c(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:u,pushLight:o,pushShadow:l}}function WebGLRenderStates(a,e){let t=new WeakMap;function i(s,o=0){const l=t.get(s);let c;return l===void 0?(c=new WebGLRenderState(a,e),t.set(s,[c])):o>=l.length?(c=new WebGLRenderState(a,e),l.push(c)):c=l[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class MeshDepthMaterial extends Material{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BasicDepthPacking,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MeshDistanceMaterial extends Material{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Vector3,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vertex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragment=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WebGLShadowMap(a,e,t){let i=new Frustum;const r=new Vector2,s=new Vector2,o=new Vector4,l=new MeshDepthMaterial({depthPacking:RGBADepthPacking}),c=new MeshDistanceMaterial,u={},h=t.maxTextureSize,d={[FrontSide]:BackSide,[BackSide]:FrontSide,[DoubleSide]:DoubleSide},p=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vector2},radius:{value:4}},vertexShader:vertex,fragmentShader:fragment}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new BufferGeometry;g.setAttribute("position",new BufferAttribute(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Mesh(g,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PCFShadowMap,this.render=function(S,M,E){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||S.length===0)return;const R=a.getRenderTarget(),w=a.getActiveCubeFace(),A=a.getActiveMipmapLevel(),L=a.state;L.setBlending(NoBlending),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let V=0,D=S.length;V<D;V++){const B=S[V],O=B.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const $=O.getFrameExtents();if(r.multiply($),s.copy(O.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/$.x),r.x=s.x*$.x,O.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/$.y),r.y=s.y*$.y,O.mapSize.y=s.y)),O.map===null){const ne=this.type!==VSMShadowMap?{minFilter:NearestFilter,magFilter:NearestFilter}:{};O.map=new WebGLRenderTarget(r.x,r.y,ne),O.map.texture.name=B.name+".shadowMap",O.camera.updateProjectionMatrix()}a.setRenderTarget(O.map),a.clear();const W=O.getViewportCount();for(let ne=0;ne<W;ne++){const q=O.getViewport(ne);o.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),L.viewport(o),O.updateMatrices(B,ne),i=O.getFrustum(),x(M,E,O.camera,B,this.type)}O.isPointLightShadow!==!0&&this.type===VSMShadowMap&&y(O,E),O.needsUpdate=!1}_.needsUpdate=!1,a.setRenderTarget(R,w,A)};function y(S,M){const E=e.update(v);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new WebGLRenderTarget(r.x,r.y)),p.uniforms.shadow_pass.value=S.map.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,a.setRenderTarget(S.mapPass),a.clear(),a.renderBufferDirect(M,null,E,p,v,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,a.setRenderTarget(S.map),a.clear(),a.renderBufferDirect(M,null,E,m,v,null)}function b(S,M,E,R,w,A){let L=null;const V=E.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(V!==void 0)L=V;else if(L=E.isPointLight===!0?c:l,a.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const D=L.uuid,B=M.uuid;let O=u[D];O===void 0&&(O={},u[D]=O);let $=O[B];$===void 0&&($=L.clone(),O[B]=$),L=$}return L.visible=M.visible,L.wireframe=M.wireframe,A===VSMShadowMap?L.side=M.shadowSide!==null?M.shadowSide:M.side:L.side=M.shadowSide!==null?M.shadowSide:d[M.side],L.alphaMap=M.alphaMap,L.alphaTest=M.alphaTest,L.map=M.map,L.clipShadows=M.clipShadows,L.clippingPlanes=M.clippingPlanes,L.clipIntersection=M.clipIntersection,L.displacementMap=M.displacementMap,L.displacementScale=M.displacementScale,L.displacementBias=M.displacementBias,L.wireframeLinewidth=M.wireframeLinewidth,L.linewidth=M.linewidth,E.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(E.matrixWorld),L.nearDistance=R,L.farDistance=w),L}function x(S,M,E,R,w){if(S.visible===!1)return;if(S.layers.test(M.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===VSMShadowMap)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,S.matrixWorld);const V=e.update(S),D=S.material;if(Array.isArray(D)){const B=V.groups;for(let O=0,$=B.length;O<$;O++){const W=B[O],ne=D[W.materialIndex];if(ne&&ne.visible){const q=b(S,ne,R,E.near,E.far,w);a.renderBufferDirect(E,null,V,q,S,W)}}}else if(D.visible){const B=b(S,D,R,E.near,E.far,w);a.renderBufferDirect(E,null,V,B,S,null)}}const L=S.children;for(let V=0,D=L.length;V<D;V++)x(L[V],M,E,R,w)}}function WebGLState(a,e,t){const i=t.isWebGL2;function r(){let F=!1;const X=new Vector4;let ie=null;const xe=new Vector4(0,0,0,0);return{setMask:function(Me){ie!==Me&&!F&&(a.colorMask(Me,Me,Me,Me),ie=Me)},setLocked:function(Me){F=Me},setClear:function(Me,ke,je,Xe,Qe){Qe===!0&&(Me*=Xe,ke*=Xe,je*=Xe),X.set(Me,ke,je,Xe),xe.equals(X)===!1&&(a.clearColor(Me,ke,je,Xe),xe.copy(X))},reset:function(){F=!1,ie=null,xe.set(-1,0,0,0)}}}function s(){let F=!1,X=null,ie=null,xe=null;return{setTest:function(Me){Me?oe(2929):ce(2929)},setMask:function(Me){X!==Me&&!F&&(a.depthMask(Me),X=Me)},setFunc:function(Me){if(ie!==Me){switch(Me){case NeverDepth:a.depthFunc(512);break;case AlwaysDepth:a.depthFunc(519);break;case LessDepth:a.depthFunc(513);break;case LessEqualDepth:a.depthFunc(515);break;case EqualDepth:a.depthFunc(514);break;case GreaterEqualDepth:a.depthFunc(518);break;case GreaterDepth:a.depthFunc(516);break;case NotEqualDepth:a.depthFunc(517);break;default:a.depthFunc(515)}ie=Me}},setLocked:function(Me){F=Me},setClear:function(Me){xe!==Me&&(a.clearDepth(Me),xe=Me)},reset:function(){F=!1,X=null,ie=null,xe=null}}}function o(){let F=!1,X=null,ie=null,xe=null,Me=null,ke=null,je=null,Xe=null,Qe=null;return{setTest:function($e){F||($e?oe(2960):ce(2960))},setMask:function($e){X!==$e&&!F&&(a.stencilMask($e),X=$e)},setFunc:function($e,Je,et){(ie!==$e||xe!==Je||Me!==et)&&(a.stencilFunc($e,Je,et),ie=$e,xe=Je,Me=et)},setOp:function($e,Je,et){(ke!==$e||je!==Je||Xe!==et)&&(a.stencilOp($e,Je,et),ke=$e,je=Je,Xe=et)},setLocked:function($e){F=$e},setClear:function($e){Qe!==$e&&(a.clearStencil($e),Qe=$e)},reset:function(){F=!1,X=null,ie=null,xe=null,Me=null,ke=null,je=null,Xe=null,Qe=null}}}const l=new r,c=new s,u=new o,h=new WeakMap,d=new WeakMap;let p={},m={},g=new WeakMap,v=[],_=null,y=!1,b=null,x=null,S=null,M=null,E=null,R=null,w=null,A=!1,L=null,V=null,D=null,B=null,O=null;const $=a.getParameter(35661);let W=!1,ne=0;const q=a.getParameter(7938);q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=ne>=1):q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=ne>=2);let Q=null,J={};const ge=a.getParameter(3088),G=a.getParameter(2978),te=new Vector4().fromArray(ge),he=new Vector4().fromArray(G);function N(F,X,ie){const xe=new Uint8Array(4),Me=a.createTexture();a.bindTexture(F,Me),a.texParameteri(F,10241,9728),a.texParameteri(F,10240,9728);for(let ke=0;ke<ie;ke++)a.texImage2D(X+ke,0,6408,1,1,0,6408,5121,xe);return Me}const re={};re[3553]=N(3553,3553,1),re[34067]=N(34067,34069,6),l.setClear(0,0,0,1),c.setClear(1),u.setClear(0),oe(2929),c.setFunc(LessEqualDepth),pe(!1),Ee(CullFaceBack),oe(2884),le(NoBlending);function oe(F){p[F]!==!0&&(a.enable(F),p[F]=!0)}function ce(F){p[F]!==!1&&(a.disable(F),p[F]=!1)}function fe(F,X){return m[F]!==X?(a.bindFramebuffer(F,X),m[F]=X,i&&(F===36009&&(m[36160]=X),F===36160&&(m[36009]=X)),!0):!1}function ve(F,X){let ie=v,xe=!1;if(F)if(ie=g.get(X),ie===void 0&&(ie=[],g.set(X,ie)),F.isWebGLMultipleRenderTargets){const Me=F.texture;if(ie.length!==Me.length||ie[0]!==36064){for(let ke=0,je=Me.length;ke<je;ke++)ie[ke]=36064+ke;ie.length=Me.length,xe=!0}}else ie[0]!==36064&&(ie[0]=36064,xe=!0);else ie[0]!==1029&&(ie[0]=1029,xe=!0);xe&&(t.isWebGL2?a.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Se(F){return _!==F?(a.useProgram(F),_=F,!0):!1}const Y={[AddEquation]:32774,[SubtractEquation]:32778,[ReverseSubtractEquation]:32779};if(i)Y[MinEquation]=32775,Y[MaxEquation]=32776;else{const F=e.get("EXT_blend_minmax");F!==null&&(Y[MinEquation]=F.MIN_EXT,Y[MaxEquation]=F.MAX_EXT)}const ee={[ZeroFactor]:0,[OneFactor]:1,[SrcColorFactor]:768,[SrcAlphaFactor]:770,[SrcAlphaSaturateFactor]:776,[DstColorFactor]:774,[DstAlphaFactor]:772,[OneMinusSrcColorFactor]:769,[OneMinusSrcAlphaFactor]:771,[OneMinusDstColorFactor]:775,[OneMinusDstAlphaFactor]:773};function le(F,X,ie,xe,Me,ke,je,Xe){if(F===NoBlending){y===!0&&(ce(3042),y=!1);return}if(y===!1&&(oe(3042),y=!0),F!==CustomBlending){if(F!==b||Xe!==A){if((x!==AddEquation||E!==AddEquation)&&(a.blendEquation(32774),x=AddEquation,E=AddEquation),Xe)switch(F){case NormalBlending:a.blendFuncSeparate(1,771,1,771);break;case AdditiveBlending:a.blendFunc(1,1);break;case SubtractiveBlending:a.blendFuncSeparate(0,769,0,1);break;case MultiplyBlending:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case NormalBlending:a.blendFuncSeparate(770,771,1,771);break;case AdditiveBlending:a.blendFunc(770,1);break;case SubtractiveBlending:a.blendFuncSeparate(0,769,0,1);break;case MultiplyBlending:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,M=null,R=null,w=null,b=F,A=Xe}return}Me=Me||X,ke=ke||ie,je=je||xe,(X!==x||Me!==E)&&(a.blendEquationSeparate(Y[X],Y[Me]),x=X,E=Me),(ie!==S||xe!==M||ke!==R||je!==w)&&(a.blendFuncSeparate(ee[ie],ee[xe],ee[ke],ee[je]),S=ie,M=xe,R=ke,w=je),b=F,A=!1}function _e(F,X){F.side===DoubleSide?ce(2884):oe(2884);let ie=F.side===BackSide;X&&(ie=!ie),pe(ie),F.blending===NormalBlending&&F.transparent===!1?le(NoBlending):le(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),c.setFunc(F.depthFunc),c.setTest(F.depthTest),c.setMask(F.depthWrite),l.setMask(F.colorWrite);const xe=F.stencilWrite;u.setTest(xe),xe&&(u.setMask(F.stencilWriteMask),u.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),u.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ce(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?oe(32926):ce(32926)}function pe(F){L!==F&&(F?a.frontFace(2304):a.frontFace(2305),L=F)}function Ee(F){F!==CullFaceNone?(oe(2884),F!==V&&(F===CullFaceBack?a.cullFace(1029):F===CullFaceFront?a.cullFace(1028):a.cullFace(1032))):ce(2884),V=F}function be(F){F!==D&&(W&&a.lineWidth(F),D=F)}function Ce(F,X,ie){F?(oe(32823),(B!==X||O!==ie)&&(a.polygonOffset(X,ie),B=X,O=ie)):ce(32823)}function De(F){F?oe(3089):ce(3089)}function Le(F){F===void 0&&(F=33984+$-1),Q!==F&&(a.activeTexture(F),Q=F)}function P(F,X,ie){ie===void 0&&(Q===null?ie=33984+$-1:ie=Q);let xe=J[ie];xe===void 0&&(xe={type:void 0,texture:void 0},J[ie]=xe),(xe.type!==F||xe.texture!==X)&&(Q!==ie&&(a.activeTexture(ie),Q=ie),a.bindTexture(F,X||re[F]),xe.type=F,xe.texture=X)}function T(){const F=J[Q];F!==void 0&&F.type!==void 0&&(a.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function H(){try{a.compressedTexImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{a.compressedTexImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{a.texSubImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{a.texSubImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function I(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function U(){try{a.texStorage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{a.texStorage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{a.texImage2D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{a.texImage3D.apply(a,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(F){te.equals(F)===!1&&(a.scissor(F.x,F.y,F.z,F.w),te.copy(F))}function Ae(F){he.equals(F)===!1&&(a.viewport(F.x,F.y,F.z,F.w),he.copy(F))}function Ve(F,X){let ie=d.get(X);ie===void 0&&(ie=new WeakMap,d.set(X,ie));let xe=ie.get(F);xe===void 0&&(xe=a.getUniformBlockIndex(X,F.name),ie.set(F,xe))}function Ie(F,X){const xe=d.get(X).get(F);h.get(X)!==xe&&(a.uniformBlockBinding(X,xe,F.__bindingPointIndex),h.set(X,xe))}function Fe(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),i===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),p={},Q=null,J={},m={},g=new WeakMap,v=[],_=null,y=!1,b=null,x=null,S=null,M=null,E=null,R=null,w=null,A=!1,L=null,V=null,D=null,B=null,O=null,te.set(0,0,a.canvas.width,a.canvas.height),he.set(0,0,a.canvas.width,a.canvas.height),l.reset(),c.reset(),u.reset()}return{buffers:{color:l,depth:c,stencil:u},enable:oe,disable:ce,bindFramebuffer:fe,drawBuffers:ve,useProgram:Se,setBlending:le,setMaterial:_e,setFlipSided:pe,setCullFace:Ee,setLineWidth:be,setPolygonOffset:Ce,setScissorTest:De,activeTexture:Le,bindTexture:P,unbindTexture:T,compressedTexImage2D:H,compressedTexImage3D:se,texImage2D:ue,texImage3D:we,updateUBOMapping:Ve,uniformBlockBinding:Ie,texStorage2D:U,texStorage3D:de,texSubImage2D:ae,texSubImage3D:me,compressedTexSubImage2D:ye,compressedTexSubImage3D:I,scissor:Te,viewport:Ae,reset:Fe}}function WebGLTextures(a,e,t,i,r,s,o){const l=r.isWebGL2,c=r.maxTextures,u=r.maxCubemapSize,h=r.maxTextureSize,d=r.maxSamples,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,T){return y?new OffscreenCanvas(P,T):createElementNS("canvas")}function x(P,T,H,se){let ae=1;if((P.width>se||P.height>se)&&(ae=se/Math.max(P.width,P.height)),ae<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const me=T?floorPowerOfTwo:Math.floor,ye=me(ae*P.width),I=me(ae*P.height);v===void 0&&(v=b(ye,I));const U=H?b(ye,I):v;return U.width=ye,U.height=I,U.getContext("2d").drawImage(P,0,0,ye,I),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+ye+"x"+I+")."),U}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function S(P){return isPowerOfTwo(P.width)&&isPowerOfTwo(P.height)}function M(P){return l?!1:P.wrapS!==ClampToEdgeWrapping||P.wrapT!==ClampToEdgeWrapping||P.minFilter!==NearestFilter&&P.minFilter!==LinearFilter}function E(P,T){return P.generateMipmaps&&T&&P.minFilter!==NearestFilter&&P.minFilter!==LinearFilter}function R(P){a.generateMipmap(P)}function w(P,T,H,se,ae=!1){if(l===!1)return T;if(P!==null){if(a[P]!==void 0)return a[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let me=T;return T===6403&&(H===5126&&(me=33326),H===5131&&(me=33325),H===5121&&(me=33321)),T===33319&&(H===5126&&(me=33328),H===5131&&(me=33327),H===5121&&(me=33323)),T===6408&&(H===5126&&(me=34836),H===5131&&(me=34842),H===5121&&(me=se===sRGBEncoding&&ae===!1?35907:32856),H===32819&&(me=32854),H===32820&&(me=32855)),(me===33325||me===33326||me===33327||me===33328||me===34842||me===34836)&&e.get("EXT_color_buffer_float"),me}function A(P,T,H){return E(P,H)===!0||P.isFramebufferTexture&&P.minFilter!==NearestFilter&&P.minFilter!==LinearFilter?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function L(P){return P===NearestFilter||P===NearestMipmapNearestFilter||P===NearestMipmapLinearFilter?9728:9729}function V(P){const T=P.target;T.removeEventListener("dispose",V),B(T),T.isVideoTexture&&g.delete(T)}function D(P){const T=P.target;T.removeEventListener("dispose",D),$(T)}function B(P){const T=i.get(P);if(T.__webglInit===void 0)return;const H=P.source,se=_.get(H);if(se){const ae=se[T.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&O(P),Object.keys(se).length===0&&_.delete(H)}i.remove(P)}function O(P){const T=i.get(P);a.deleteTexture(T.__webglTexture);const H=P.source,se=_.get(H);delete se[T.__cacheKey],o.memory.textures--}function $(P){const T=P.texture,H=i.get(P),se=i.get(T);if(se.__webglTexture!==void 0&&(a.deleteTexture(se.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)a.deleteFramebuffer(H.__webglFramebuffer[ae]),H.__webglDepthbuffer&&a.deleteRenderbuffer(H.__webglDepthbuffer[ae]);else{if(a.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&a.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&a.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ae=0;ae<H.__webglColorRenderbuffer.length;ae++)H.__webglColorRenderbuffer[ae]&&a.deleteRenderbuffer(H.__webglColorRenderbuffer[ae]);H.__webglDepthRenderbuffer&&a.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ae=0,me=T.length;ae<me;ae++){const ye=i.get(T[ae]);ye.__webglTexture&&(a.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(T[ae])}i.remove(T),i.remove(P)}let W=0;function ne(){W=0}function q(){const P=W;return P>=c&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+c),W+=1,P}function Q(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.encoding),T.join()}function J(P,T){const H=i.get(P);if(P.isVideoTexture&&De(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){const se=P.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(H,P,T);return}}t.bindTexture(3553,H.__webglTexture,33984+T)}function ge(P,T){const H=i.get(P);if(P.version>0&&H.__version!==P.version){ce(H,P,T);return}t.bindTexture(35866,H.__webglTexture,33984+T)}function G(P,T){const H=i.get(P);if(P.version>0&&H.__version!==P.version){ce(H,P,T);return}t.bindTexture(32879,H.__webglTexture,33984+T)}function te(P,T){const H=i.get(P);if(P.version>0&&H.__version!==P.version){fe(H,P,T);return}t.bindTexture(34067,H.__webglTexture,33984+T)}const he={[RepeatWrapping]:10497,[ClampToEdgeWrapping]:33071,[MirroredRepeatWrapping]:33648},N={[NearestFilter]:9728,[NearestMipmapNearestFilter]:9984,[NearestMipmapLinearFilter]:9986,[LinearFilter]:9729,[LinearMipmapNearestFilter]:9985,[LinearMipmapLinearFilter]:9987};function re(P,T,H){if(H?(a.texParameteri(P,10242,he[T.wrapS]),a.texParameteri(P,10243,he[T.wrapT]),(P===32879||P===35866)&&a.texParameteri(P,32882,he[T.wrapR]),a.texParameteri(P,10240,N[T.magFilter]),a.texParameteri(P,10241,N[T.minFilter])):(a.texParameteri(P,10242,33071),a.texParameteri(P,10243,33071),(P===32879||P===35866)&&a.texParameteri(P,32882,33071),(T.wrapS!==ClampToEdgeWrapping||T.wrapT!==ClampToEdgeWrapping)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(P,10240,L(T.magFilter)),a.texParameteri(P,10241,L(T.minFilter)),T.minFilter!==NearestFilter&&T.minFilter!==LinearFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===NearestFilter||T.minFilter!==NearestMipmapLinearFilter&&T.minFilter!==LinearMipmapLinearFilter||T.type===FloatType&&e.has("OES_texture_float_linear")===!1||l===!1&&T.type===HalfFloatType&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(a.texParameterf(P,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function oe(P,T){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",V));const se=T.source;let ae=_.get(se);ae===void 0&&(ae={},_.set(se,ae));const me=Q(T);if(me!==P.__cacheKey){ae[me]===void 0&&(ae[me]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ae[me].usedTimes++;const ye=ae[P.__cacheKey];ye!==void 0&&(ae[P.__cacheKey].usedTimes--,ye.usedTimes===0&&O(T)),P.__cacheKey=me,P.__webglTexture=ae[me].texture}return H}function ce(P,T,H){let se=3553;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(se=35866),T.isData3DTexture&&(se=32879);const ae=oe(P,T),me=T.source;t.bindTexture(se,P.__webglTexture,33984+H);const ye=i.get(me);if(me.version!==ye.__version||ae===!0){t.activeTexture(33984+H),a.pixelStorei(37440,T.flipY),a.pixelStorei(37441,T.premultiplyAlpha),a.pixelStorei(3317,T.unpackAlignment),a.pixelStorei(37443,0);const I=M(T)&&S(T.image)===!1;let U=x(T.image,I,!1,h);U=Le(T,U);const de=S(U)||l,ue=s.convert(T.format,T.encoding);let we=s.convert(T.type),Te=w(T.internalFormat,ue,we,T.encoding,T.isVideoTexture);re(se,T,de);let Ae;const Ve=T.mipmaps,Ie=l&&T.isVideoTexture!==!0,Fe=ye.__version===void 0||ae===!0,F=A(T,U,de);if(T.isDepthTexture)Te=6402,l?T.type===FloatType?Te=36012:T.type===UnsignedIntType?Te=33190:T.type===UnsignedInt248Type?Te=35056:Te=33189:T.type===FloatType&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===DepthFormat&&Te===6402&&T.type!==UnsignedShortType&&T.type!==UnsignedIntType&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=UnsignedIntType,we=s.convert(T.type)),T.format===DepthStencilFormat&&Te===6402&&(Te=34041,T.type!==UnsignedInt248Type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=UnsignedInt248Type,we=s.convert(T.type))),Fe&&(Ie?t.texStorage2D(3553,1,Te,U.width,U.height):t.texImage2D(3553,0,Te,U.width,U.height,0,ue,we,null));else if(T.isDataTexture)if(Ve.length>0&&de){Ie&&Fe&&t.texStorage2D(3553,F,Te,Ve[0].width,Ve[0].height);for(let X=0,ie=Ve.length;X<ie;X++)Ae=Ve[X],Ie?t.texSubImage2D(3553,X,0,0,Ae.width,Ae.height,ue,we,Ae.data):t.texImage2D(3553,X,Te,Ae.width,Ae.height,0,ue,we,Ae.data);T.generateMipmaps=!1}else Ie?(Fe&&t.texStorage2D(3553,F,Te,U.width,U.height),t.texSubImage2D(3553,0,0,0,U.width,U.height,ue,we,U.data)):t.texImage2D(3553,0,Te,U.width,U.height,0,ue,we,U.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ie&&Fe&&t.texStorage3D(35866,F,Te,Ve[0].width,Ve[0].height,U.depth);for(let X=0,ie=Ve.length;X<ie;X++)Ae=Ve[X],T.format!==RGBAFormat?ue!==null?Ie?t.compressedTexSubImage3D(35866,X,0,0,0,Ae.width,Ae.height,U.depth,ue,Ae.data,0,0):t.compressedTexImage3D(35866,X,Te,Ae.width,Ae.height,U.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?t.texSubImage3D(35866,X,0,0,0,Ae.width,Ae.height,U.depth,ue,we,Ae.data):t.texImage3D(35866,X,Te,Ae.width,Ae.height,U.depth,0,ue,we,Ae.data)}else{Ie&&Fe&&t.texStorage2D(3553,F,Te,Ve[0].width,Ve[0].height);for(let X=0,ie=Ve.length;X<ie;X++)Ae=Ve[X],T.format!==RGBAFormat?ue!==null?Ie?t.compressedTexSubImage2D(3553,X,0,0,Ae.width,Ae.height,ue,Ae.data):t.compressedTexImage2D(3553,X,Te,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?t.texSubImage2D(3553,X,0,0,Ae.width,Ae.height,ue,we,Ae.data):t.texImage2D(3553,X,Te,Ae.width,Ae.height,0,ue,we,Ae.data)}else if(T.isDataArrayTexture)Ie?(Fe&&t.texStorage3D(35866,F,Te,U.width,U.height,U.depth),t.texSubImage3D(35866,0,0,0,0,U.width,U.height,U.depth,ue,we,U.data)):t.texImage3D(35866,0,Te,U.width,U.height,U.depth,0,ue,we,U.data);else if(T.isData3DTexture)Ie?(Fe&&t.texStorage3D(32879,F,Te,U.width,U.height,U.depth),t.texSubImage3D(32879,0,0,0,0,U.width,U.height,U.depth,ue,we,U.data)):t.texImage3D(32879,0,Te,U.width,U.height,U.depth,0,ue,we,U.data);else if(T.isFramebufferTexture){if(Fe)if(Ie)t.texStorage2D(3553,F,Te,U.width,U.height);else{let X=U.width,ie=U.height;for(let xe=0;xe<F;xe++)t.texImage2D(3553,xe,Te,X,ie,0,ue,we,null),X>>=1,ie>>=1}}else if(Ve.length>0&&de){Ie&&Fe&&t.texStorage2D(3553,F,Te,Ve[0].width,Ve[0].height);for(let X=0,ie=Ve.length;X<ie;X++)Ae=Ve[X],Ie?t.texSubImage2D(3553,X,0,0,ue,we,Ae):t.texImage2D(3553,X,Te,ue,we,Ae);T.generateMipmaps=!1}else Ie?(Fe&&t.texStorage2D(3553,F,Te,U.width,U.height),t.texSubImage2D(3553,0,0,0,ue,we,U)):t.texImage2D(3553,0,Te,ue,we,U);E(T,de)&&R(se),ye.__version=me.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function fe(P,T,H){if(T.image.length!==6)return;const se=oe(P,T),ae=T.source;t.bindTexture(34067,P.__webglTexture,33984+H);const me=i.get(ae);if(ae.version!==me.__version||se===!0){t.activeTexture(33984+H),a.pixelStorei(37440,T.flipY),a.pixelStorei(37441,T.premultiplyAlpha),a.pixelStorei(3317,T.unpackAlignment),a.pixelStorei(37443,0);const ye=T.isCompressedTexture||T.image[0].isCompressedTexture,I=T.image[0]&&T.image[0].isDataTexture,U=[];for(let X=0;X<6;X++)!ye&&!I?U[X]=x(T.image[X],!1,!0,u):U[X]=I?T.image[X].image:T.image[X],U[X]=Le(T,U[X]);const de=U[0],ue=S(de)||l,we=s.convert(T.format,T.encoding),Te=s.convert(T.type),Ae=w(T.internalFormat,we,Te,T.encoding),Ve=l&&T.isVideoTexture!==!0,Ie=me.__version===void 0||se===!0;let Fe=A(T,de,ue);re(34067,T,ue);let F;if(ye){Ve&&Ie&&t.texStorage2D(34067,Fe,Ae,de.width,de.height);for(let X=0;X<6;X++){F=U[X].mipmaps;for(let ie=0;ie<F.length;ie++){const xe=F[ie];T.format!==RGBAFormat?we!==null?Ve?t.compressedTexSubImage2D(34069+X,ie,0,0,xe.width,xe.height,we,xe.data):t.compressedTexImage2D(34069+X,ie,Ae,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(34069+X,ie,0,0,xe.width,xe.height,we,Te,xe.data):t.texImage2D(34069+X,ie,Ae,xe.width,xe.height,0,we,Te,xe.data)}}}else{F=T.mipmaps,Ve&&Ie&&(F.length>0&&Fe++,t.texStorage2D(34067,Fe,Ae,U[0].width,U[0].height));for(let X=0;X<6;X++)if(I){Ve?t.texSubImage2D(34069+X,0,0,0,U[X].width,U[X].height,we,Te,U[X].data):t.texImage2D(34069+X,0,Ae,U[X].width,U[X].height,0,we,Te,U[X].data);for(let ie=0;ie<F.length;ie++){const Me=F[ie].image[X].image;Ve?t.texSubImage2D(34069+X,ie+1,0,0,Me.width,Me.height,we,Te,Me.data):t.texImage2D(34069+X,ie+1,Ae,Me.width,Me.height,0,we,Te,Me.data)}}else{Ve?t.texSubImage2D(34069+X,0,0,0,we,Te,U[X]):t.texImage2D(34069+X,0,Ae,we,Te,U[X]);for(let ie=0;ie<F.length;ie++){const xe=F[ie];Ve?t.texSubImage2D(34069+X,ie+1,0,0,we,Te,xe.image[X]):t.texImage2D(34069+X,ie+1,Ae,we,Te,xe.image[X])}}}E(T,ue)&&R(34067),me.__version=ae.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ve(P,T,H,se,ae){const me=s.convert(H.format,H.encoding),ye=s.convert(H.type),I=w(H.internalFormat,me,ye,H.encoding);i.get(T).__hasExternalTextures||(ae===32879||ae===35866?t.texImage3D(ae,0,I,T.width,T.height,T.depth,0,me,ye,null):t.texImage2D(ae,0,I,T.width,T.height,0,me,ye,null)),t.bindFramebuffer(36160,P),Ce(T)?p.framebufferTexture2DMultisampleEXT(36160,se,ae,i.get(H).__webglTexture,0,be(T)):(ae===3553||ae>=34069&&ae<=34074)&&a.framebufferTexture2D(36160,se,ae,i.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function Se(P,T,H){if(a.bindRenderbuffer(36161,P),T.depthBuffer&&!T.stencilBuffer){let se=33189;if(H||Ce(T)){const ae=T.depthTexture;ae&&ae.isDepthTexture&&(ae.type===FloatType?se=36012:ae.type===UnsignedIntType&&(se=33190));const me=be(T);Ce(T)?p.renderbufferStorageMultisampleEXT(36161,me,se,T.width,T.height):a.renderbufferStorageMultisample(36161,me,se,T.width,T.height)}else a.renderbufferStorage(36161,se,T.width,T.height);a.framebufferRenderbuffer(36160,36096,36161,P)}else if(T.depthBuffer&&T.stencilBuffer){const se=be(T);H&&Ce(T)===!1?a.renderbufferStorageMultisample(36161,se,35056,T.width,T.height):Ce(T)?p.renderbufferStorageMultisampleEXT(36161,se,35056,T.width,T.height):a.renderbufferStorage(36161,34041,T.width,T.height),a.framebufferRenderbuffer(36160,33306,36161,P)}else{const se=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ae=0;ae<se.length;ae++){const me=se[ae],ye=s.convert(me.format,me.encoding),I=s.convert(me.type),U=w(me.internalFormat,ye,I,me.encoding),de=be(T);H&&Ce(T)===!1?a.renderbufferStorageMultisample(36161,de,U,T.width,T.height):Ce(T)?p.renderbufferStorageMultisampleEXT(36161,de,U,T.width,T.height):a.renderbufferStorage(36161,U,T.width,T.height)}}a.bindRenderbuffer(36161,null)}function Y(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),J(T.depthTexture,0);const se=i.get(T.depthTexture).__webglTexture,ae=be(T);if(T.depthTexture.format===DepthFormat)Ce(T)?p.framebufferTexture2DMultisampleEXT(36160,36096,3553,se,0,ae):a.framebufferTexture2D(36160,36096,3553,se,0);else if(T.depthTexture.format===DepthStencilFormat)Ce(T)?p.framebufferTexture2DMultisampleEXT(36160,33306,3553,se,0,ae):a.framebufferTexture2D(36160,33306,3553,se,0);else throw new Error("Unknown depthTexture format")}function ee(P){const T=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Y(T.__webglFramebuffer,P)}else if(H){T.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(36160,T.__webglFramebuffer[se]),T.__webglDepthbuffer[se]=a.createRenderbuffer(),Se(T.__webglDepthbuffer[se],P,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=a.createRenderbuffer(),Se(T.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function le(P,T,H){const se=i.get(P);T!==void 0&&ve(se.__webglFramebuffer,P,P.texture,36064,3553),H!==void 0&&ee(P)}function _e(P){const T=P.texture,H=i.get(P),se=i.get(T);P.addEventListener("dispose",D),P.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=a.createTexture()),se.__version=T.version,o.memory.textures++);const ae=P.isWebGLCubeRenderTarget===!0,me=P.isWebGLMultipleRenderTargets===!0,ye=S(P)||l;if(ae){H.__webglFramebuffer=[];for(let I=0;I<6;I++)H.__webglFramebuffer[I]=a.createFramebuffer()}else{if(H.__webglFramebuffer=a.createFramebuffer(),me)if(r.drawBuffers){const I=P.texture;for(let U=0,de=I.length;U<de;U++){const ue=i.get(I[U]);ue.__webglTexture===void 0&&(ue.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&P.samples>0&&Ce(P)===!1){const I=me?T:[T];H.__webglMultisampledFramebuffer=a.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let U=0;U<I.length;U++){const de=I[U];H.__webglColorRenderbuffer[U]=a.createRenderbuffer(),a.bindRenderbuffer(36161,H.__webglColorRenderbuffer[U]);const ue=s.convert(de.format,de.encoding),we=s.convert(de.type),Te=w(de.internalFormat,ue,we,de.encoding,P.isXRRenderTarget===!0),Ae=be(P);a.renderbufferStorageMultisample(36161,Ae,Te,P.width,P.height),a.framebufferRenderbuffer(36160,36064+U,36161,H.__webglColorRenderbuffer[U])}a.bindRenderbuffer(36161,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=a.createRenderbuffer(),Se(H.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}}if(ae){t.bindTexture(34067,se.__webglTexture),re(34067,T,ye);for(let I=0;I<6;I++)ve(H.__webglFramebuffer[I],P,T,36064,34069+I);E(T,ye)&&R(34067),t.unbindTexture()}else if(me){const I=P.texture;for(let U=0,de=I.length;U<de;U++){const ue=I[U],we=i.get(ue);t.bindTexture(3553,we.__webglTexture),re(3553,ue,ye),ve(H.__webglFramebuffer,P,ue,36064+U,3553),E(ue,ye)&&R(3553)}t.unbindTexture()}else{let I=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(l?I=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(I,se.__webglTexture),re(I,T,ye),ve(H.__webglFramebuffer,P,T,36064,I),E(T,ye)&&R(I),t.unbindTexture()}P.depthBuffer&&ee(P)}function pe(P){const T=S(P)||l,H=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let se=0,ae=H.length;se<ae;se++){const me=H[se];if(E(me,T)){const ye=P.isWebGLCubeRenderTarget?34067:3553,I=i.get(me).__webglTexture;t.bindTexture(ye,I),R(ye),t.unbindTexture()}}}function Ee(P){if(l&&P.samples>0&&Ce(P)===!1){const T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],H=P.width,se=P.height;let ae=16384;const me=[],ye=P.stencilBuffer?33306:36096,I=i.get(P),U=P.isWebGLMultipleRenderTargets===!0;if(U)for(let de=0;de<T.length;de++)t.bindFramebuffer(36160,I.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,I.__webglFramebuffer),a.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,I.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,I.__webglFramebuffer);for(let de=0;de<T.length;de++){me.push(36064+de),P.depthBuffer&&me.push(ye);const ue=I.__ignoreDepthValues!==void 0?I.__ignoreDepthValues:!1;if(ue===!1&&(P.depthBuffer&&(ae|=256),P.stencilBuffer&&(ae|=1024)),U&&a.framebufferRenderbuffer(36008,36064,36161,I.__webglColorRenderbuffer[de]),ue===!0&&(a.invalidateFramebuffer(36008,[ye]),a.invalidateFramebuffer(36009,[ye])),U){const we=i.get(T[de]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,we,0)}a.blitFramebuffer(0,0,H,se,0,0,H,se,ae,9728),m&&a.invalidateFramebuffer(36008,me)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),U)for(let de=0;de<T.length;de++){t.bindFramebuffer(36160,I.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+de,36161,I.__webglColorRenderbuffer[de]);const ue=i.get(T[de]).__webglTexture;t.bindFramebuffer(36160,I.__webglFramebuffer),a.framebufferTexture2D(36009,36064+de,3553,ue,0)}t.bindFramebuffer(36009,I.__webglMultisampledFramebuffer)}}function be(P){return Math.min(d,P.samples)}function Ce(P){const T=i.get(P);return l&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function De(P){const T=o.render.frame;g.get(P)!==T&&(g.set(P,T),P.update())}function Le(P,T){const H=P.encoding,se=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===_SRGBAFormat||H!==LinearEncoding&&(H===sRGBEncoding?l===!1?e.has("EXT_sRGB")===!0&&se===RGBAFormat?(P.format=_SRGBAFormat,P.minFilter=LinearFilter,P.generateMipmaps=!1):T=ImageUtils.sRGBToLinear(T):(se!==RGBAFormat||ae!==UnsignedByteType)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),T}this.allocateTextureUnit=q,this.resetTextureUnits=ne,this.setTexture2D=J,this.setTexture2DArray=ge,this.setTexture3D=G,this.setTextureCube=te,this.rebindTextures=le,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Ce}function WebGLUtils(a,e,t){const i=t.isWebGL2;function r(s,o=null){let l;if(s===UnsignedByteType)return 5121;if(s===UnsignedShort4444Type)return 32819;if(s===UnsignedShort5551Type)return 32820;if(s===ByteType)return 5120;if(s===ShortType)return 5122;if(s===UnsignedShortType)return 5123;if(s===IntType)return 5124;if(s===UnsignedIntType)return 5125;if(s===FloatType)return 5126;if(s===HalfFloatType)return i?5131:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(s===AlphaFormat)return 6406;if(s===RGBAFormat)return 6408;if(s===LuminanceFormat)return 6409;if(s===LuminanceAlphaFormat)return 6410;if(s===DepthFormat)return 6402;if(s===DepthStencilFormat)return 34041;if(s===_SRGBAFormat)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(s===RedFormat)return 6403;if(s===RedIntegerFormat)return 36244;if(s===RGFormat)return 33319;if(s===RGIntegerFormat)return 33320;if(s===RGBAIntegerFormat)return 36249;if(s===RGB_S3TC_DXT1_Format||s===RGBA_S3TC_DXT1_Format||s===RGBA_S3TC_DXT3_Format||s===RGBA_S3TC_DXT5_Format)if(o===sRGBEncoding)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===RGB_S3TC_DXT1_Format)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===RGBA_S3TC_DXT1_Format)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===RGBA_S3TC_DXT3_Format)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===RGBA_S3TC_DXT5_Format)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===RGB_S3TC_DXT1_Format)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===RGBA_S3TC_DXT1_Format)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===RGBA_S3TC_DXT3_Format)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===RGBA_S3TC_DXT5_Format)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===RGB_PVRTC_4BPPV1_Format||s===RGB_PVRTC_2BPPV1_Format||s===RGBA_PVRTC_4BPPV1_Format||s===RGBA_PVRTC_2BPPV1_Format)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===RGB_PVRTC_4BPPV1_Format)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===RGB_PVRTC_2BPPV1_Format)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===RGBA_PVRTC_4BPPV1_Format)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===RGBA_PVRTC_2BPPV1_Format)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===RGB_ETC1_Format)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===RGB_ETC2_Format||s===RGBA_ETC2_EAC_Format)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===RGB_ETC2_Format)return o===sRGBEncoding?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===RGBA_ETC2_EAC_Format)return o===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===RGBA_ASTC_4x4_Format||s===RGBA_ASTC_5x4_Format||s===RGBA_ASTC_5x5_Format||s===RGBA_ASTC_6x5_Format||s===RGBA_ASTC_6x6_Format||s===RGBA_ASTC_8x5_Format||s===RGBA_ASTC_8x6_Format||s===RGBA_ASTC_8x8_Format||s===RGBA_ASTC_10x5_Format||s===RGBA_ASTC_10x6_Format||s===RGBA_ASTC_10x8_Format||s===RGBA_ASTC_10x10_Format||s===RGBA_ASTC_12x10_Format||s===RGBA_ASTC_12x12_Format)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===RGBA_ASTC_4x4_Format)return o===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===RGBA_ASTC_5x4_Format)return o===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===RGBA_ASTC_5x5_Format)return o===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===RGBA_ASTC_6x5_Format)return o===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===RGBA_ASTC_6x6_Format)return o===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===RGBA_ASTC_8x5_Format)return o===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===RGBA_ASTC_8x6_Format)return o===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===RGBA_ASTC_8x8_Format)return o===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===RGBA_ASTC_10x5_Format)return o===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===RGBA_ASTC_10x6_Format)return o===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===RGBA_ASTC_10x8_Format)return o===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===RGBA_ASTC_10x10_Format)return o===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===RGBA_ASTC_12x10_Format)return o===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===RGBA_ASTC_12x12_Format)return o===sRGBEncoding?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===RGBA_BPTC_Format)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===RGBA_BPTC_Format)return o===sRGBEncoding?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===RED_RGTC1_Format||s===SIGNED_RED_RGTC1_Format||s===RED_GREEN_RGTC2_Format||s===SIGNED_RED_GREEN_RGTC2_Format)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===RGBA_BPTC_Format)return l.COMPRESSED_RED_RGTC1_EXT;if(s===SIGNED_RED_RGTC1_Format)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===RED_GREEN_RGTC2_Format)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===SIGNED_RED_GREEN_RGTC2_Format)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===UnsignedInt248Type?i?34042:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:r}}class ArrayCamera extends PerspectiveCamera{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Group extends Object3D{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _moveEvent={type:"move"};class WebXRController{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Group,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Group,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Vector3,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Vector3),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Group,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Vector3,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Vector3),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const _=t.getJointPose(v,i),y=this._getHandJoint(u,v);_!==null&&(y.matrix.fromArray(_.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=_.radius),y.visible=_!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],p=h.position.distanceTo(d.position),m=.02,g=.005;u.inputState.pinching&&p>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(_moveEvent)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Group;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class DepthTexture extends Texture{constructor(e,t,i,r,s,o,l,c,u,h){if(h=h!==void 0?h:DepthFormat,h!==DepthFormat&&h!==DepthStencilFormat)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===DepthFormat&&(i=UnsignedIntType),i===void 0&&h===DepthStencilFormat&&(i=UnsignedInt248Type),super(null,r,s,o,l,c,h,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:NearestFilter,this.minFilter=c!==void 0?c:NearestFilter,this.flipY=!1,this.generateMipmaps=!1}}class WebXRManager extends EventDispatcher{constructor(e,t){super();const i=this;let r=null,s=1,o=null,l="local-floor",c=1,u=null,h=null,d=null,p=null,m=null,g=null;const v=t.getContextAttributes();let _=null,y=null;const b=[],x=[],S=new Set,M=new Map,E=new PerspectiveCamera;E.layers.enable(1),E.viewport=new Vector4;const R=new PerspectiveCamera;R.layers.enable(2),R.viewport=new Vector4;const w=[E,R],A=new ArrayCamera;A.layers.enable(1),A.layers.enable(2);let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let te=b[G];return te===void 0&&(te=new WebXRController,b[G]=te),te.getTargetRaySpace()},this.getControllerGrip=function(G){let te=b[G];return te===void 0&&(te=new WebXRController,b[G]=te),te.getGripSpace()},this.getHand=function(G){let te=b[G];return te===void 0&&(te=new WebXRController,b[G]=te),te.getHandSpace()};function D(G){const te=x.indexOf(G.inputSource);if(te===-1)return;const he=b[te];he!==void 0&&he.dispatchEvent({type:G.type,data:G.inputSource})}function B(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",O);for(let G=0;G<b.length;G++){const te=x[G];te!==null&&(x[G]=null,b[G].disconnect(te))}L=null,V=null,e.setRenderTarget(_),m=null,p=null,d=null,r=null,y=null,ge.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){l=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",B),r.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:m}),y=new WebGLRenderTarget(m.framebufferWidth,m.framebufferHeight,{format:RGBAFormat,type:UnsignedByteType,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let te=null,he=null,N=null;v.depth&&(N=v.stencil?35056:33190,te=v.stencil?DepthStencilFormat:DepthFormat,he=v.stencil?UnsignedInt248Type:UnsignedIntType);const re={colorFormat:32856,depthFormat:N,scaleFactor:s};d=new XRWebGLBinding(r,t),p=d.createProjectionLayer(re),r.updateRenderState({layers:[p]}),y=new WebGLRenderTarget(p.textureWidth,p.textureHeight,{format:RGBAFormat,type:UnsignedByteType,depthTexture:new DepthTexture(p.textureWidth,p.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const oe=e.properties.get(y);oe.__ignoreDepthValues=p.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await r.requestReferenceSpace(l),ge.setContext(r),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function O(G){for(let te=0;te<G.removed.length;te++){const he=G.removed[te],N=x.indexOf(he);N>=0&&(x[N]=null,b[N].disconnect(he))}for(let te=0;te<G.added.length;te++){const he=G.added[te];let N=x.indexOf(he);if(N===-1){for(let oe=0;oe<b.length;oe++)if(oe>=x.length){x.push(he),N=oe;break}else if(x[oe]===null){x[oe]=he,N=oe;break}if(N===-1)break}const re=b[N];re&&re.connect(he)}}const $=new Vector3,W=new Vector3;function ne(G,te,he){$.setFromMatrixPosition(te.matrixWorld),W.setFromMatrixPosition(he.matrixWorld);const N=$.distanceTo(W),re=te.projectionMatrix.elements,oe=he.projectionMatrix.elements,ce=re[14]/(re[10]-1),fe=re[14]/(re[10]+1),ve=(re[9]+1)/re[5],Se=(re[9]-1)/re[5],Y=(re[8]-1)/re[0],ee=(oe[8]+1)/oe[0],le=ce*Y,_e=ce*ee,pe=N/(-Y+ee),Ee=pe*-Y;te.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ee),G.translateZ(pe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const be=ce+pe,Ce=fe+pe,De=le-Ee,Le=_e+(N-Ee),P=ve*fe/Ce*be,T=Se*fe/Ce*be;G.projectionMatrix.makePerspective(De,Le,P,T,be,Ce)}function q(G,te){te===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(te.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;A.near=R.near=E.near=G.near,A.far=R.far=E.far=G.far,(L!==A.near||V!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),L=A.near,V=A.far);const te=G.parent,he=A.cameras;q(A,te);for(let re=0;re<he.length;re++)q(he[re],te);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),G.matrix.copy(A.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale);const N=G.children;for(let re=0,oe=N.length;re<oe;re++)N[re].updateMatrixWorld(!0);he.length===2?ne(A,E,R):A.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(G){c=G,p!==null&&(p.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.getPlanes=function(){return S};let Q=null;function J(G,te){if(h=te.getViewerPose(u||o),g=te,h!==null){const he=h.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let N=!1;he.length!==A.cameras.length&&(A.cameras.length=0,N=!0);for(let re=0;re<he.length;re++){const oe=he[re];let ce=null;if(m!==null)ce=m.getViewport(oe);else{const ve=d.getViewSubImage(p,oe);ce=ve.viewport,re===0&&(e.setRenderTargetTextures(y,ve.colorTexture,p.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(y))}let fe=w[re];fe===void 0&&(fe=new PerspectiveCamera,fe.layers.enable(re),fe.viewport=new Vector4,w[re]=fe),fe.matrix.fromArray(oe.transform.matrix),fe.projectionMatrix.fromArray(oe.projectionMatrix),fe.viewport.set(ce.x,ce.y,ce.width,ce.height),re===0&&A.matrix.copy(fe.matrix),N===!0&&A.cameras.push(fe)}}for(let he=0;he<b.length;he++){const N=x[he],re=b[he];N!==null&&re!==void 0&&re.update(N,te,u||o)}if(Q&&Q(G,te),te.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:te.detectedPlanes});let he=null;for(const N of S)te.detectedPlanes.has(N)||(he===null&&(he=[]),he.push(N));if(he!==null)for(const N of he)S.delete(N),M.delete(N),i.dispatchEvent({type:"planeremoved",data:N});for(const N of te.detectedPlanes)if(!S.has(N))S.add(N),M.set(N,te.lastChangedTime),i.dispatchEvent({type:"planeadded",data:N});else{const re=M.get(N);N.lastChangedTime>re&&(M.set(N,N.lastChangedTime),i.dispatchEvent({type:"planechanged",data:N}))}}g=null}const ge=new WebGLAnimation;ge.setAnimationLoop(J),this.setAnimationLoop=function(G){Q=G},this.dispose=function(){}}}function WebGLMaterials(a,e){function t(v,_){_.color.getRGB(v.fogColor.value,getUnlitUniformColorSpace(a)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function i(v,_,y,b,x){_.isMeshBasicMaterial||_.isMeshLambertMaterial?r(v,_):_.isMeshToonMaterial?(r(v,_),h(v,_)):_.isMeshPhongMaterial?(r(v,_),u(v,_)):_.isMeshStandardMaterial?(r(v,_),d(v,_),_.isMeshPhysicalMaterial&&p(v,_,x)):_.isMeshMatcapMaterial?(r(v,_),m(v,_)):_.isMeshDepthMaterial?r(v,_):_.isMeshDistanceMaterial?(r(v,_),g(v,_)):_.isMeshNormalMaterial?r(v,_):_.isLineBasicMaterial?(s(v,_),_.isLineDashedMaterial&&o(v,_)):_.isPointsMaterial?l(v,_,y,b):_.isSpriteMaterial?c(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map),_.alphaMap&&(v.alphaMap.value=_.alphaMap),_.bumpMap&&(v.bumpMap.value=_.bumpMap,v.bumpScale.value=_.bumpScale,_.side===BackSide&&(v.bumpScale.value*=-1)),_.displacementMap&&(v.displacementMap.value=_.displacementMap,v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap),_.normalMap&&(v.normalMap.value=_.normalMap,v.normalScale.value.copy(_.normalScale),_.side===BackSide&&v.normalScale.value.negate()),_.specularMap&&(v.specularMap.value=_.specularMap),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const y=e.get(_).envMap;if(y&&(v.envMap.value=y,v.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap){v.lightMap.value=_.lightMap;const S=a.useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=_.lightMapIntensity*S}_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity);let b;_.map?b=_.map:_.specularMap?b=_.specularMap:_.displacementMap?b=_.displacementMap:_.normalMap?b=_.normalMap:_.bumpMap?b=_.bumpMap:_.roughnessMap?b=_.roughnessMap:_.metalnessMap?b=_.metalnessMap:_.alphaMap?b=_.alphaMap:_.emissiveMap?b=_.emissiveMap:_.clearcoatMap?b=_.clearcoatMap:_.clearcoatNormalMap?b=_.clearcoatNormalMap:_.clearcoatRoughnessMap?b=_.clearcoatRoughnessMap:_.iridescenceMap?b=_.iridescenceMap:_.iridescenceThicknessMap?b=_.iridescenceThicknessMap:_.specularIntensityMap?b=_.specularIntensityMap:_.specularColorMap?b=_.specularColorMap:_.transmissionMap?b=_.transmissionMap:_.thicknessMap?b=_.thicknessMap:_.sheenColorMap?b=_.sheenColorMap:_.sheenRoughnessMap&&(b=_.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),v.uvTransform.value.copy(b.matrix));let x;_.aoMap?x=_.aoMap:_.lightMap&&(x=_.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),v.uv2Transform.value.copy(x.matrix))}function s(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity}function o(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function l(v,_,y,b){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*y,v.scale.value=b*.5,_.map&&(v.map.value=_.map),_.alphaMap&&(v.alphaMap.value=_.alphaMap),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);let x;_.map?x=_.map:_.alphaMap&&(x=_.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),v.uvTransform.value.copy(x.matrix))}function c(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map),_.alphaMap&&(v.alphaMap.value=_.alphaMap),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);let y;_.map?y=_.map:_.alphaMap&&(y=_.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),v.uvTransform.value.copy(y.matrix))}function u(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function h(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function d(v,_){v.roughness.value=_.roughness,v.metalness.value=_.metalness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap),_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap),e.get(_).envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function p(v,_,y){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap)),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap),_.clearcoatNormalMap&&(v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),v.clearcoatNormalMap.value=_.clearcoatNormalMap,_.side===BackSide&&v.clearcoatNormalScale.value.negate())),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap)),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=y.texture,v.transmissionSamplerSize.value.set(y.width,y.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap)}function m(v,_){_.matcap&&(v.matcap.value=_.matcap)}function g(v,_){v.referencePosition.value.copy(_.referencePosition),v.nearDistance.value=_.nearDistance,v.farDistance.value=_.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function WebGLUniformsGroups(a,e,t,i){let r={},s={},o=[];const l=t.isWebGL2?a.getParameter(35375):0;function c(b,x){const S=x.program;i.uniformBlockBinding(b,S)}function u(b,x){let S=r[b.id];S===void 0&&(g(b),S=h(b),r[b.id]=S,b.addEventListener("dispose",_));const M=x.program;i.updateUBOMapping(b,M);const E=e.render.frame;s[b.id]!==E&&(p(b),s[b.id]=E)}function h(b){const x=d();b.__bindingPointIndex=x;const S=a.createBuffer(),M=b.__size,E=b.usage;return a.bindBuffer(35345,S),a.bufferData(35345,M,E),a.bindBuffer(35345,null),a.bindBufferBase(35345,x,S),S}function d(){for(let b=0;b<l;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const x=r[b.id],S=b.uniforms,M=b.__cache;a.bindBuffer(35345,x);for(let E=0,R=S.length;E<R;E++){const w=S[E];if(m(w,E,M)===!0){const A=w.__offset,L=Array.isArray(w.value)?w.value:[w.value];let V=0;for(let D=0;D<L.length;D++){const B=L[D],O=v(B);typeof B=="number"?(w.__data[0]=B,a.bufferSubData(35345,A+V,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=B.elements[0],w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=B.elements[0],w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=B.elements[0]):(B.toArray(w.__data,V),V+=O.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,A,w.__data)}}a.bindBuffer(35345,null)}function m(b,x,S){const M=b.value;if(S[x]===void 0){if(typeof M=="number")S[x]=M;else{const E=Array.isArray(M)?M:[M],R=[];for(let w=0;w<E.length;w++)R.push(E[w].clone());S[x]=R}return!0}else if(typeof M=="number"){if(S[x]!==M)return S[x]=M,!0}else{const E=Array.isArray(S[x])?S[x]:[S[x]],R=Array.isArray(M)?M:[M];for(let w=0;w<E.length;w++){const A=E[w];if(A.equals(R[w])===!1)return A.copy(R[w]),!0}}return!1}function g(b){const x=b.uniforms;let S=0;const M=16;let E=0;for(let R=0,w=x.length;R<w;R++){const A=x[R],L={boundary:0,storage:0},V=Array.isArray(A.value)?A.value:[A.value];for(let D=0,B=V.length;D<B;D++){const O=V[D],$=v(O);L.boundary+=$.boundary,L.storage+=$.storage}if(A.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=S,R>0){E=S%M;const D=M-E;E!==0&&D-L.boundary<0&&(S+=M-E,A.__offset=S)}S+=L.storage}return E=S%M,E>0&&(S+=M-E),b.__size=S,b.__cache={},this}function v(b){const x={boundary:0,storage:0};return typeof b=="number"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function _(b){const x=b.target;x.removeEventListener("dispose",_);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),a.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function y(){for(const b in r)a.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:u,dispose:y}}function createCanvasElement(){const a=createElementNS("canvas");return a.style.display="block",a}function WebGLRenderer(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:createCanvasElement(),t=a.context!==void 0?a.context:null,i=a.depth!==void 0?a.depth:!0,r=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,l=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,c=a.powerPreference!==void 0?a.powerPreference:"default",u=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=a.alpha!==void 0?a.alpha:!1;let d=null,p=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=LinearEncoding,this.useLegacyLights=!0,this.toneMapping=NoToneMapping,this.toneMappingExposure=1;const v=this;let _=!1,y=0,b=0,x=null,S=-1,M=null;const E=new Vector4,R=new Vector4;let w=null,A=e.width,L=e.height,V=1,D=null,B=null;const O=new Vector4(0,0,A,L),$=new Vector4(0,0,A,L);let W=!1;const ne=new Frustum;let q=!1,Q=!1,J=null;const ge=new Matrix4,G=new Vector3,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return x===null?V:1}let N=t;function re(C,k){for(let Z=0;Z<C.length;Z++){const z=C[Z],K=e.getContext(z,k);if(K!==null)return K}return null}try{const C={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${REVISION}`),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",Ae,!1),N===null){const k=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&k.shift(),N=re(k,C),N===null)throw re(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let oe,ce,fe,ve,Se,Y,ee,le,_e,pe,Ee,be,Ce,De,Le,P,T,H,se,ae,me,ye,I,U;function de(){oe=new WebGLExtensions(N),ce=new WebGLCapabilities(N,oe,a),oe.init(ce),ye=new WebGLUtils(N,oe,ce),fe=new WebGLState(N,oe,ce),ve=new WebGLInfo,Se=new WebGLProperties,Y=new WebGLTextures(N,oe,fe,Se,ce,ye,ve),ee=new WebGLCubeMaps(v),le=new WebGLCubeUVMaps(v),_e=new WebGLAttributes(N,ce),I=new WebGLBindingStates(N,oe,_e,ce),pe=new WebGLGeometries(N,_e,ve,I),Ee=new WebGLObjects(N,pe,_e,ve),se=new WebGLMorphtargets(N,ce,Y),P=new WebGLClipping(Se),be=new WebGLPrograms(v,ee,le,oe,ce,I,P),Ce=new WebGLMaterials(v,Se),De=new WebGLRenderLists,Le=new WebGLRenderStates(oe,ce),H=new WebGLBackground(v,ee,le,fe,Ee,h,o),T=new WebGLShadowMap(v,Ee,ce),U=new WebGLUniformsGroups(N,ve,ce,fe),ae=new WebGLBufferRenderer(N,oe,ve,ce),me=new WebGLIndexedBufferRenderer(N,oe,ve,ce),ve.programs=be.programs,v.capabilities=ce,v.extensions=oe,v.properties=Se,v.renderLists=De,v.shadowMap=T,v.state=fe,v.info=ve}de();const ue=new WebXRManager(v,N);this.xr=ue,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=oe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=oe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(A,L,!1))},this.getSize=function(C){return C.set(A,L)},this.setSize=function(C,k,Z=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=C,L=k,e.width=Math.floor(C*V),e.height=Math.floor(k*V),Z===!0&&(e.style.width=C+"px",e.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(A*V,L*V).floor()},this.setDrawingBufferSize=function(C,k,Z){A=C,L=k,V=Z,e.width=Math.floor(C*Z),e.height=Math.floor(k*Z),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(O)},this.setViewport=function(C,k,Z,z){C.isVector4?O.set(C.x,C.y,C.z,C.w):O.set(C,k,Z,z),fe.viewport(E.copy(O).multiplyScalar(V).floor())},this.getScissor=function(C){return C.copy($)},this.setScissor=function(C,k,Z,z){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,k,Z,z),fe.scissor(R.copy($).multiplyScalar(V).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(C){fe.setScissorTest(W=C)},this.setOpaqueSort=function(C){D=C},this.setTransparentSort=function(C){B=C},this.getClearColor=function(C){return C.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(C=!0,k=!0,Z=!0){let z=0;C&&(z|=16384),k&&(z|=256),Z&&(z|=1024),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",Ae,!1),De.dispose(),Le.dispose(),Se.dispose(),ee.dispose(),le.dispose(),Ee.dispose(),I.dispose(),U.dispose(),be.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",ie),ue.removeEventListener("sessionend",xe),J&&(J.dispose(),J=null),Me.stop()};function we(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const C=ve.autoReset,k=T.enabled,Z=T.autoUpdate,z=T.needsUpdate,K=T.type;de(),ve.autoReset=C,T.enabled=k,T.autoUpdate=Z,T.needsUpdate=z,T.type=K}function Ae(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ve(C){const k=C.target;k.removeEventListener("dispose",Ve),Ie(k)}function Ie(C){Fe(C),Se.remove(C)}function Fe(C){const k=Se.get(C).programs;k!==void 0&&(k.forEach(function(Z){be.releaseProgram(Z)}),C.isShaderMaterial&&be.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,Z,z,K,Pe){k===null&&(k=te);const Re=K.isMesh&&K.matrixWorld.determinant()<0,Oe=dt(C,k,Z,z,K);fe.setMaterial(z,Re);let Be=Z.index,ze=1;z.wireframe===!0&&(Be=pe.getWireframeAttribute(Z),ze=2);const Ne=Z.drawRange,Ue=Z.attributes.position;let We=Ne.start*ze,Ze=(Ne.start+Ne.count)*ze;Pe!==null&&(We=Math.max(We,Pe.start*ze),Ze=Math.min(Ze,(Pe.start+Pe.count)*ze)),Be!==null?(We=Math.max(We,0),Ze=Math.min(Ze,Be.count)):Ue!=null&&(We=Math.max(We,0),Ze=Math.min(Ze,Ue.count));const tt=Ze-We;if(tt<0||tt===1/0)return;I.setup(K,z,Oe,Z,Be);let nt,He=ae;if(Be!==null&&(nt=_e.get(Be),He=me,He.setIndex(nt)),K.isMesh)z.wireframe===!0?(fe.setLineWidth(z.wireframeLinewidth*he()),He.setMode(1)):He.setMode(4);else if(K.isLine){let Ge=z.linewidth;Ge===void 0&&(Ge=1),fe.setLineWidth(Ge*he()),K.isLineSegments?He.setMode(1):K.isLineLoop?He.setMode(2):He.setMode(3)}else K.isPoints?He.setMode(0):K.isSprite&&He.setMode(4);if(K.isInstancedMesh)He.renderInstances(We,tt,K.count);else if(Z.isInstancedBufferGeometry){const Ge=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,at=Math.min(Z.instanceCount,Ge);He.renderInstances(We,tt,at)}else He.render(We,tt)},this.compile=function(C,k){function Z(z,K,Pe){z.transparent===!0&&z.side===DoubleSide&&z.forceSinglePass===!1?(z.side=BackSide,z.needsUpdate=!0,Je(z,K,Pe),z.side=FrontSide,z.needsUpdate=!0,Je(z,K,Pe),z.side=DoubleSide):Je(z,K,Pe)}p=Le.get(C),p.init(),g.push(p),C.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights(v.useLegacyLights),C.traverse(function(z){const K=z.material;if(K)if(Array.isArray(K))for(let Pe=0;Pe<K.length;Pe++){const Re=K[Pe];Z(Re,C,z)}else Z(K,C,z)}),g.pop(),p=null};let F=null;function X(C){F&&F(C)}function ie(){Me.stop()}function xe(){Me.start()}const Me=new WebGLAnimation;Me.setAnimationLoop(X),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(C){F=C,ue.setAnimationLoop(C),C===null?Me.stop():Me.start()},ue.addEventListener("sessionstart",ie),ue.addEventListener("sessionend",xe),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(k),k=ue.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,k,x),p=Le.get(C,g.length),p.init(),g.push(p),ge.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ne.setFromProjectionMatrix(ge),Q=this.localClippingEnabled,q=P.init(this.clippingPlanes,Q),d=De.get(C,m.length),d.init(),m.push(d),ke(C,k,0,v.sortObjects),d.finish(),v.sortObjects===!0&&d.sort(D,B),q===!0&&P.beginShadows();const Z=p.state.shadowsArray;if(T.render(Z,C,k),q===!0&&P.endShadows(),this.info.autoReset===!0&&this.info.reset(),H.render(d,C),p.setupLights(v.useLegacyLights),k.isArrayCamera){const z=k.cameras;for(let K=0,Pe=z.length;K<Pe;K++){const Re=z[K];je(d,C,Re,Re.viewport)}}else je(d,C,k);x!==null&&(Y.updateMultisampleRenderTarget(x),Y.updateRenderTargetMipmap(x)),C.isScene===!0&&C.onAfterRender(v,C,k),I.resetDefaultState(),S=-1,M=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function ke(C,k,Z,z){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ne.intersectsSprite(C)){z&&G.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ge);const Re=Ee.update(C),Oe=C.material;Oe.visible&&d.push(C,Re,Oe,Z,G.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==ve.render.frame&&(C.skeleton.update(),C.skeleton.frame=ve.render.frame),!C.frustumCulled||ne.intersectsObject(C))){z&&G.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ge);const Re=Ee.update(C),Oe=C.material;if(Array.isArray(Oe)){const Be=Re.groups;for(let ze=0,Ne=Be.length;ze<Ne;ze++){const Ue=Be[ze],We=Oe[Ue.materialIndex];We&&We.visible&&d.push(C,Re,We,Z,G.z,Ue)}}else Oe.visible&&d.push(C,Re,Oe,Z,G.z,null)}}const Pe=C.children;for(let Re=0,Oe=Pe.length;Re<Oe;Re++)ke(Pe[Re],k,Z,z)}function je(C,k,Z,z){const K=C.opaque,Pe=C.transmissive,Re=C.transparent;p.setupLightsView(Z),q===!0&&P.setGlobalState(v.clippingPlanes,Z),Pe.length>0&&Xe(K,k,Z),z&&fe.viewport(E.copy(z)),K.length>0&&Qe(K,k,Z),Pe.length>0&&Qe(Pe,k,Z),Re.length>0&&Qe(Re,k,Z),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Xe(C,k,Z){const z=ce.isWebGL2;J===null&&(J=new WebGLRenderTarget(1024,1024,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?HalfFloatType:UnsignedByteType,minFilter:LinearMipmapLinearFilter,samples:z&&s===!0?4:0}));const K=v.getRenderTarget();v.setRenderTarget(J),v.clear();const Pe=v.toneMapping;v.toneMapping=NoToneMapping,Qe(C,k,Z),v.toneMapping=Pe,Y.updateMultisampleRenderTarget(J),Y.updateRenderTargetMipmap(J),v.setRenderTarget(K)}function Qe(C,k,Z){const z=k.isScene===!0?k.overrideMaterial:null;for(let K=0,Pe=C.length;K<Pe;K++){const Re=C[K],Oe=Re.object,Be=Re.geometry,ze=z===null?Re.material:z,Ne=Re.group;Oe.layers.test(Z.layers)&&$e(Oe,k,Z,Be,ze,Ne)}}function $e(C,k,Z,z,K,Pe){C.onBeforeRender(v,k,Z,z,K,Pe),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(v,k,Z,z,C,Pe),K.transparent===!0&&K.side===DoubleSide&&K.forceSinglePass===!1?(K.side=BackSide,K.needsUpdate=!0,v.renderBufferDirect(Z,k,z,K,C,Pe),K.side=FrontSide,K.needsUpdate=!0,v.renderBufferDirect(Z,k,z,K,C,Pe),K.side=DoubleSide):v.renderBufferDirect(Z,k,z,K,C,Pe),C.onAfterRender(v,k,Z,z,K,Pe)}function Je(C,k,Z){k.isScene!==!0&&(k=te);const z=Se.get(C),K=p.state.lights,Pe=p.state.shadowsArray,Re=K.state.version,Oe=be.getParameters(C,K.state,Pe,k,Z),Be=be.getProgramCacheKey(Oe);let ze=z.programs;z.environment=C.isMeshStandardMaterial?k.environment:null,z.fog=k.fog,z.envMap=(C.isMeshStandardMaterial?le:ee).get(C.envMap||z.environment),ze===void 0&&(C.addEventListener("dispose",Ve),ze=new Map,z.programs=ze);let Ne=ze.get(Be);if(Ne!==void 0){if(z.currentProgram===Ne&&z.lightsStateVersion===Re)return et(C,Oe),Ne}else Oe.uniforms=be.getUniforms(C),C.onBuild(Z,Oe,v),C.onBeforeCompile(Oe,v),Ne=be.acquireProgram(Oe,Be),ze.set(Be,Ne),z.uniforms=Oe.uniforms;const Ue=z.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ue.clippingPlanes=P.uniform),et(C,Oe),z.needsLights=pt(C),z.lightsStateVersion=Re,z.needsLights&&(Ue.ambientLightColor.value=K.state.ambient,Ue.lightProbe.value=K.state.probe,Ue.directionalLights.value=K.state.directional,Ue.directionalLightShadows.value=K.state.directionalShadow,Ue.spotLights.value=K.state.spot,Ue.spotLightShadows.value=K.state.spotShadow,Ue.rectAreaLights.value=K.state.rectArea,Ue.ltc_1.value=K.state.rectAreaLTC1,Ue.ltc_2.value=K.state.rectAreaLTC2,Ue.pointLights.value=K.state.point,Ue.pointLightShadows.value=K.state.pointShadow,Ue.hemisphereLights.value=K.state.hemi,Ue.directionalShadowMap.value=K.state.directionalShadowMap,Ue.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ue.spotShadowMap.value=K.state.spotShadowMap,Ue.spotLightMatrix.value=K.state.spotLightMatrix,Ue.spotLightMap.value=K.state.spotLightMap,Ue.pointShadowMap.value=K.state.pointShadowMap,Ue.pointShadowMatrix.value=K.state.pointShadowMatrix);const We=Ne.getUniforms(),Ze=WebGLUniforms.seqWithValue(We.seq,Ue);return z.currentProgram=Ne,z.uniformsList=Ze,Ne}function et(C,k){const Z=Se.get(C);Z.outputEncoding=k.outputEncoding,Z.instancing=k.instancing,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function dt(C,k,Z,z,K){k.isScene!==!0&&(k=te),Y.resetTextureUnits();const Pe=k.fog,Re=z.isMeshStandardMaterial?k.environment:null,Oe=x===null?v.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:LinearEncoding,Be=(z.isMeshStandardMaterial?le:ee).get(z.envMap||Re),ze=z.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ne=!!z.normalMap&&!!Z.attributes.tangent,Ue=!!Z.morphAttributes.position,We=!!Z.morphAttributes.normal,Ze=!!Z.morphAttributes.color,tt=z.toneMapped?v.toneMapping:NoToneMapping,nt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,He=nt!==void 0?nt.length:0,Ge=Se.get(z),at=p.state.lights;if(q===!0&&(Q===!0||C!==M)){const Ke=C===M&&z.id===S;P.setState(z,C,Ke)}let qe=!1;z.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==at.state.version||Ge.outputEncoding!==Oe||K.isInstancedMesh&&Ge.instancing===!1||!K.isInstancedMesh&&Ge.instancing===!0||K.isSkinnedMesh&&Ge.skinning===!1||!K.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==Be||z.fog===!0&&Ge.fog!==Pe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==P.numPlanes||Ge.numIntersection!==P.numIntersection)||Ge.vertexAlphas!==ze||Ge.vertexTangents!==Ne||Ge.morphTargets!==Ue||Ge.morphNormals!==We||Ge.morphColors!==Ze||Ge.toneMapping!==tt||ce.isWebGL2===!0&&Ge.morphTargetsCount!==He)&&(qe=!0):(qe=!0,Ge.__version=z.version);let it=Ge.currentProgram;qe===!0&&(it=Je(z,k,K));let ut=!1,st=!1,ot=!1;const Ye=it.getUniforms(),rt=Ge.uniforms;if(fe.useProgram(it.program)&&(ut=!0,st=!0,ot=!0),z.id!==S&&(S=z.id,st=!0),ut||M!==C){if(Ye.setValue(N,"projectionMatrix",C.projectionMatrix),ce.logarithmicDepthBuffer&&Ye.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),M!==C&&(M=C,st=!0,ot=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const Ke=Ye.map.cameraPosition;Ke!==void 0&&Ke.setValue(N,G.setFromMatrixPosition(C.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ye.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||K.isSkinnedMesh)&&Ye.setValue(N,"viewMatrix",C.matrixWorldInverse)}if(K.isSkinnedMesh){Ye.setOptional(N,K,"bindMatrix"),Ye.setOptional(N,K,"bindMatrixInverse");const Ke=K.skeleton;Ke&&(ce.floatVertexTextures?(Ke.boneTexture===null&&Ke.computeBoneTexture(),Ye.setValue(N,"boneTexture",Ke.boneTexture,Y),Ye.setValue(N,"boneTextureSize",Ke.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const lt=Z.morphAttributes;if((lt.position!==void 0||lt.normal!==void 0||lt.color!==void 0&&ce.isWebGL2===!0)&&se.update(K,Z,it),(st||Ge.receiveShadow!==K.receiveShadow)&&(Ge.receiveShadow=K.receiveShadow,Ye.setValue(N,"receiveShadow",K.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(rt.envMap.value=Be,rt.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),st&&(Ye.setValue(N,"toneMappingExposure",v.toneMappingExposure),Ge.needsLights&&ft(rt,ot),Pe&&z.fog===!0&&Ce.refreshFogUniforms(rt,Pe),Ce.refreshMaterialUniforms(rt,z,V,L,J),WebGLUniforms.upload(N,Ge.uniformsList,rt,Y)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(WebGLUniforms.upload(N,Ge.uniformsList,rt,Y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ye.setValue(N,"center",K.center),Ye.setValue(N,"modelViewMatrix",K.modelViewMatrix),Ye.setValue(N,"normalMatrix",K.normalMatrix),Ye.setValue(N,"modelMatrix",K.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ke=z.uniformsGroups;for(let ct=0,mt=Ke.length;ct<mt;ct++)if(ce.isWebGL2){const ht=Ke[ct];U.update(ht,it),U.bind(ht,it)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return it}function ft(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function pt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(C,k,Z){Se.get(C.texture).__webglTexture=k,Se.get(C.depthTexture).__webglTexture=Z;const z=Se.get(C);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=Z===void 0,z.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,k){const Z=Se.get(C);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,Z=0){x=C,y=k,b=Z;let z=!0,K=null,Pe=!1,Re=!1;if(C){const Be=Se.get(C);Be.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(36160,null),z=!1):Be.__webglFramebuffer===void 0?Y.setupRenderTarget(C):Be.__hasExternalTextures&&Y.rebindTextures(C,Se.get(C.texture).__webglTexture,Se.get(C.depthTexture).__webglTexture);const ze=C.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Re=!0);const Ne=Se.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(K=Ne[k],Pe=!0):ce.isWebGL2&&C.samples>0&&Y.useMultisampledRTT(C)===!1?K=Se.get(C).__webglMultisampledFramebuffer:K=Ne,E.copy(C.viewport),R.copy(C.scissor),w=C.scissorTest}else E.copy(O).multiplyScalar(V).floor(),R.copy($).multiplyScalar(V).floor(),w=W;if(fe.bindFramebuffer(36160,K)&&ce.drawBuffers&&z&&fe.drawBuffers(C,K),fe.viewport(E),fe.scissor(R),fe.setScissorTest(w),Pe){const Be=Se.get(C.texture);N.framebufferTexture2D(36160,36064,34069+k,Be.__webglTexture,Z)}else if(Re){const Be=Se.get(C.texture),ze=k||0;N.framebufferTextureLayer(36160,36064,Be.__webglTexture,Z||0,ze)}S=-1},this.readRenderTargetPixels=function(C,k,Z,z,K,Pe,Re){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(Oe=Oe[Re]),Oe){fe.bindFramebuffer(36160,Oe);try{const Be=C.texture,ze=Be.format,Ne=Be.type;if(ze!==RGBAFormat&&ye.convert(ze)!==N.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Ne===HalfFloatType&&(oe.has("EXT_color_buffer_half_float")||ce.isWebGL2&&oe.has("EXT_color_buffer_float"));if(Ne!==UnsignedByteType&&ye.convert(Ne)!==N.getParameter(35738)&&!(Ne===FloatType&&(ce.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-z&&Z>=0&&Z<=C.height-K&&N.readPixels(k,Z,z,K,ye.convert(ze),ye.convert(Ne),Pe)}finally{const Be=x!==null?Se.get(x).__webglFramebuffer:null;fe.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(C,k,Z=0){const z=Math.pow(2,-Z),K=Math.floor(k.image.width*z),Pe=Math.floor(k.image.height*z);Y.setTexture2D(k,0),N.copyTexSubImage2D(3553,Z,0,0,C.x,C.y,K,Pe),fe.unbindTexture()},this.copyTextureToTexture=function(C,k,Z,z=0){const K=k.image.width,Pe=k.image.height,Re=ye.convert(Z.format),Oe=ye.convert(Z.type);Y.setTexture2D(Z,0),N.pixelStorei(37440,Z.flipY),N.pixelStorei(37441,Z.premultiplyAlpha),N.pixelStorei(3317,Z.unpackAlignment),k.isDataTexture?N.texSubImage2D(3553,z,C.x,C.y,K,Pe,Re,Oe,k.image.data):k.isCompressedTexture?N.compressedTexSubImage2D(3553,z,C.x,C.y,k.mipmaps[0].width,k.mipmaps[0].height,Re,k.mipmaps[0].data):N.texSubImage2D(3553,z,C.x,C.y,Re,Oe,k.image),z===0&&Z.generateMipmaps&&N.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(C,k,Z,z,K=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=C.max.x-C.min.x+1,Re=C.max.y-C.min.y+1,Oe=C.max.z-C.min.z+1,Be=ye.convert(z.format),ze=ye.convert(z.type);let Ne;if(z.isData3DTexture)Y.setTexture3D(z,0),Ne=32879;else if(z.isDataArrayTexture)Y.setTexture2DArray(z,0),Ne=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(37440,z.flipY),N.pixelStorei(37441,z.premultiplyAlpha),N.pixelStorei(3317,z.unpackAlignment);const Ue=N.getParameter(3314),We=N.getParameter(32878),Ze=N.getParameter(3316),tt=N.getParameter(3315),nt=N.getParameter(32877),He=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;N.pixelStorei(3314,He.width),N.pixelStorei(32878,He.height),N.pixelStorei(3316,C.min.x),N.pixelStorei(3315,C.min.y),N.pixelStorei(32877,C.min.z),Z.isDataTexture||Z.isData3DTexture?N.texSubImage3D(Ne,K,k.x,k.y,k.z,Pe,Re,Oe,Be,ze,He.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ne,K,k.x,k.y,k.z,Pe,Re,Oe,Be,He.data)):N.texSubImage3D(Ne,K,k.x,k.y,k.z,Pe,Re,Oe,Be,ze,He),N.pixelStorei(3314,Ue),N.pixelStorei(32878,We),N.pixelStorei(3316,Ze),N.pixelStorei(3315,tt),N.pixelStorei(32877,nt),K===0&&z.generateMipmaps&&N.generateMipmap(Ne),fe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Y.setTextureCube(C,0):C.isData3DTexture?Y.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Y.setTexture2DArray(C,0):Y.setTexture2D(C,0),fe.unbindTexture()},this.resetState=function(){y=0,b=0,x=null,fe.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(WebGLRenderer.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(a){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!a}}});class WebGL1Renderer extends WebGLRenderer{}WebGL1Renderer.prototype.isWebGL1Renderer=!0;class FogExp2{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Color(e),this.density=t}clone(){return new FogExp2(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class Fog{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Color(e),this.near=t,this.far=i}clone(){return new Fog(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class Scene extends Object3D{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class InterleavedBuffer{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=StaticDrawUsage,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=generateUUID()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=generateUUID()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _vector$6=new Vector3;class InterleavedBufferAttribute{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)_vector$6.fromBufferAttribute(this,t),_vector$6.applyMatrix4(e),this.setXYZ(t,_vector$6.x,_vector$6.y,_vector$6.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_vector$6.fromBufferAttribute(this,t),_vector$6.applyNormalMatrix(e),this.setXYZ(t,_vector$6.x,_vector$6.y,_vector$6.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_vector$6.fromBufferAttribute(this,t),_vector$6.transformDirection(e),this.setXYZ(t,_vector$6.x,_vector$6.y,_vector$6.z);return this}setX(e,t){return this.normalized&&(t=normalize$2(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=normalize$2(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=normalize$2(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=normalize$2(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=denormalize(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=denormalize(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=denormalize(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=denormalize(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=normalize$2(t,this.array),i=normalize$2(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=normalize$2(t,this.array),i=normalize$2(i,this.array),r=normalize$2(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=normalize$2(t,this.array),i=normalize$2(i,this.array),r=normalize$2(r,this.array),s=normalize$2(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new BufferAttribute(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new InterleavedBufferAttribute(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class SpriteMaterial extends Material{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Color(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let _geometry$1;const _intersectPoint=new Vector3,_worldScale=new Vector3,_mvPosition=new Vector3,_alignedPosition=new Vector2,_rotatedPosition=new Vector2,_viewWorldMatrix=new Matrix4,_vA=new Vector3,_vB=new Vector3,_vC=new Vector3,_uvA=new Vector2,_uvB=new Vector2,_uvC=new Vector2;class Sprite extends Object3D{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",_geometry$1===void 0){_geometry$1=new BufferGeometry;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new InterleavedBuffer(t,5);_geometry$1.setIndex([0,1,2,0,2,3]),_geometry$1.setAttribute("position",new InterleavedBufferAttribute(i,3,0,!1)),_geometry$1.setAttribute("uv",new InterleavedBufferAttribute(i,2,3,!1))}this.geometry=_geometry$1,this.material=e!==void 0?e:new SpriteMaterial,this.center=new Vector2(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_worldScale.setFromMatrixScale(this.matrixWorld),_viewWorldMatrix.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_mvPosition.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_worldScale.multiplyScalar(-_mvPosition.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;transformVertex(_vA.set(-.5,-.5,0),_mvPosition,o,_worldScale,r,s),transformVertex(_vB.set(.5,-.5,0),_mvPosition,o,_worldScale,r,s),transformVertex(_vC.set(.5,.5,0),_mvPosition,o,_worldScale,r,s),_uvA.set(0,0),_uvB.set(1,0),_uvC.set(1,1);let l=e.ray.intersectTriangle(_vA,_vB,_vC,!1,_intersectPoint);if(l===null&&(transformVertex(_vB.set(-.5,.5,0),_mvPosition,o,_worldScale,r,s),_uvB.set(0,1),l=e.ray.intersectTriangle(_vA,_vC,_vB,!1,_intersectPoint),l===null))return;const c=e.ray.origin.distanceTo(_intersectPoint);c<e.near||c>e.far||t.push({distance:c,point:_intersectPoint.clone(),uv:Triangle.getUV(_intersectPoint,_vA,_vB,_vC,_uvA,_uvB,_uvC,new Vector2),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function transformVertex(a,e,t,i,r,s){_alignedPosition.subVectors(a,t).addScalar(.5).multiply(i),r!==void 0?(_rotatedPosition.x=s*_alignedPosition.x-r*_alignedPosition.y,_rotatedPosition.y=r*_alignedPosition.x+s*_alignedPosition.y):_rotatedPosition.copy(_alignedPosition),a.copy(e),a.x+=_rotatedPosition.x,a.y+=_rotatedPosition.y,a.applyMatrix4(_viewWorldMatrix)}const _v1$2=new Vector3,_v2$1=new Vector3;class LOD extends Object3D{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let i=0,r=t.length;i<r;i++){const s=t[i];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);const r=this.levels;let s;for(s=0;s<r.length&&!(t<r[s].distance);s++);return r.splice(s,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let i,r;for(i=1,r=t.length;i<r;i++){let s=t[i].distance;if(t[i].object.visible&&(s-=s*t[i].hysteresis),e<s)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){_v1$2.setFromMatrixPosition(this.matrixWorld);const r=e.ray.origin.distanceTo(_v1$2);this.getObjectForDistance(r).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){_v1$2.setFromMatrixPosition(e.matrixWorld),_v2$1.setFromMatrixPosition(this.matrixWorld);const i=_v1$2.distanceTo(_v2$1)/e.zoom;t[0].object.visible=!0;let r,s;for(r=1,s=t.length;r<s;r++){let o=t[r].distance;if(t[r].object.visible&&(o-=o*t[r].hysteresis),i>=o)t[r-1].object.visible=!1,t[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<s;r++)t[r].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const i=this.levels;for(let r=0,s=i.length;r<s;r++){const o=i[r];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const _basePosition=new Vector3,_skinIndex=new Vector4,_skinWeight=new Vector4,_vector$5=new Vector3,_matrix=new Matrix4;class SkinnedMesh extends Mesh{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Matrix4,this.bindMatrixInverse=new Matrix4}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Vector4,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const i=this.skeleton,r=this.geometry;_skinIndex.fromBufferAttribute(r.attributes.skinIndex,e),_skinWeight.fromBufferAttribute(r.attributes.skinWeight,e),_basePosition.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=_skinWeight.getComponent(s);if(o!==0){const l=_skinIndex.getComponent(s);_matrix.multiplyMatrices(i.bones[l].matrixWorld,i.boneInverses[l]),t.addScaledVector(_vector$5.copy(_basePosition).applyMatrix4(_matrix),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Bone extends Object3D{constructor(){super(),this.isBone=!0,this.type="Bone"}}class DataTexture extends Texture{constructor(e=null,t=1,i=1,r,s,o,l,c,u=NearestFilter,h=NearestFilter,d,p){super(null,o,l,c,u,h,r,s,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _offsetMatrix=new Matrix4,_identityMatrix=new Matrix4;class Skeleton{constructor(e=[],t=[]){this.uuid=generateUUID(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Matrix4)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Matrix4;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const l=e[s]?e[s].matrixWorld:_identityMatrix;_offsetMatrix.multiplyMatrices(l,t[s]),_offsetMatrix.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Skeleton(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=ceilPowerOfTwo(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new DataTexture(t,e,e,RGBAFormat,FloatType);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Bone),this.bones.push(o),this.boneInverses.push(new Matrix4().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const l=i[r];e.boneInverses.push(l.toArray())}return e}}class InstancedBufferAttribute extends BufferAttribute{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _instanceLocalMatrix=new Matrix4,_instanceWorldMatrix=new Matrix4,_instanceIntersects=[],_identity=new Matrix4,_mesh=new Mesh;class InstancedMesh extends Mesh{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new InstancedBufferAttribute(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1;for(let r=0;r<i;r++)this.setMatrixAt(r,_identity)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(_mesh.geometry=this.geometry,_mesh.material=this.material,_mesh.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,_instanceLocalMatrix),_instanceWorldMatrix.multiplyMatrices(i,_instanceLocalMatrix),_mesh.matrixWorld=_instanceWorldMatrix,_mesh.raycast(e,_instanceIntersects);for(let o=0,l=_instanceIntersects.length;o<l;o++){const c=_instanceIntersects[o];c.instanceId=s,c.object=this,t.push(c)}_instanceIntersects.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new InstancedBufferAttribute(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class LineBasicMaterial extends Material{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Color(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _start$1=new Vector3,_end$1=new Vector3,_inverseMatrix$1=new Matrix4,_ray$1=new Ray,_sphere$1=new Sphere;class Line extends Object3D{constructor(e=new BufferGeometry,t=new LineBasicMaterial){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)_start$1.fromBufferAttribute(t,r-1),_end$1.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=_start$1.distanceTo(_end$1);e.setAttribute("lineDistance",new Float32BufferAttribute(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_sphere$1.copy(i.boundingSphere),_sphere$1.applyMatrix4(r),_sphere$1.radius+=s,e.ray.intersectsSphere(_sphere$1)===!1)return;_inverseMatrix$1.copy(r).invert(),_ray$1.copy(e.ray).applyMatrix4(_inverseMatrix$1);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=new Vector3,h=new Vector3,d=new Vector3,p=new Vector3,m=this.isLineSegments?2:1,g=i.index,_=i.attributes.position;if(g!==null){const y=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let x=y,S=b-1;x<S;x+=m){const M=g.getX(x),E=g.getX(x+1);if(u.fromBufferAttribute(_,M),h.fromBufferAttribute(_,E),_ray$1.distanceSqToSegment(u,h,p,d)>c)continue;p.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(p);w<e.near||w>e.far||t.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const y=Math.max(0,o.start),b=Math.min(_.count,o.start+o.count);for(let x=y,S=b-1;x<S;x+=m){if(u.fromBufferAttribute(_,x),h.fromBufferAttribute(_,x+1),_ray$1.distanceSqToSegment(u,h,p,d)>c)continue;p.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(p);E<e.near||E>e.far||t.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}const _start=new Vector3,_end=new Vector3;class LineSegments extends Line{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)_start.fromBufferAttribute(t,r),_end.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+_start.distanceTo(_end);e.setAttribute("lineDistance",new Float32BufferAttribute(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class LineLoop extends Line{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class PointsMaterial extends Material{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Color(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _inverseMatrix=new Matrix4,_ray=new Ray,_sphere=new Sphere,_position$2=new Vector3;class Points extends Object3D{constructor(e=new BufferGeometry,t=new PointsMaterial){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_sphere.copy(i.boundingSphere),_sphere.applyMatrix4(r),_sphere.radius+=s,e.ray.intersectsSphere(_sphere)===!1)return;_inverseMatrix.copy(r).invert(),_ray.copy(e.ray).applyMatrix4(_inverseMatrix);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=p,v=m;g<v;g++){const _=u.getX(g);_position$2.fromBufferAttribute(d,_),testPoint(_position$2,_,c,r,e,t,this)}}else{const p=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=p,v=m;g<v;g++)_position$2.fromBufferAttribute(d,g),testPoint(_position$2,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function testPoint(a,e,t,i,r,s,o){const l=_ray.distanceSqToPoint(a);if(l<t){const c=new Vector3;_ray.closestPointToPoint(a,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,object:o})}}class VideoTexture extends Texture{constructor(e,t,i,r,s,o,l,c,u){super(e,t,i,r,s,o,l,c,u),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:LinearFilter,this.magFilter=s!==void 0?s:LinearFilter,this.generateMipmaps=!1;const h=this;function d(){h.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class FramebufferTexture extends Texture{constructor(e,t,i){super({width:e,height:t}),this.isFramebufferTexture=!0,this.format=i,this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.generateMipmaps=!1,this.needsUpdate=!0}}class CompressedTexture extends Texture{constructor(e,t,i,r,s,o,l,c,u,h,d,p){super(null,o,l,c,u,h,r,s,d,p),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class CompressedArrayTexture extends CompressedTexture{constructor(e,t,i,r,s,o){super(e,t,i,s,o),this.isCompressedArrayTexture=!0,this.image.depth=r,this.wrapR=ClampToEdgeWrapping}}class CanvasTexture extends Texture{constructor(e,t,i,r,s,o,l,c,u){super(e,t,i,r,s,o,l,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Curve{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let l=0,c=s-1,u;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),u=i[r]-o,u<0)l=r+1;else if(u>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const h=i[r],p=i[r+1]-h,m=(o-h)/p;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),l=this.getPoint(s),c=t||(o.isVector2?new Vector2:new Vector3);return c.copy(l).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new Vector3,r=[],s=[],o=[],l=new Vector3,c=new Matrix4;for(let m=0;m<=e;m++){const g=m/e;r[m]=this.getTangentAt(g,new Vector3)}s[0]=new Vector3,o[0]=new Vector3;let u=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),p=Math.abs(r[0].z);h<=u&&(u=h,i.set(1,0,0)),d<=u&&(u=d,i.set(0,1,0)),p<=u&&i.set(0,0,1),l.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],l),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),l.crossVectors(r[m-1],r[m]),l.length()>Number.EPSILON){l.normalize();const g=Math.acos(clamp$1(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(l,g))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(clamp$1(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(l.crossVectors(s[0],s[e]))>0&&(m=-m);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class EllipseCurve extends Curve{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=l,this.aRotation=c}getPoint(e,t){const i=t||new Vector2,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const l=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(l),u=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,m=u-this.aY;c=p*h-m*d+this.aX,u=p*d+m*h+this.aY}return i.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ArcCurve extends EllipseCurve{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function CubicPoly(){let a=0,e=0,t=0,i=0;function r(s,o,l,c){a=s,e=l,t=-3*s+3*o-2*l-c,i=2*s-2*o+l+c}return{initCatmullRom:function(s,o,l,c,u){r(o,l,u*(l-s),u*(c-o))},initNonuniformCatmullRom:function(s,o,l,c,u,h,d){let p=(o-s)/u-(l-s)/(u+h)+(l-o)/h,m=(l-o)/h-(c-o)/(h+d)+(c-l)/d;p*=h,m*=h,r(o,l,p,m)},calc:function(s){const o=s*s,l=o*s;return a+e*s+t*o+i*l}}}const tmp=new Vector3,px=new CubicPoly,py=new CubicPoly,pz=new CubicPoly;class CatmullRomCurve3 extends Curve{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new Vector3){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let l=Math.floor(o),c=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:c===0&&l===s-1&&(l=s-2,c=1);let u,h;this.closed||l>0?u=r[(l-1)%s]:(tmp.subVectors(r[0],r[1]).add(r[0]),u=tmp);const d=r[l%s],p=r[(l+1)%s];if(this.closed||l+2<s?h=r[(l+2)%s]:(tmp.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=tmp),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(d),m),v=Math.pow(d.distanceToSquared(p),m),_=Math.pow(p.distanceToSquared(h),m);v<1e-4&&(v=1),g<1e-4&&(g=v),_<1e-4&&(_=v),px.initNonuniformCatmullRom(u.x,d.x,p.x,h.x,g,v,_),py.initNonuniformCatmullRom(u.y,d.y,p.y,h.y,g,v,_),pz.initNonuniformCatmullRom(u.z,d.z,p.z,h.z,g,v,_)}else this.curveType==="catmullrom"&&(px.initCatmullRom(u.x,d.x,p.x,h.x,this.tension),py.initCatmullRom(u.y,d.y,p.y,h.y,this.tension),pz.initCatmullRom(u.z,d.z,p.z,h.z,this.tension));return i.set(px.calc(c),py.calc(c),pz.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Vector3().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function CatmullRom(a,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,l=a*a,c=a*l;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*l+s*a+t}function QuadraticBezierP0(a,e){const t=1-a;return t*t*e}function QuadraticBezierP1(a,e){return 2*(1-a)*a*e}function QuadraticBezierP2(a,e){return a*a*e}function QuadraticBezier(a,e,t,i){return QuadraticBezierP0(a,e)+QuadraticBezierP1(a,t)+QuadraticBezierP2(a,i)}function CubicBezierP0(a,e){const t=1-a;return t*t*t*e}function CubicBezierP1(a,e){const t=1-a;return 3*t*t*a*e}function CubicBezierP2(a,e){return 3*(1-a)*a*a*e}function CubicBezierP3(a,e){return a*a*a*e}function CubicBezier(a,e,t,i,r){return CubicBezierP0(a,e)+CubicBezierP1(a,t)+CubicBezierP2(a,i)+CubicBezierP3(a,r)}class CubicBezierCurve extends Curve{constructor(e=new Vector2,t=new Vector2,i=new Vector2,r=new Vector2){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Vector2){const i=t,r=this.v0,s=this.v1,o=this.v2,l=this.v3;return i.set(CubicBezier(e,r.x,s.x,o.x,l.x),CubicBezier(e,r.y,s.y,o.y,l.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class CubicBezierCurve3 extends Curve{constructor(e=new Vector3,t=new Vector3,i=new Vector3,r=new Vector3){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Vector3){const i=t,r=this.v0,s=this.v1,o=this.v2,l=this.v3;return i.set(CubicBezier(e,r.x,s.x,o.x,l.x),CubicBezier(e,r.y,s.y,o.y,l.y),CubicBezier(e,r.z,s.z,o.z,l.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class LineCurve extends Curve{constructor(e=new Vector2,t=new Vector2){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Vector2){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Vector2){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class LineCurve3 extends Curve{constructor(e=new Vector3,t=new Vector3){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Vector3){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Vector3){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class QuadraticBezierCurve extends Curve{constructor(e=new Vector2,t=new Vector2,i=new Vector2){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Vector2){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(QuadraticBezier(e,r.x,s.x,o.x),QuadraticBezier(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class QuadraticBezierCurve3 extends Curve{constructor(e=new Vector3,t=new Vector3,i=new Vector3){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Vector3){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(QuadraticBezier(e,r.x,s.x,o.x),QuadraticBezier(e,r.y,s.y,o.y),QuadraticBezier(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class SplineCurve extends Curve{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Vector2){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),l=s-o,c=r[o===0?o:o-1],u=r[o],h=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(CatmullRom(l,c.x,u.x,h.x,d.x),CatmullRom(l,c.y,u.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Vector2().fromArray(r))}return this}}var Curves=Object.freeze({__proto__:null,ArcCurve,CatmullRomCurve3,CubicBezierCurve,CubicBezierCurve3,EllipseCurve,LineCurve,LineCurve3,QuadraticBezierCurve,QuadraticBezierCurve3,SplineCurve});class CurvePath extends Curve{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new LineCurve(t,e))}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,l=this.curves[s],c=l.getLength(),u=c===0?0:1-o/c;return l.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],l=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(l);for(let u=0;u<c.length;u++){const h=c[u];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Curves[r.type]().fromJSON(r))}return this}}class Path extends CurvePath{constructor(e){super(),this.type="Path",this.currentPoint=new Vector2,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new LineCurve(this.currentPoint.clone(),new Vector2(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new QuadraticBezierCurve(this.currentPoint.clone(),new Vector2(e,t),new Vector2(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const l=new CubicBezierCurve(this.currentPoint.clone(),new Vector2(e,t),new Vector2(i,r),new Vector2(s,o));return this.curves.push(l),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new SplineCurve(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+l,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,l,c){const u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+u,t+h,i,r,s,o,l,c),this}absellipse(e,t,i,r,s,o,l,c){const u=new EllipseCurve(e,t,i,r,s,o,l,c);if(this.curves.length>0){const d=u.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(u);const h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class LatheGeometry extends BufferGeometry{constructor(e=[new Vector2(0,-.5),new Vector2(.5,0),new Vector2(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=clamp$1(r,0,Math.PI*2);const s=[],o=[],l=[],c=[],u=[],h=1/t,d=new Vector3,p=new Vector2,m=new Vector3,g=new Vector3,v=new Vector3;let _=0,y=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:_=e[b+1].x-e[b].x,y=e[b+1].y-e[b].y,m.x=y*1,m.y=-_,m.z=y*0,v.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:_=e[b+1].x-e[b].x,y=e[b+1].y-e[b].y,m.x=y*1,m.y=-_,m.z=y*0,g.copy(m),m.x+=v.x,m.y+=v.y,m.z+=v.z,m.normalize(),c.push(m.x,m.y,m.z),v.copy(g)}for(let b=0;b<=t;b++){const x=i+b*h*r,S=Math.sin(x),M=Math.cos(x);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*S,d.y=e[E].y,d.z=e[E].x*M,o.push(d.x,d.y,d.z),p.x=b/t,p.y=E/(e.length-1),l.push(p.x,p.y);const R=c[3*E+0]*S,w=c[3*E+1],A=c[3*E+0]*M;u.push(R,w,A)}}for(let b=0;b<t;b++)for(let x=0;x<e.length-1;x++){const S=x+b*e.length,M=S,E=S+e.length,R=S+e.length+1,w=S+1;s.push(M,E,w),s.push(R,w,E)}this.setIndex(s),this.setAttribute("position",new Float32BufferAttribute(o,3)),this.setAttribute("uv",new Float32BufferAttribute(l,2)),this.setAttribute("normal",new Float32BufferAttribute(u,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new LatheGeometry(e.points,e.segments,e.phiStart,e.phiLength)}}class CapsuleGeometry extends LatheGeometry{constructor(e=1,t=1,i=4,r=8){const s=new Path;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r}}static fromJSON(e){return new CapsuleGeometry(e.radius,e.length,e.capSegments,e.radialSegments)}}class CircleGeometry extends BufferGeometry{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],l=[],c=[],u=new Vector3,h=new Vector2;o.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){const m=i+d/t*r;u.x=e*Math.cos(m),u.y=e*Math.sin(m),o.push(u.x,u.y,u.z),l.push(0,0,1),h.x=(o[p]/e+1)/2,h.y=(o[p+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Float32BufferAttribute(o,3)),this.setAttribute("normal",new Float32BufferAttribute(l,3)),this.setAttribute("uv",new Float32BufferAttribute(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new CircleGeometry(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class CylinderGeometry extends BufferGeometry{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:l,thetaLength:c};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],p=[],m=[];let g=0;const v=[],_=i/2;let y=0;b(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Float32BufferAttribute(d,3)),this.setAttribute("normal",new Float32BufferAttribute(p,3)),this.setAttribute("uv",new Float32BufferAttribute(m,2));function b(){const S=new Vector3,M=new Vector3;let E=0;const R=(t-e)/i;for(let w=0;w<=s;w++){const A=[],L=w/s,V=L*(t-e)+e;for(let D=0;D<=r;D++){const B=D/r,O=B*c+l,$=Math.sin(O),W=Math.cos(O);M.x=V*$,M.y=-L*i+_,M.z=V*W,d.push(M.x,M.y,M.z),S.set($,R,W).normalize(),p.push(S.x,S.y,S.z),m.push(B,1-L),A.push(g++)}v.push(A)}for(let w=0;w<r;w++)for(let A=0;A<s;A++){const L=v[A][w],V=v[A+1][w],D=v[A+1][w+1],B=v[A][w+1];h.push(L,V,B),h.push(V,D,B),E+=6}u.addGroup(y,E,0),y+=E}function x(S){const M=g,E=new Vector2,R=new Vector3;let w=0;const A=S===!0?e:t,L=S===!0?1:-1;for(let D=1;D<=r;D++)d.push(0,_*L,0),p.push(0,L,0),m.push(.5,.5),g++;const V=g;for(let D=0;D<=r;D++){const O=D/r*c+l,$=Math.cos(O),W=Math.sin(O);R.x=A*W,R.y=_*L,R.z=A*$,d.push(R.x,R.y,R.z),p.push(0,L,0),E.x=$*.5+.5,E.y=W*.5*L+.5,m.push(E.x,E.y),g++}for(let D=0;D<r;D++){const B=M+D,O=V+D;S===!0?h.push(O,O+1,B):h.push(O+1,O,B),w+=3}u.addGroup(y,w,S===!0?1:2),y+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new CylinderGeometry(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ConeGeometry extends CylinderGeometry{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,l=Math.PI*2){super(0,e,t,i,r,s,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:l}}static fromJSON(e){return new ConeGeometry(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class PolyhedronGeometry extends BufferGeometry{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];l(r),u(i),h(),this.setAttribute("position",new Float32BufferAttribute(s,3)),this.setAttribute("normal",new Float32BufferAttribute(s.slice(),3)),this.setAttribute("uv",new Float32BufferAttribute(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function l(b){const x=new Vector3,S=new Vector3,M=new Vector3;for(let E=0;E<t.length;E+=3)m(t[E+0],x),m(t[E+1],S),m(t[E+2],M),c(x,S,M,b)}function c(b,x,S,M){const E=M+1,R=[];for(let w=0;w<=E;w++){R[w]=[];const A=b.clone().lerp(S,w/E),L=x.clone().lerp(S,w/E),V=E-w;for(let D=0;D<=V;D++)D===0&&w===E?R[w][D]=A:R[w][D]=A.clone().lerp(L,D/V)}for(let w=0;w<E;w++)for(let A=0;A<2*(E-w)-1;A++){const L=Math.floor(A/2);A%2===0?(p(R[w][L+1]),p(R[w+1][L]),p(R[w][L])):(p(R[w][L+1]),p(R[w+1][L+1]),p(R[w+1][L]))}}function u(b){const x=new Vector3;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(b),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function h(){const b=new Vector3;for(let x=0;x<s.length;x+=3){b.x=s[x+0],b.y=s[x+1],b.z=s[x+2];const S=_(b)/2/Math.PI+.5,M=y(b)/Math.PI+.5;o.push(S,1-M)}g(),d()}function d(){for(let b=0;b<o.length;b+=6){const x=o[b+0],S=o[b+2],M=o[b+4],E=Math.max(x,S,M),R=Math.min(x,S,M);E>.9&&R<.1&&(x<.2&&(o[b+0]+=1),S<.2&&(o[b+2]+=1),M<.2&&(o[b+4]+=1))}}function p(b){s.push(b.x,b.y,b.z)}function m(b,x){const S=b*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function g(){const b=new Vector3,x=new Vector3,S=new Vector3,M=new Vector3,E=new Vector2,R=new Vector2,w=new Vector2;for(let A=0,L=0;A<s.length;A+=9,L+=6){b.set(s[A+0],s[A+1],s[A+2]),x.set(s[A+3],s[A+4],s[A+5]),S.set(s[A+6],s[A+7],s[A+8]),E.set(o[L+0],o[L+1]),R.set(o[L+2],o[L+3]),w.set(o[L+4],o[L+5]),M.copy(b).add(x).add(S).divideScalar(3);const V=_(M);v(E,L+0,b,V),v(R,L+2,x,V),v(w,L+4,S,V)}}function v(b,x,S,M){M<0&&b.x===1&&(o[x]=b.x-1),S.x===0&&S.z===0&&(o[x]=M/2/Math.PI+.5)}function _(b){return Math.atan2(b.z,-b.x)}function y(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new PolyhedronGeometry(e.vertices,e.indices,e.radius,e.details)}}class DodecahedronGeometry extends PolyhedronGeometry{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new DodecahedronGeometry(e.radius,e.detail)}}const _v0=new Vector3,_v1$1=new Vector3,_normal=new Vector3,_triangle=new Triangle;class EdgesGeometry extends BufferGeometry{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(DEG2RAD*t),o=e.getIndex(),l=e.getAttribute("position"),c=o?o.count:l.count,u=[0,0,0],h=["a","b","c"],d=new Array(3),p={},m=[];for(let g=0;g<c;g+=3){o?(u[0]=o.getX(g),u[1]=o.getX(g+1),u[2]=o.getX(g+2)):(u[0]=g,u[1]=g+1,u[2]=g+2);const{a:v,b:_,c:y}=_triangle;if(v.fromBufferAttribute(l,u[0]),_.fromBufferAttribute(l,u[1]),y.fromBufferAttribute(l,u[2]),_triangle.getNormal(_normal),d[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,d[1]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,d[2]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){const x=(b+1)%3,S=d[b],M=d[x],E=_triangle[h[b]],R=_triangle[h[x]],w=`${S}_${M}`,A=`${M}_${S}`;A in p&&p[A]?(_normal.dot(p[A].normal)<=s&&(m.push(E.x,E.y,E.z),m.push(R.x,R.y,R.z)),p[A]=null):w in p||(p[w]={index0:u[b],index1:u[x],normal:_normal.clone()})}}for(const g in p)if(p[g]){const{index0:v,index1:_}=p[g];_v0.fromBufferAttribute(l,v),_v1$1.fromBufferAttribute(l,_),m.push(_v0.x,_v0.y,_v0.z),m.push(_v1$1.x,_v1$1.y,_v1$1.z)}this.setAttribute("position",new Float32BufferAttribute(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Shape extends Path{constructor(e){super(e),this.uuid=generateUUID(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Path().fromJSON(r))}return this}}const Earcut={triangulate:function(a,e,t=2){const i=e&&e.length,r=i?e[0]*t:a.length;let s=linkedList(a,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let l,c,u,h,d,p,m;if(i&&(s=eliminateHoles(a,e,s,t)),a.length>80*t){l=u=a[0],c=h=a[1];for(let g=t;g<r;g+=t)d=a[g],p=a[g+1],d<l&&(l=d),p<c&&(c=p),d>u&&(u=d),p>h&&(h=p);m=Math.max(u-l,h-c),m=m!==0?32767/m:0}return earcutLinked(s,o,t,l,c,m,0),o}};function linkedList(a,e,t,i,r){let s,o;if(r===signedArea(a,e,t,i)>0)for(s=e;s<t;s+=i)o=insertNode(s,a[s],a[s+1],o);else for(s=t-i;s>=e;s-=i)o=insertNode(s,a[s],a[s+1],o);return o&&equals(o,o.next)&&(removeNode(o),o=o.next),o}function filterPoints(a,e){if(!a)return a;e||(e=a);let t=a,i;do if(i=!1,!t.steiner&&(equals(t,t.next)||area(t.prev,t,t.next)===0)){if(removeNode(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function earcutLinked(a,e,t,i,r,s,o){if(!a)return;!o&&s&&indexCurve(a,i,r,s);let l=a,c,u;for(;a.prev!==a.next;){if(c=a.prev,u=a.next,s?isEarHashed(a,i,r,s):isEar(a)){e.push(c.i/t|0),e.push(a.i/t|0),e.push(u.i/t|0),removeNode(a),a=u.next,l=u.next;continue}if(a=u,a===l){o?o===1?(a=cureLocalIntersections(filterPoints(a),e,t),earcutLinked(a,e,t,i,r,s,2)):o===2&&splitEarcut(a,e,t,i,r,s):earcutLinked(filterPoints(a),e,t,i,r,s,1);break}}}function isEar(a){const e=a.prev,t=a,i=a.next;if(area(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,l=e.y,c=t.y,u=i.y,h=r<s?r<o?r:o:s<o?s:o,d=l<c?l<u?l:u:c<u?c:u,p=r>s?r>o?r:o:s>o?s:o,m=l>c?l>u?l:u:c>u?c:u;let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=p&&g.y>=d&&g.y<=m&&pointInTriangle(r,l,s,c,o,u,g.x,g.y)&&area(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function isEarHashed(a,e,t,i){const r=a.prev,s=a,o=a.next;if(area(r,s,o)>=0)return!1;const l=r.x,c=s.x,u=o.x,h=r.y,d=s.y,p=o.y,m=l<c?l<u?l:u:c<u?c:u,g=h<d?h<p?h:p:d<p?d:p,v=l>c?l>u?l:u:c>u?c:u,_=h>d?h>p?h:p:d>p?d:p,y=zOrder(m,g,e,t,i),b=zOrder(v,_,e,t,i);let x=a.prevZ,S=a.nextZ;for(;x&&x.z>=y&&S&&S.z<=b;){if(x.x>=m&&x.x<=v&&x.y>=g&&x.y<=_&&x!==r&&x!==o&&pointInTriangle(l,h,c,d,u,p,x.x,x.y)&&area(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=m&&S.x<=v&&S.y>=g&&S.y<=_&&S!==r&&S!==o&&pointInTriangle(l,h,c,d,u,p,S.x,S.y)&&area(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=y;){if(x.x>=m&&x.x<=v&&x.y>=g&&x.y<=_&&x!==r&&x!==o&&pointInTriangle(l,h,c,d,u,p,x.x,x.y)&&area(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=b;){if(S.x>=m&&S.x<=v&&S.y>=g&&S.y<=_&&S!==r&&S!==o&&pointInTriangle(l,h,c,d,u,p,S.x,S.y)&&area(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function cureLocalIntersections(a,e,t){let i=a;do{const r=i.prev,s=i.next.next;!equals(r,s)&&intersects(r,i,i.next,s)&&locallyInside(r,s)&&locallyInside(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),removeNode(i),removeNode(i.next),i=a=s),i=i.next}while(i!==a);return filterPoints(i)}function splitEarcut(a,e,t,i,r,s){let o=a;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&isValidDiagonal(o,l)){let c=splitPolygon(o,l);o=filterPoints(o,o.next),c=filterPoints(c,c.next),earcutLinked(o,e,t,i,r,s,0),earcutLinked(c,e,t,i,r,s,0);return}l=l.next}o=o.next}while(o!==a)}function eliminateHoles(a,e,t,i){const r=[];let s,o,l,c,u;for(s=0,o=e.length;s<o;s++)l=e[s]*i,c=s<o-1?e[s+1]*i:a.length,u=linkedList(a,l,c,i,!1),u===u.next&&(u.steiner=!0),r.push(getLeftmost(u));for(r.sort(compareX),s=0;s<r.length;s++)t=eliminateHole(r[s],t);return t}function compareX(a,e){return a.x-e.x}function eliminateHole(a,e){const t=findHoleBridge(a,e);if(!t)return e;const i=splitPolygon(t,a);return filterPoints(i,i.next),filterPoints(t,t.next)}function findHoleBridge(a,e){let t=e,i=-1/0,r;const s=a.x,o=a.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const p=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=s&&p>i&&(i=p,r=t.x<t.next.x?t:t.next,p===s))return r}t=t.next}while(t!==e);if(!r)return null;const l=r,c=r.x,u=r.y;let h=1/0,d;t=r;do s>=t.x&&t.x>=c&&s!==t.x&&pointInTriangle(o<u?s:i,o,c,u,o<u?i:s,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(s-t.x),locallyInside(t,a)&&(d<h||d===h&&(t.x>r.x||t.x===r.x&&sectorContainsSector(r,t)))&&(r=t,h=d)),t=t.next;while(t!==l);return r}function sectorContainsSector(a,e){return area(a.prev,a,e.prev)<0&&area(e.next,a,a.next)<0}function indexCurve(a,e,t,i){let r=a;do r.z===0&&(r.z=zOrder(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==a);r.prevZ.nextZ=null,r.prevZ=null,sortLinked(r)}function sortLinked(a){let e,t,i,r,s,o,l,c,u=1;do{for(t=a,a=null,s=null,o=0;t;){for(o++,i=t,l=0,e=0;e<u&&(l++,i=i.nextZ,!!i);e++);for(c=u;l>0||c>0&&i;)l!==0&&(c===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,l--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:a=r,r.prevZ=s,s=r;t=i}s.nextZ=null,u*=2}while(o>1);return a}function zOrder(a,e,t,i,r){return a=(a-t)*r|0,e=(e-i)*r|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,a|e<<1}function getLeftmost(a){let e=a,t=a;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==a);return t}function pointInTriangle(a,e,t,i,r,s,o,l){return(r-o)*(e-l)>=(a-o)*(s-l)&&(a-o)*(i-l)>=(t-o)*(e-l)&&(t-o)*(s-l)>=(r-o)*(i-l)}function isValidDiagonal(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!intersectsPolygon(a,e)&&(locallyInside(a,e)&&locallyInside(e,a)&&middleInside(a,e)&&(area(a.prev,a,e.prev)||area(a,e.prev,e))||equals(a,e)&&area(a.prev,a,a.next)>0&&area(e.prev,e,e.next)>0)}function area(a,e,t){return(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)}function equals(a,e){return a.x===e.x&&a.y===e.y}function intersects(a,e,t,i){const r=sign(area(a,e,t)),s=sign(area(a,e,i)),o=sign(area(t,i,a)),l=sign(area(t,i,e));return!!(r!==s&&o!==l||r===0&&onSegment(a,t,e)||s===0&&onSegment(a,i,e)||o===0&&onSegment(t,a,i)||l===0&&onSegment(t,e,i))}function onSegment(a,e,t){return e.x<=Math.max(a.x,t.x)&&e.x>=Math.min(a.x,t.x)&&e.y<=Math.max(a.y,t.y)&&e.y>=Math.min(a.y,t.y)}function sign(a){return a>0?1:a<0?-1:0}function intersectsPolygon(a,e){let t=a;do{if(t.i!==a.i&&t.next.i!==a.i&&t.i!==e.i&&t.next.i!==e.i&&intersects(t,t.next,a,e))return!0;t=t.next}while(t!==a);return!1}function locallyInside(a,e){return area(a.prev,a,a.next)<0?area(a,e,a.next)>=0&&area(a,a.prev,e)>=0:area(a,e,a.prev)<0||area(a,a.next,e)<0}function middleInside(a,e){let t=a,i=!1;const r=(a.x+e.x)/2,s=(a.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==a);return i}function splitPolygon(a,e){const t=new Node(a.i,a.x,a.y),i=new Node(e.i,e.x,e.y),r=a.next,s=e.prev;return a.next=e,e.prev=a,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function insertNode(a,e,t,i){const r=new Node(a,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function removeNode(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function Node(a,e,t){this.i=a,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function signedArea(a,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(a[o]-a[s])*(a[s+1]+a[o+1]),o=s;return r}class ShapeUtils{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ShapeUtils.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];removeDupEndPts(e),addContour(i,e);let o=e.length;t.forEach(removeDupEndPts);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,addContour(i,t[c]);const l=Earcut.triangulate(i,r);for(let c=0;c<l.length;c+=3)s.push(l.slice(c,c+3));return s}}function removeDupEndPts(a){const e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function addContour(a,e){for(let t=0;t<e.length;t++)a.push(e[t].x),a.push(e[t].y)}class ExtrudeGeometry extends BufferGeometry{constructor(e=new Shape([new Vector2(.5,.5),new Vector2(-.5,.5),new Vector2(-.5,-.5),new Vector2(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let l=0,c=e.length;l<c;l++){const u=e[l];o(u)}this.setAttribute("position",new Float32BufferAttribute(r,3)),this.setAttribute("uv",new Float32BufferAttribute(s,2)),this.computeVertexNormals();function o(l){const c=[],u=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3;const y=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:WorldUVGenerator;let x,S=!1,M,E,R,w;y&&(x=y.getSpacedPoints(h),S=!0,p=!1,M=y.computeFrenetFrames(h,!1),E=new Vector3,R=new Vector3,w=new Vector3),p||(_=0,m=0,g=0,v=0);const A=l.extractPoints(u);let L=A.shape;const V=A.holes;if(!ShapeUtils.isClockWise(L)){L=L.reverse();for(let Y=0,ee=V.length;Y<ee;Y++){const le=V[Y];ShapeUtils.isClockWise(le)&&(V[Y]=le.reverse())}}const B=ShapeUtils.triangulateShape(L,V),O=L;for(let Y=0,ee=V.length;Y<ee;Y++){const le=V[Y];L=L.concat(le)}function $(Y,ee,le){return ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector(ee,le)}const W=L.length,ne=B.length;function q(Y,ee,le){let _e,pe,Ee;const be=Y.x-ee.x,Ce=Y.y-ee.y,De=le.x-Y.x,Le=le.y-Y.y,P=be*be+Ce*Ce,T=be*Le-Ce*De;if(Math.abs(T)>Number.EPSILON){const H=Math.sqrt(P),se=Math.sqrt(De*De+Le*Le),ae=ee.x-Ce/H,me=ee.y+be/H,ye=le.x-Le/se,I=le.y+De/se,U=((ye-ae)*Le-(I-me)*De)/(be*Le-Ce*De);_e=ae+be*U-Y.x,pe=me+Ce*U-Y.y;const de=_e*_e+pe*pe;if(de<=2)return new Vector2(_e,pe);Ee=Math.sqrt(de/2)}else{let H=!1;be>Number.EPSILON?De>Number.EPSILON&&(H=!0):be<-Number.EPSILON?De<-Number.EPSILON&&(H=!0):Math.sign(Ce)===Math.sign(Le)&&(H=!0),H?(_e=-Ce,pe=be,Ee=Math.sqrt(P)):(_e=be,pe=Ce,Ee=Math.sqrt(P/2))}return new Vector2(_e/Ee,pe/Ee)}const Q=[];for(let Y=0,ee=O.length,le=ee-1,_e=Y+1;Y<ee;Y++,le++,_e++)le===ee&&(le=0),_e===ee&&(_e=0),Q[Y]=q(O[Y],O[le],O[_e]);const J=[];let ge,G=Q.concat();for(let Y=0,ee=V.length;Y<ee;Y++){const le=V[Y];ge=[];for(let _e=0,pe=le.length,Ee=pe-1,be=_e+1;_e<pe;_e++,Ee++,be++)Ee===pe&&(Ee=0),be===pe&&(be=0),ge[_e]=q(le[_e],le[Ee],le[be]);J.push(ge),G=G.concat(ge)}for(let Y=0;Y<_;Y++){const ee=Y/_,le=m*Math.cos(ee*Math.PI/2),_e=g*Math.sin(ee*Math.PI/2)+v;for(let pe=0,Ee=O.length;pe<Ee;pe++){const be=$(O[pe],Q[pe],_e);oe(be.x,be.y,-le)}for(let pe=0,Ee=V.length;pe<Ee;pe++){const be=V[pe];ge=J[pe];for(let Ce=0,De=be.length;Ce<De;Ce++){const Le=$(be[Ce],ge[Ce],_e);oe(Le.x,Le.y,-le)}}}const te=g+v;for(let Y=0;Y<W;Y++){const ee=p?$(L[Y],G[Y],te):L[Y];S?(R.copy(M.normals[0]).multiplyScalar(ee.x),E.copy(M.binormals[0]).multiplyScalar(ee.y),w.copy(x[0]).add(R).add(E),oe(w.x,w.y,w.z)):oe(ee.x,ee.y,0)}for(let Y=1;Y<=h;Y++)for(let ee=0;ee<W;ee++){const le=p?$(L[ee],G[ee],te):L[ee];S?(R.copy(M.normals[Y]).multiplyScalar(le.x),E.copy(M.binormals[Y]).multiplyScalar(le.y),w.copy(x[Y]).add(R).add(E),oe(w.x,w.y,w.z)):oe(le.x,le.y,d/h*Y)}for(let Y=_-1;Y>=0;Y--){const ee=Y/_,le=m*Math.cos(ee*Math.PI/2),_e=g*Math.sin(ee*Math.PI/2)+v;for(let pe=0,Ee=O.length;pe<Ee;pe++){const be=$(O[pe],Q[pe],_e);oe(be.x,be.y,d+le)}for(let pe=0,Ee=V.length;pe<Ee;pe++){const be=V[pe];ge=J[pe];for(let Ce=0,De=be.length;Ce<De;Ce++){const Le=$(be[Ce],ge[Ce],_e);S?oe(Le.x,Le.y+x[h-1].y,x[h-1].x+le):oe(Le.x,Le.y,d+le)}}}he(),N();function he(){const Y=r.length/3;if(p){let ee=0,le=W*ee;for(let _e=0;_e<ne;_e++){const pe=B[_e];ce(pe[2]+le,pe[1]+le,pe[0]+le)}ee=h+_*2,le=W*ee;for(let _e=0;_e<ne;_e++){const pe=B[_e];ce(pe[0]+le,pe[1]+le,pe[2]+le)}}else{for(let ee=0;ee<ne;ee++){const le=B[ee];ce(le[2],le[1],le[0])}for(let ee=0;ee<ne;ee++){const le=B[ee];ce(le[0]+W*h,le[1]+W*h,le[2]+W*h)}}i.addGroup(Y,r.length/3-Y,0)}function N(){const Y=r.length/3;let ee=0;re(O,ee),ee+=O.length;for(let le=0,_e=V.length;le<_e;le++){const pe=V[le];re(pe,ee),ee+=pe.length}i.addGroup(Y,r.length/3-Y,1)}function re(Y,ee){let le=Y.length;for(;--le>=0;){const _e=le;let pe=le-1;pe<0&&(pe=Y.length-1);for(let Ee=0,be=h+_*2;Ee<be;Ee++){const Ce=W*Ee,De=W*(Ee+1),Le=ee+_e+Ce,P=ee+pe+Ce,T=ee+pe+De,H=ee+_e+De;fe(Le,P,T,H)}}}function oe(Y,ee,le){c.push(Y),c.push(ee),c.push(le)}function ce(Y,ee,le){ve(Y),ve(ee),ve(le);const _e=r.length/3,pe=b.generateTopUV(i,r,_e-3,_e-2,_e-1);Se(pe[0]),Se(pe[1]),Se(pe[2])}function fe(Y,ee,le,_e){ve(Y),ve(ee),ve(_e),ve(ee),ve(le),ve(_e);const pe=r.length/3,Ee=b.generateSideWallUV(i,r,pe-6,pe-3,pe-2,pe-1);Se(Ee[0]),Se(Ee[1]),Se(Ee[3]),Se(Ee[1]),Se(Ee[2]),Se(Ee[3])}function ve(Y){r.push(c[Y*3+0]),r.push(c[Y*3+1]),r.push(c[Y*3+2])}function Se(Y){s.push(Y.x),s.push(Y.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return toJSON$1(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const l=t[e.shapes[s]];i.push(l)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Curves[r.type]().fromJSON(r)),new ExtrudeGeometry(i,e.options)}}const WorldUVGenerator={generateTopUV:function(a,e,t,i,r){const s=e[t*3],o=e[t*3+1],l=e[i*3],c=e[i*3+1],u=e[r*3],h=e[r*3+1];return[new Vector2(s,o),new Vector2(l,c),new Vector2(u,h)]},generateSideWallUV:function(a,e,t,i,r,s){const o=e[t*3],l=e[t*3+1],c=e[t*3+2],u=e[i*3],h=e[i*3+1],d=e[i*3+2],p=e[r*3],m=e[r*3+1],g=e[r*3+2],v=e[s*3],_=e[s*3+1],y=e[s*3+2];return Math.abs(l-h)<Math.abs(o-u)?[new Vector2(o,1-c),new Vector2(u,1-d),new Vector2(p,1-g),new Vector2(v,1-y)]:[new Vector2(l,1-c),new Vector2(h,1-d),new Vector2(m,1-g),new Vector2(_,1-y)]}};function toJSON$1(a,e,t){if(t.shapes=[],Array.isArray(a))for(let i=0,r=a.length;i<r;i++){const s=a[i];t.shapes.push(s.uuid)}else t.shapes.push(a.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class IcosahedronGeometry extends PolyhedronGeometry{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new IcosahedronGeometry(e.radius,e.detail)}}class OctahedronGeometry extends PolyhedronGeometry{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new OctahedronGeometry(e.radius,e.detail)}}class RingGeometry extends BufferGeometry{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const l=[],c=[],u=[],h=[];let d=e;const p=(t-e)/r,m=new Vector3,g=new Vector2;for(let v=0;v<=r;v++){for(let _=0;_<=i;_++){const y=s+_/i*o;m.x=d*Math.cos(y),m.y=d*Math.sin(y),c.push(m.x,m.y,m.z),u.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}d+=p}for(let v=0;v<r;v++){const _=v*(i+1);for(let y=0;y<i;y++){const b=y+_,x=b,S=b+i+1,M=b+i+2,E=b+1;l.push(x,S,E),l.push(S,M,E)}}this.setIndex(l),this.setAttribute("position",new Float32BufferAttribute(c,3)),this.setAttribute("normal",new Float32BufferAttribute(u,3)),this.setAttribute("uv",new Float32BufferAttribute(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new RingGeometry(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ShapeGeometry extends BufferGeometry{constructor(e=new Shape([new Vector2(0,.5),new Vector2(-.5,-.5),new Vector2(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let l=0,c=0;if(Array.isArray(e)===!1)u(e);else for(let h=0;h<e.length;h++)u(e[h]),this.addGroup(l,c,h),l+=c,c=0;this.setIndex(i),this.setAttribute("position",new Float32BufferAttribute(r,3)),this.setAttribute("normal",new Float32BufferAttribute(s,3)),this.setAttribute("uv",new Float32BufferAttribute(o,2));function u(h){const d=r.length/3,p=h.extractPoints(t);let m=p.shape;const g=p.holes;ShapeUtils.isClockWise(m)===!1&&(m=m.reverse());for(let _=0,y=g.length;_<y;_++){const b=g[_];ShapeUtils.isClockWise(b)===!0&&(g[_]=b.reverse())}const v=ShapeUtils.triangulateShape(m,g);for(let _=0,y=g.length;_<y;_++){const b=g[_];m=m.concat(b)}for(let _=0,y=m.length;_<y;_++){const b=m[_];r.push(b.x,b.y,0),s.push(0,0,1),o.push(b.x,b.y)}for(let _=0,y=v.length;_<y;_++){const b=v[_],x=b[0]+d,S=b[1]+d,M=b[2]+d;i.push(x,S,M),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return toJSON(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new ShapeGeometry(i,e.curveSegments)}}function toJSON(a,e){if(e.shapes=[],Array.isArray(a))for(let t=0,i=a.length;t<i;t++){const r=a[t];e.shapes.push(r.uuid)}else e.shapes.push(a.uuid);return e}class SphereGeometry extends BufferGeometry{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+l,Math.PI);let u=0;const h=[],d=new Vector3,p=new Vector3,m=[],g=[],v=[],_=[];for(let y=0;y<=i;y++){const b=[],x=y/i;let S=0;y==0&&o==0?S=.5/t:y==i&&c==Math.PI&&(S=-.5/t);for(let M=0;M<=t;M++){const E=M/t;d.x=-e*Math.cos(r+E*s)*Math.sin(o+x*l),d.y=e*Math.cos(o+x*l),d.z=e*Math.sin(r+E*s)*Math.sin(o+x*l),g.push(d.x,d.y,d.z),p.copy(d).normalize(),v.push(p.x,p.y,p.z),_.push(E+S,1-x),b.push(u++)}h.push(b)}for(let y=0;y<i;y++)for(let b=0;b<t;b++){const x=h[y][b+1],S=h[y][b],M=h[y+1][b],E=h[y+1][b+1];(y!==0||o>0)&&m.push(x,S,E),(y!==i-1||c<Math.PI)&&m.push(S,M,E)}this.setIndex(m),this.setAttribute("position",new Float32BufferAttribute(g,3)),this.setAttribute("normal",new Float32BufferAttribute(v,3)),this.setAttribute("uv",new Float32BufferAttribute(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new SphereGeometry(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class TetrahedronGeometry extends PolyhedronGeometry{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new TetrahedronGeometry(e.radius,e.detail)}}class TorusGeometry extends BufferGeometry{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],l=[],c=[],u=[],h=new Vector3,d=new Vector3,p=new Vector3;for(let m=0;m<=i;m++)for(let g=0;g<=r;g++){const v=g/r*s,_=m/i*Math.PI*2;d.x=(e+t*Math.cos(_))*Math.cos(v),d.y=(e+t*Math.cos(_))*Math.sin(v),d.z=t*Math.sin(_),l.push(d.x,d.y,d.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),p.subVectors(d,h).normalize(),c.push(p.x,p.y,p.z),u.push(g/r),u.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=r;g++){const v=(r+1)*m+g-1,_=(r+1)*(m-1)+g-1,y=(r+1)*(m-1)+g,b=(r+1)*m+g;o.push(v,_,b),o.push(_,y,b)}this.setIndex(o),this.setAttribute("position",new Float32BufferAttribute(l,3)),this.setAttribute("normal",new Float32BufferAttribute(c,3)),this.setAttribute("uv",new Float32BufferAttribute(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new TorusGeometry(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class TorusKnotGeometry extends BufferGeometry{constructor(e=1,t=.4,i=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],u=[],h=[],d=new Vector3,p=new Vector3,m=new Vector3,g=new Vector3,v=new Vector3,_=new Vector3,y=new Vector3;for(let x=0;x<=i;++x){const S=x/i*s*Math.PI*2;b(S,s,o,e,m),b(S+.01,s,o,e,g),_.subVectors(g,m),y.addVectors(g,m),v.crossVectors(_,y),y.crossVectors(v,_),v.normalize(),y.normalize();for(let M=0;M<=r;++M){const E=M/r*Math.PI*2,R=-t*Math.cos(E),w=t*Math.sin(E);d.x=m.x+(R*y.x+w*v.x),d.y=m.y+(R*y.y+w*v.y),d.z=m.z+(R*y.z+w*v.z),c.push(d.x,d.y,d.z),p.subVectors(d,m).normalize(),u.push(p.x,p.y,p.z),h.push(x/i),h.push(M/r)}}for(let x=1;x<=i;x++)for(let S=1;S<=r;S++){const M=(r+1)*(x-1)+(S-1),E=(r+1)*x+(S-1),R=(r+1)*x+S,w=(r+1)*(x-1)+S;l.push(M,E,w),l.push(E,R,w)}this.setIndex(l),this.setAttribute("position",new Float32BufferAttribute(c,3)),this.setAttribute("normal",new Float32BufferAttribute(u,3)),this.setAttribute("uv",new Float32BufferAttribute(h,2));function b(x,S,M,E,R){const w=Math.cos(x),A=Math.sin(x),L=M/S*x,V=Math.cos(L);R.x=E*(2+V)*.5*w,R.y=E*(2+V)*A*.5,R.z=E*Math.sin(L)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new TorusKnotGeometry(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class TubeGeometry extends BufferGeometry{constructor(e=new QuadraticBezierCurve3(new Vector3(-1,-1,0),new Vector3(-1,1,0),new Vector3(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const l=new Vector3,c=new Vector3,u=new Vector2;let h=new Vector3;const d=[],p=[],m=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Float32BufferAttribute(d,3)),this.setAttribute("normal",new Float32BufferAttribute(p,3)),this.setAttribute("uv",new Float32BufferAttribute(m,2));function v(){for(let x=0;x<t;x++)_(x);_(s===!1?t:0),b(),y()}function _(x){h=e.getPointAt(x/t,h);const S=o.normals[x],M=o.binormals[x];for(let E=0;E<=r;E++){const R=E/r*Math.PI*2,w=Math.sin(R),A=-Math.cos(R);c.x=A*S.x+w*M.x,c.y=A*S.y+w*M.y,c.z=A*S.z+w*M.z,c.normalize(),p.push(c.x,c.y,c.z),l.x=h.x+i*c.x,l.y=h.y+i*c.y,l.z=h.z+i*c.z,d.push(l.x,l.y,l.z)}}function y(){for(let x=1;x<=t;x++)for(let S=1;S<=r;S++){const M=(r+1)*(x-1)+(S-1),E=(r+1)*x+(S-1),R=(r+1)*x+S,w=(r+1)*(x-1)+S;g.push(M,E,w),g.push(E,R,w)}}function b(){for(let x=0;x<=t;x++)for(let S=0;S<=r;S++)u.x=x/t,u.y=S/r,m.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new TubeGeometry(new Curves[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class WireframeGeometry extends BufferGeometry{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new Vector3,s=new Vector3;if(e.index!==null){const o=e.attributes.position,l=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:l.count,materialIndex:0}]);for(let u=0,h=c.length;u<h;++u){const d=c[u],p=d.start,m=d.count;for(let g=p,v=p+m;g<v;g+=3)for(let _=0;_<3;_++){const y=l.getX(g+_),b=l.getX(g+(_+1)%3);r.fromBufferAttribute(o,y),s.fromBufferAttribute(o,b),isUniqueEdge(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let l=0,c=o.count/3;l<c;l++)for(let u=0;u<3;u++){const h=3*l+u,d=3*l+(u+1)%3;r.fromBufferAttribute(o,h),s.fromBufferAttribute(o,d),isUniqueEdge(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Float32BufferAttribute(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function isUniqueEdge(a,e,t){const i=`${a.x},${a.y},${a.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${a.x},${a.y},${a.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}var Geometries=Object.freeze({__proto__:null,BoxGeometry,CapsuleGeometry,CircleGeometry,ConeGeometry,CylinderGeometry,DodecahedronGeometry,EdgesGeometry,ExtrudeGeometry,IcosahedronGeometry,LatheGeometry,OctahedronGeometry,PlaneGeometry,PolyhedronGeometry,RingGeometry,ShapeGeometry,SphereGeometry,TetrahedronGeometry,TorusGeometry,TorusKnotGeometry,TubeGeometry,WireframeGeometry});class ShadowMaterial extends Material{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Color(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class RawShaderMaterial extends ShaderMaterial{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class MeshStandardMaterial extends Material{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Color(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class MeshPhysicalMaterial extends MeshStandardMaterial{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Vector2(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return clamp$1(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Color(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Color(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Color(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class MeshPhongMaterial extends Material{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Color(16777215),this.specular=new Color(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class MeshToonMaterial extends Material{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Color(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class MeshNormalMaterial extends Material{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class MeshLambertMaterial extends Material{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class MeshMatcapMaterial extends Material{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Color(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class LineDashedMaterial extends LineBasicMaterial{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function arraySlice(a,e,t){return isTypedArray(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)}function convertArray(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function isTypedArray(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function getKeyframeOrder(a){function e(r,s){return a[r]-a[s]}const t=a.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function sortedArray(a,e,t){const i=a.length,r=new a.constructor(i);for(let s=0,o=0;o!==i;++s){const l=t[s]*e;for(let c=0;c!==e;++c)r[o++]=a[l+c]}return r}function flattenJSON(a,e,t,i){let r=1,s=a[0];for(;s!==void 0&&s[i]===void 0;)s=a[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=a[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=a[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=a[r++];while(s!==void 0)}function subclip(a,e,t,i,r=30){const s=a.clone();s.name=e;const o=[];for(let c=0;c<s.tracks.length;++c){const u=s.tracks[c],h=u.getValueSize(),d=[],p=[];for(let m=0;m<u.times.length;++m){const g=u.times[m]*r;if(!(g<t||g>=i)){d.push(u.times[m]);for(let v=0;v<h;++v)p.push(u.values[m*h+v])}}d.length!==0&&(u.times=convertArray(d,u.times.constructor),u.values=convertArray(p,u.values.constructor),o.push(u))}s.tracks=o;let l=1/0;for(let c=0;c<s.tracks.length;++c)l>s.tracks[c].times[0]&&(l=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*l);return s.resetDuration(),s}function makeClipAdditive(a,e=0,t=a,i=30){i<=0&&(i=30);const r=t.tracks.length,s=e/i;for(let o=0;o<r;++o){const l=t.tracks[o],c=l.ValueTypeName;if(c==="bool"||c==="string")continue;const u=a.tracks.find(function(y){return y.name===l.name&&y.ValueTypeName===c});if(u===void 0)continue;let h=0;const d=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let p=0;const m=u.getValueSize();u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(p=m/3);const g=l.times.length-1;let v;if(s<=l.times[0]){const y=h,b=d-h;v=arraySlice(l.values,y,b)}else if(s>=l.times[g]){const y=g*d+h,b=y+d-h;v=arraySlice(l.values,y,b)}else{const y=l.createInterpolant(),b=h,x=d-h;y.evaluate(s),v=arraySlice(y.resultBuffer,b,x)}c==="quaternion"&&new Quaternion().fromArray(v).normalize().conjugate().toArray(v);const _=u.times.length;for(let y=0;y<_;++y){const b=y*m+p;if(c==="quaternion")Quaternion.multiplyQuaternionsFlat(u.values,b,v,0,u.values,b);else{const x=m-p*2;for(let S=0;S<x;++S)u.values[b+S]-=v[S]}}}return a.blendMode=AdditiveAnimationBlendMode,a}const AnimationUtils={arraySlice,convertArray,isTypedArray,getKeyframeOrder,sortedArray,flattenJSON,subclip,makeClipAdditive};class Interpolant{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let l=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const l=t[1];e<l&&(i=2,s=l);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const l=i+o>>>1;e<t[l]?o=l:i=l+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class CubicInterpolant extends Interpolant{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ZeroCurvatureEnding,endingEnd:ZeroCurvatureEnding}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,l=r[s],c=r[o];if(l===void 0)switch(this.getSettings_().endingStart){case ZeroSlopeEnding:s=e,l=2*t-i;break;case WrapAroundEnding:s=r.length-2,l=t+r[s]-r[s+1];break;default:s=e,l=i}if(c===void 0)switch(this.getSettings_().endingEnd){case ZeroSlopeEnding:o=e,c=2*i-t;break;case WrapAroundEnding:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}const u=(i-t)*.5,h=this.valueSize;this._weightPrev=u/(t-l),this._weightNext=u/(c-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,m=this._weightNext,g=(i-t)/(r-t),v=g*g,_=v*g,y=-p*_+2*p*v-p*g,b=(1+p)*_+(-1.5-2*p)*v+(-.5+p)*g+1,x=(-1-m)*_+(1.5+m)*v+.5*g,S=m*_-m*v;for(let M=0;M!==l;++M)s[M]=y*o[h+M]+b*o[u+M]+x*o[c+M]+S*o[d+M];return s}}class LinearInterpolant extends Interpolant{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=e*l,u=c-l,h=(i-t)/(r-t),d=1-h;for(let p=0;p!==l;++p)s[p]=o[u+p]*d+o[c+p]*h;return s}}class DiscreteInterpolant extends Interpolant{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class KeyframeTrack{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=convertArray(t,this.TimeBufferType),this.values=convertArray(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:convertArray(e.times,Array),values:convertArray(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new DiscreteInterpolant(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new LinearInterpolant(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new CubicInterpolant(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case InterpolateDiscrete:t=this.InterpolantFactoryMethodDiscrete;break;case InterpolateLinear:t=this.InterpolantFactoryMethodLinear;break;case InterpolateSmooth:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return InterpolateDiscrete;case this.InterpolantFactoryMethodLinear:return InterpolateLinear;case this.InterpolantFactoryMethodSmooth:return InterpolateSmooth}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const l=this.getValueSize();this.times=arraySlice(i,s,o),this.values=arraySlice(this.values,s*l,o*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==s;l++){const c=i[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,o),e=!1;break}o=c}if(r!==void 0&&isTypedArray(r))for(let l=0,c=r.length;l!==c;++l){const u=r[l];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,u),e=!1;break}}return e}optimize(){const e=arraySlice(this.times),t=arraySlice(this.values),i=this.getValueSize(),r=this.getInterpolation()===InterpolateSmooth,s=e.length-1;let o=1;for(let l=1;l<s;++l){let c=!1;const u=e[l],h=e[l+1];if(u!==h&&(l!==1||u!==e[0]))if(r)c=!0;else{const d=l*i,p=d-i,m=d+i;for(let g=0;g!==i;++g){const v=t[d+g];if(v!==t[p+g]||v!==t[m+g]){c=!0;break}}}if(c){if(l!==o){e[o]=e[l];const d=l*i,p=o*i;for(let m=0;m!==i;++m)t[p+m]=t[d+m]}++o}}if(s>0){e[o]=e[s];for(let l=s*i,c=o*i,u=0;u!==i;++u)t[c+u]=t[l+u];++o}return o!==e.length?(this.times=arraySlice(e,0,o),this.values=arraySlice(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=arraySlice(this.times,0),t=arraySlice(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}KeyframeTrack.prototype.TimeBufferType=Float32Array;KeyframeTrack.prototype.ValueBufferType=Float32Array;KeyframeTrack.prototype.DefaultInterpolation=InterpolateLinear;class BooleanKeyframeTrack extends KeyframeTrack{}BooleanKeyframeTrack.prototype.ValueTypeName="bool";BooleanKeyframeTrack.prototype.ValueBufferType=Array;BooleanKeyframeTrack.prototype.DefaultInterpolation=InterpolateDiscrete;BooleanKeyframeTrack.prototype.InterpolantFactoryMethodLinear=void 0;BooleanKeyframeTrack.prototype.InterpolantFactoryMethodSmooth=void 0;class ColorKeyframeTrack extends KeyframeTrack{}ColorKeyframeTrack.prototype.ValueTypeName="color";class NumberKeyframeTrack extends KeyframeTrack{}NumberKeyframeTrack.prototype.ValueTypeName="number";class QuaternionLinearInterpolant extends Interpolant{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=(i-t)/(r-t);let u=e*l;for(let h=u+l;u!==h;u+=4)Quaternion.slerpFlat(s,0,o,u-l,o,u,c);return s}}class QuaternionKeyframeTrack extends KeyframeTrack{InterpolantFactoryMethodLinear(e){return new QuaternionLinearInterpolant(this.times,this.values,this.getValueSize(),e)}}QuaternionKeyframeTrack.prototype.ValueTypeName="quaternion";QuaternionKeyframeTrack.prototype.DefaultInterpolation=InterpolateLinear;QuaternionKeyframeTrack.prototype.InterpolantFactoryMethodSmooth=void 0;class StringKeyframeTrack extends KeyframeTrack{}StringKeyframeTrack.prototype.ValueTypeName="string";StringKeyframeTrack.prototype.ValueBufferType=Array;StringKeyframeTrack.prototype.DefaultInterpolation=InterpolateDiscrete;StringKeyframeTrack.prototype.InterpolantFactoryMethodLinear=void 0;StringKeyframeTrack.prototype.InterpolantFactoryMethodSmooth=void 0;class VectorKeyframeTrack extends KeyframeTrack{}VectorKeyframeTrack.prototype.ValueTypeName="vector";class AnimationClip{constructor(e,t=-1,i,r=NormalAnimationBlendMode){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=generateUUID(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,l=i.length;o!==l;++o)t.push(parseKeyframeTrack(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(KeyframeTrack.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let l=0;l<s;l++){let c=[],u=[];c.push((l+s-1)%s,l,(l+1)%s),u.push(0,1,0);const h=getKeyframeOrder(c);c=sortedArray(c,1,h),u=sortedArray(u,1,h),!r&&c[0]===0&&(c.push(s),u.push(u[0])),o.push(new NumberKeyframeTrack(".morphTargetInfluences["+t[l].name+"]",c,u).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let l=0,c=e.length;l<c;l++){const u=e[l],h=u.name.match(s);if(h&&h.length>1){const d=h[1];let p=r[d];p||(r[d]=p=[]),p.push(u)}}const o=[];for(const l in r)o.push(this.CreateFromMorphTargetSequence(l,r[l],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,p,m,g,v){if(m.length!==0){const _=[],y=[];flattenJSON(m,_,y,g),_.length!==0&&v.push(new d(p,_,y))}},r=[],s=e.name||"default",o=e.fps||30,l=e.blendMode;let c=e.length||-1;const u=e.hierarchy||[];for(let d=0;d<u.length;d++){const p=u[d].keys;if(!(!p||p.length===0))if(p[0].morphTargets){const m={};let g;for(g=0;g<p.length;g++)if(p[g].morphTargets)for(let v=0;v<p[g].morphTargets.length;v++)m[p[g].morphTargets[v]]=-1;for(const v in m){const _=[],y=[];for(let b=0;b!==p[g].morphTargets.length;++b){const x=p[g];_.push(x.time),y.push(x.morphTarget===v?1:0)}r.push(new NumberKeyframeTrack(".morphTargetInfluence["+v+"]",_,y))}c=m.length*o}else{const m=".bones["+t[d].name+"]";i(VectorKeyframeTrack,m+".position",p,"pos",r),i(QuaternionKeyframeTrack,m+".quaternion",p,"rot",r),i(VectorKeyframeTrack,m+".scale",p,"scl",r)}}return r.length===0?null:new this(s,c,r,l)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function getTrackTypeForValueTypeName(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return NumberKeyframeTrack;case"vector":case"vector2":case"vector3":case"vector4":return VectorKeyframeTrack;case"color":return ColorKeyframeTrack;case"quaternion":return QuaternionKeyframeTrack;case"bool":case"boolean":return BooleanKeyframeTrack;case"string":return StringKeyframeTrack}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function parseKeyframeTrack(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=getTrackTypeForValueTypeName(a.type);if(a.times===void 0){const t=[],i=[];flattenJSON(a.keys,t,i,"value"),a.times=t,a.values=i}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Cache={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class LoadingManager{constructor(e,t,i){const r=this;let s=!1,o=0,l=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){l++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,l),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return u.push(h,d),this},this.removeHandler=function(h){const d=u.indexOf(h);return d!==-1&&u.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=u.length;d<p;d+=2){const m=u[d],g=u[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const DefaultLoadingManager=new LoadingManager;class Loader{constructor(e){this.manager=e!==void 0?e:DefaultLoadingManager,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const loading={};class HttpError extends Error{constructor(e,t){super(e),this.response=t}}class FileLoader extends Loader{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Cache.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(loading[e]!==void 0){loading[e].push({onLoad:t,onProgress:i,onError:r});return}loading[e]=[],loading[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,c=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=loading[e],d=u.body.getReader(),p=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),m=p?parseInt(p):0,g=m!==0;let v=0;const _=new ReadableStream({start(y){b();function b(){d.read().then(({done:x,value:S})=>{if(x)y.close();else{v+=S.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:m});for(let E=0,R=h.length;E<R;E++){const w=h[E];w.onProgress&&w.onProgress(M)}y.enqueue(S),b()}})}}});return new Response(_)}else throw new HttpError(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,l));case"json":return u.json();default:if(l===void 0)return u.text();{const d=/charset="?([^;"\s]*)"?/i.exec(l),p=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(p);return u.arrayBuffer().then(g=>m.decode(g))}}}).then(u=>{Cache.add(e,u);const h=loading[e];delete loading[e];for(let d=0,p=h.length;d<p;d++){const m=h[d];m.onLoad&&m.onLoad(u)}}).catch(u=>{const h=loading[e];if(h===void 0)throw this.manager.itemError(e),u;delete loading[e];for(let d=0,p=h.length;d<p;d++){const m=h[d];m.onError&&m.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class AnimationLoader extends Loader{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new FileLoader(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{t(s.parse(JSON.parse(l)))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e){const t=[];for(let i=0;i<e.length;i++){const r=AnimationClip.parse(e[i]);t.push(r)}return t}}class CompressedTextureLoader extends Loader{constructor(e){super(e)}load(e,t,i,r){const s=this,o=[],l=new CompressedTexture,c=new FileLoader(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(s.withCredentials);let u=0;function h(d){c.load(e[d],function(p){const m=s.parse(p,!0);o[d]={width:m.width,height:m.height,format:m.format,mipmaps:m.mipmaps},u+=1,u===6&&(m.mipmapCount===1&&(l.minFilter=LinearFilter),l.image=o,l.format=m.format,l.needsUpdate=!0,t&&t(l))},i,r)}if(Array.isArray(e))for(let d=0,p=e.length;d<p;++d)h(d);else c.load(e,function(d){const p=s.parse(d,!0);if(p.isCubemap){const m=p.mipmaps.length/p.mipmapCount;for(let g=0;g<m;g++){o[g]={mipmaps:[]};for(let v=0;v<p.mipmapCount;v++)o[g].mipmaps.push(p.mipmaps[g*p.mipmapCount+v]),o[g].format=p.format,o[g].width=p.width,o[g].height=p.height}l.image=o}else l.image.width=p.width,l.image.height=p.height,l.mipmaps=p.mipmaps;p.mipmapCount===1&&(l.minFilter=LinearFilter),l.format=p.format,l.needsUpdate=!0,t&&t(l)},i,r);return l}}class ImageLoader extends Loader{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Cache.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const l=createElementNS("img");function c(){h(),Cache.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(d){h(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){l.removeEventListener("load",c,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}}class CubeTextureLoader extends Loader{constructor(e){super(e)}load(e,t,i,r){const s=new CubeTexture,o=new ImageLoader(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let l=0;function c(u){o.load(e[u],function(h){s.images[u]=h,l++,l===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let u=0;u<e.length;++u)c(u);return s}}class DataTextureLoader extends Loader{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new DataTexture,l=new FileLoader(this.manager);return l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setPath(this.path),l.setWithCredentials(s.withCredentials),l.load(e,function(c){const u=s.parse(c);u&&(u.image!==void 0?o.image=u.image:u.data!==void 0&&(o.image.width=u.width,o.image.height=u.height,o.image.data=u.data),o.wrapS=u.wrapS!==void 0?u.wrapS:ClampToEdgeWrapping,o.wrapT=u.wrapT!==void 0?u.wrapT:ClampToEdgeWrapping,o.magFilter=u.magFilter!==void 0?u.magFilter:LinearFilter,o.minFilter=u.minFilter!==void 0?u.minFilter:LinearFilter,o.anisotropy=u.anisotropy!==void 0?u.anisotropy:1,u.encoding!==void 0&&(o.encoding=u.encoding),u.flipY!==void 0&&(o.flipY=u.flipY),u.format!==void 0&&(o.format=u.format),u.type!==void 0&&(o.type=u.type),u.mipmaps!==void 0&&(o.mipmaps=u.mipmaps,o.minFilter=LinearMipmapLinearFilter),u.mipmapCount===1&&(o.minFilter=LinearFilter),u.generateMipmaps!==void 0&&(o.generateMipmaps=u.generateMipmaps),o.needsUpdate=!0,t&&t(o,u))},i,r),o}}class TextureLoader extends Loader{constructor(e){super(e)}load(e,t,i,r){const s=new Texture,o=new ImageLoader(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Light extends Object3D{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Color(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class HemisphereLight extends Light{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Object3D.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Color(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _projScreenMatrix$1=new Matrix4,_lightPositionWorld$1=new Vector3,_lookTarget$1=new Vector3;class LightShadow{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vector2(512,512),this.map=null,this.mapPass=null,this.matrix=new Matrix4,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Frustum,this._frameExtents=new Vector2(1,1),this._viewportCount=1,this._viewports=[new Vector4(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;_lightPositionWorld$1.setFromMatrixPosition(e.matrixWorld),t.position.copy(_lightPositionWorld$1),_lookTarget$1.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_lookTarget$1),t.updateMatrixWorld(),_projScreenMatrix$1.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_projScreenMatrix$1),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_projScreenMatrix$1)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class SpotLightShadow extends LightShadow{constructor(){super(new PerspectiveCamera(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=RAD2DEG*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class SpotLight extends Light{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Object3D.DEFAULT_UP),this.updateMatrix(),this.target=new Object3D,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new SpotLightShadow}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const _projScreenMatrix=new Matrix4,_lightPositionWorld=new Vector3,_lookTarget=new Vector3;class PointLightShadow extends LightShadow{constructor(){super(new PerspectiveCamera(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Vector2(4,2),this._viewportCount=6,this._viewports=[new Vector4(2,1,1,1),new Vector4(0,1,1,1),new Vector4(3,1,1,1),new Vector4(1,1,1,1),new Vector4(3,0,1,1),new Vector4(1,0,1,1)],this._cubeDirections=[new Vector3(1,0,0),new Vector3(-1,0,0),new Vector3(0,0,1),new Vector3(0,0,-1),new Vector3(0,1,0),new Vector3(0,-1,0)],this._cubeUps=[new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,0,1),new Vector3(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),_lightPositionWorld.setFromMatrixPosition(e.matrixWorld),i.position.copy(_lightPositionWorld),_lookTarget.copy(i.position),_lookTarget.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(_lookTarget),i.updateMatrixWorld(),r.makeTranslation(-_lightPositionWorld.x,-_lightPositionWorld.y,-_lightPositionWorld.z),_projScreenMatrix.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_projScreenMatrix)}}class PointLight extends Light{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new PointLightShadow}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class DirectionalLightShadow extends LightShadow{constructor(){super(new OrthographicCamera(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class DirectionalLight extends Light{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Object3D.DEFAULT_UP),this.updateMatrix(),this.target=new Object3D,this.shadow=new DirectionalLightShadow}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class AmbientLight extends Light{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class RectAreaLight extends Light{constructor(e,t,i=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class SphericalHarmonics3{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new Vector3)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*i),t.addScaledVector(o[4],1.092548*(i*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(i*s)),t.addScaledVector(o[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*i),t.addScaledVector(o[4],2*.429043*i*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*i*s),t.addScaledVector(o[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const i=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-r*r)}}class LightProbe extends Light{constructor(e=new SphericalHarmonics3,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class MaterialLoader extends Loader{constructor(e){super(e),this.textures={}}load(e,t,i,r){const s=this,o=new FileLoader(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(l){try{t(s.parse(JSON.parse(l)))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e){const t=this.textures;function i(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const r=MaterialLoader.createMaterialFromType(e.type);if(e.uuid!==void 0&&(r.uuid=e.uuid),e.name!==void 0&&(r.name=e.name),e.color!==void 0&&r.color!==void 0&&r.color.setHex(e.color),e.roughness!==void 0&&(r.roughness=e.roughness),e.metalness!==void 0&&(r.metalness=e.metalness),e.sheen!==void 0&&(r.sheen=e.sheen),e.sheenColor!==void 0&&(r.sheenColor=new Color().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(r.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&r.emissive!==void 0&&r.emissive.setHex(e.emissive),e.specular!==void 0&&r.specular!==void 0&&r.specular.setHex(e.specular),e.specularIntensity!==void 0&&(r.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&r.specularColor!==void 0&&r.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(r.shininess=e.shininess),e.clearcoat!==void 0&&(r.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(r.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(r.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(r.transmission=e.transmission),e.thickness!==void 0&&(r.thickness=e.thickness),e.attenuationDistance!==void 0&&(r.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&r.attenuationColor!==void 0&&r.attenuationColor.setHex(e.attenuationColor),e.fog!==void 0&&(r.fog=e.fog),e.flatShading!==void 0&&(r.flatShading=e.flatShading),e.blending!==void 0&&(r.blending=e.blending),e.combine!==void 0&&(r.combine=e.combine),e.side!==void 0&&(r.side=e.side),e.shadowSide!==void 0&&(r.shadowSide=e.shadowSide),e.opacity!==void 0&&(r.opacity=e.opacity),e.transparent!==void 0&&(r.transparent=e.transparent),e.alphaTest!==void 0&&(r.alphaTest=e.alphaTest),e.depthTest!==void 0&&(r.depthTest=e.depthTest),e.depthWrite!==void 0&&(r.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(r.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(r.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(r.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(r.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(r.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(r.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(r.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(r.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(r.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(r.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(r.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(r.rotation=e.rotation),e.linewidth!==1&&(r.linewidth=e.linewidth),e.dashSize!==void 0&&(r.dashSize=e.dashSize),e.gapSize!==void 0&&(r.gapSize=e.gapSize),e.scale!==void 0&&(r.scale=e.scale),e.polygonOffset!==void 0&&(r.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(r.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(r.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(r.dithering=e.dithering),e.alphaToCoverage!==void 0&&(r.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(r.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(r.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(r.visible=e.visible),e.toneMapped!==void 0&&(r.toneMapped=e.toneMapped),e.userData!==void 0&&(r.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?r.vertexColors=e.vertexColors>0:r.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(r.uniforms[s]={},o.type){case"t":r.uniforms[s].value=i(o.value);break;case"c":r.uniforms[s].value=new Color().setHex(o.value);break;case"v2":r.uniforms[s].value=new Vector2().fromArray(o.value);break;case"v3":r.uniforms[s].value=new Vector3().fromArray(o.value);break;case"v4":r.uniforms[s].value=new Vector4().fromArray(o.value);break;case"m3":r.uniforms[s].value=new Matrix3().fromArray(o.value);break;case"m4":r.uniforms[s].value=new Matrix4().fromArray(o.value);break;default:r.uniforms[s].value=o.value}}if(e.defines!==void 0&&(r.defines=e.defines),e.vertexShader!==void 0&&(r.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(r.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(r.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)r.extensions[s]=e.extensions[s];if(e.size!==void 0&&(r.size=e.size),e.sizeAttenuation!==void 0&&(r.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(r.map=i(e.map)),e.matcap!==void 0&&(r.matcap=i(e.matcap)),e.alphaMap!==void 0&&(r.alphaMap=i(e.alphaMap)),e.bumpMap!==void 0&&(r.bumpMap=i(e.bumpMap)),e.bumpScale!==void 0&&(r.bumpScale=e.bumpScale),e.normalMap!==void 0&&(r.normalMap=i(e.normalMap)),e.normalMapType!==void 0&&(r.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),r.normalScale=new Vector2().fromArray(s)}return e.displacementMap!==void 0&&(r.displacementMap=i(e.displacementMap)),e.displacementScale!==void 0&&(r.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(r.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(r.roughnessMap=i(e.roughnessMap)),e.metalnessMap!==void 0&&(r.metalnessMap=i(e.metalnessMap)),e.emissiveMap!==void 0&&(r.emissiveMap=i(e.emissiveMap)),e.emissiveIntensity!==void 0&&(r.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(r.specularMap=i(e.specularMap)),e.specularIntensityMap!==void 0&&(r.specularIntensityMap=i(e.specularIntensityMap)),e.specularColorMap!==void 0&&(r.specularColorMap=i(e.specularColorMap)),e.envMap!==void 0&&(r.envMap=i(e.envMap)),e.envMapIntensity!==void 0&&(r.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(r.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(r.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(r.lightMap=i(e.lightMap)),e.lightMapIntensity!==void 0&&(r.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(r.aoMap=i(e.aoMap)),e.aoMapIntensity!==void 0&&(r.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(r.gradientMap=i(e.gradientMap)),e.clearcoatMap!==void 0&&(r.clearcoatMap=i(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(r.clearcoatRoughnessMap=i(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(r.clearcoatNormalMap=i(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(r.clearcoatNormalScale=new Vector2().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(r.iridescenceMap=i(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(r.iridescenceThicknessMap=i(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(r.transmissionMap=i(e.transmissionMap)),e.thicknessMap!==void 0&&(r.thicknessMap=i(e.thicknessMap)),e.sheenColorMap!==void 0&&(r.sheenColorMap=i(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(r.sheenRoughnessMap=i(e.sheenRoughnessMap)),r}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial,SpriteMaterial,RawShaderMaterial,ShaderMaterial,PointsMaterial,MeshPhysicalMaterial,MeshStandardMaterial,MeshPhongMaterial,MeshToonMaterial,MeshNormalMaterial,MeshLambertMaterial,MeshDepthMaterial,MeshDistanceMaterial,MeshBasicMaterial,MeshMatcapMaterial,LineDashedMaterial,LineBasicMaterial,Material};return new t[e]}}class LoaderUtils{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class InstancedBufferGeometry extends BufferGeometry{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class BufferGeometryLoader extends Loader{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new FileLoader(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(l){try{t(s.parse(JSON.parse(l)))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e){const t={},i={};function r(m,g){if(t[g]!==void 0)return t[g];const _=m.interleavedBuffers[g],y=s(m,_.buffer),b=getTypedArray(_.type,y),x=new InterleavedBuffer(b,_.stride);return x.uuid=_.uuid,t[g]=x,x}function s(m,g){if(i[g]!==void 0)return i[g];const _=m.arrayBuffers[g],y=new Uint32Array(_).buffer;return i[g]=y,y}const o=e.isInstancedBufferGeometry?new InstancedBufferGeometry:new BufferGeometry,l=e.data.index;if(l!==void 0){const m=getTypedArray(l.type,l.array);o.setIndex(new BufferAttribute(m,1))}const c=e.data.attributes;for(const m in c){const g=c[m];let v;if(g.isInterleavedBufferAttribute){const _=r(e.data,g.data);v=new InterleavedBufferAttribute(_,g.itemSize,g.offset,g.normalized)}else{const _=getTypedArray(g.type,g.array),y=g.isInstancedBufferAttribute?InstancedBufferAttribute:BufferAttribute;v=new y(_,g.itemSize,g.normalized)}g.name!==void 0&&(v.name=g.name),g.usage!==void 0&&v.setUsage(g.usage),g.updateRange!==void 0&&(v.updateRange.offset=g.updateRange.offset,v.updateRange.count=g.updateRange.count),o.setAttribute(m,v)}const u=e.data.morphAttributes;if(u)for(const m in u){const g=u[m],v=[];for(let _=0,y=g.length;_<y;_++){const b=g[_];let x;if(b.isInterleavedBufferAttribute){const S=r(e.data,b.data);x=new InterleavedBufferAttribute(S,b.itemSize,b.offset,b.normalized)}else{const S=getTypedArray(b.type,b.array);x=new BufferAttribute(S,b.itemSize,b.normalized)}b.name!==void 0&&(x.name=b.name),v.push(x)}o.morphAttributes[m]=v}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let m=0,g=d.length;m!==g;++m){const v=d[m];o.addGroup(v.start,v.count,v.materialIndex)}const p=e.data.boundingSphere;if(p!==void 0){const m=new Vector3;p.center!==void 0&&m.fromArray(p.center),o.boundingSphere=new Sphere(m,p.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class ObjectLoader extends Loader{constructor(e){super(e)}load(e,t,i,r){const s=this,o=this.path===""?LoaderUtils.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const l=new FileLoader(this.manager);l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){let u=null;try{u=JSON.parse(c)}catch(d){r!==void 0&&r(d),console.error("THREE:ObjectLoader: Can't parse "+e+".",d.message);return}const h=u.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){r!==void 0&&r(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(u,t)},i,r)}async loadAsync(e,t){const i=this,r=this.path===""?LoaderUtils.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;const s=new FileLoader(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const o=await s.loadAsync(e,t),l=JSON.parse(o),c=l.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await i.parseAsync(l)}parse(e,t){const i=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,r),o=this.parseImages(e.images,function(){t!==void 0&&t(u)}),l=this.parseTextures(e.textures,o),c=this.parseMaterials(e.materials,l),u=this.parseObject(e.object,s,c,l,i),h=this.parseSkeletons(e.skeletons,u);if(this.bindSkeletons(u,h),t!==void 0){let d=!1;for(const p in o)if(o[p].data instanceof HTMLImageElement){d=!0;break}d===!1&&t(u)}return u}async parseAsync(e){const t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),s=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,s),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,t),u=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,u),c}parseShapes(e){const t={};if(e!==void 0)for(let i=0,r=e.length;i<r;i++){const s=new Shape().fromJSON(e[i]);t[s.uuid]=s}return t}parseSkeletons(e,t){const i={},r={};if(t.traverse(function(s){s.isBone&&(r[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){const l=new Skeleton().fromJSON(e[s],r);i[l.uuid]=l}return i}parseGeometries(e,t){const i={};if(e!==void 0){const r=new BufferGeometryLoader;for(let s=0,o=e.length;s<o;s++){let l;const c=e[s];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":l=r.parse(c);break;default:c.type in Geometries?l=Geometries[c.type].fromJSON(c,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}l.uuid=c.uuid,c.name!==void 0&&(l.name=c.name),c.userData!==void 0&&(l.userData=c.userData),i[c.uuid]=l}}return i}parseMaterials(e,t){const i={},r={};if(e!==void 0){const s=new MaterialLoader;s.setTextures(t);for(let o=0,l=e.length;o<l;o++){const c=e[o];i[c.uuid]===void 0&&(i[c.uuid]=s.parse(c)),r[c.uuid]=i[c.uuid]}}return r}parseAnimations(e){const t={};if(e!==void 0)for(let i=0;i<e.length;i++){const r=e[i],s=AnimationClip.parse(r);t[s.uuid]=s}return t}parseImages(e,t){const i=this,r={};let s;function o(c){return i.manager.itemStart(c),s.load(c,function(){i.manager.itemEnd(c)},void 0,function(){i.manager.itemError(c),i.manager.itemEnd(c)})}function l(c){if(typeof c=="string"){const u=c,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(u)?u:i.resourcePath+u;return o(h)}else return c.data?{data:getTypedArray(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new LoadingManager(t);s=new ImageLoader(c),s.setCrossOrigin(this.crossOrigin);for(let u=0,h=e.length;u<h;u++){const d=e[u],p=d.url;if(Array.isArray(p)){const m=[];for(let g=0,v=p.length;g<v;g++){const _=p[g],y=l(_);y!==null&&(y instanceof HTMLImageElement?m.push(y):m.push(new DataTexture(y.data,y.width,y.height)))}r[d.uuid]=new Source(m)}else{const m=l(d.url);r[d.uuid]=new Source(m)}}}return r}async parseImagesAsync(e){const t=this,i={};let r;async function s(o){if(typeof o=="string"){const l=o,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:t.resourcePath+l;return await r.loadAsync(c)}else return o.data?{data:getTypedArray(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){r=new ImageLoader(this.manager),r.setCrossOrigin(this.crossOrigin);for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.url;if(Array.isArray(u)){const h=[];for(let d=0,p=u.length;d<p;d++){const m=u[d],g=await s(m);g!==null&&(g instanceof HTMLImageElement?h.push(g):h.push(new DataTexture(g.data,g.width,g.height)))}i[c.uuid]=new Source(h)}else{const h=await s(c.url);i[c.uuid]=new Source(h)}}}return i}parseTextures(e,t){function i(s,o){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const r={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const l=e[s];l.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',l.uuid),t[l.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",l.image);const c=t[l.image],u=c.data;let h;Array.isArray(u)?(h=new CubeTexture,u.length===6&&(h.needsUpdate=!0)):(u&&u.data?h=new DataTexture:h=new Texture,u&&(h.needsUpdate=!0)),h.source=c,h.uuid=l.uuid,l.name!==void 0&&(h.name=l.name),l.mapping!==void 0&&(h.mapping=i(l.mapping,TEXTURE_MAPPING)),l.offset!==void 0&&h.offset.fromArray(l.offset),l.repeat!==void 0&&h.repeat.fromArray(l.repeat),l.center!==void 0&&h.center.fromArray(l.center),l.rotation!==void 0&&(h.rotation=l.rotation),l.wrap!==void 0&&(h.wrapS=i(l.wrap[0],TEXTURE_WRAPPING),h.wrapT=i(l.wrap[1],TEXTURE_WRAPPING)),l.format!==void 0&&(h.format=l.format),l.internalFormat!==void 0&&(h.internalFormat=l.internalFormat),l.type!==void 0&&(h.type=l.type),l.encoding!==void 0&&(h.encoding=l.encoding),l.minFilter!==void 0&&(h.minFilter=i(l.minFilter,TEXTURE_FILTER)),l.magFilter!==void 0&&(h.magFilter=i(l.magFilter,TEXTURE_FILTER)),l.anisotropy!==void 0&&(h.anisotropy=l.anisotropy),l.flipY!==void 0&&(h.flipY=l.flipY),l.generateMipmaps!==void 0&&(h.generateMipmaps=l.generateMipmaps),l.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=l.premultiplyAlpha),l.unpackAlignment!==void 0&&(h.unpackAlignment=l.unpackAlignment),l.userData!==void 0&&(h.userData=l.userData),r[l.uuid]=h}return r}parseObject(e,t,i,r,s){let o;function l(p){return t[p]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",p),t[p]}function c(p){if(p!==void 0){if(Array.isArray(p)){const m=[];for(let g=0,v=p.length;g<v;g++){const _=p[g];i[_]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",_),m.push(i[_])}return m}return i[p]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",p),i[p]}}function u(p){return r[p]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",p),r[p]}let h,d;switch(e.type){case"Scene":o=new Scene,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new Color(e.background):o.background=u(e.background)),e.environment!==void 0&&(o.environment=u(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new Fog(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new FogExp2(e.fog.color,e.fog.density))),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity);break;case"PerspectiveCamera":o=new PerspectiveCamera(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new OrthographicCamera(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new AmbientLight(e.color,e.intensity);break;case"DirectionalLight":o=new DirectionalLight(e.color,e.intensity);break;case"PointLight":o=new PointLight(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new RectAreaLight(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new SpotLight(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":o=new HemisphereLight(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new LightProbe().fromJSON(e);break;case"SkinnedMesh":h=l(e.geometry),d=c(e.material),o=new SkinnedMesh(h,d),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":h=l(e.geometry),d=c(e.material),o=new Mesh(h,d);break;case"InstancedMesh":h=l(e.geometry),d=c(e.material);const p=e.count,m=e.instanceMatrix,g=e.instanceColor;o=new InstancedMesh(h,d,p),o.instanceMatrix=new InstancedBufferAttribute(new Float32Array(m.array),16),g!==void 0&&(o.instanceColor=new InstancedBufferAttribute(new Float32Array(g.array),g.itemSize));break;case"LOD":o=new LOD;break;case"Line":o=new Line(l(e.geometry),c(e.material));break;case"LineLoop":o=new LineLoop(l(e.geometry),c(e.material));break;case"LineSegments":o=new LineSegments(l(e.geometry),c(e.material));break;case"PointCloud":case"Points":o=new Points(l(e.geometry),c(e.material));break;case"Sprite":o=new Sprite(c(e.material));break;case"Group":o=new Group;break;case"Bone":o=new Bone;break;default:o=new Object3D}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const p=e.children;for(let m=0;m<p.length;m++)o.add(this.parseObject(p[m],t,i,r,s))}if(e.animations!==void 0){const p=e.animations;for(let m=0;m<p.length;m++){const g=p[m];o.animations.push(s[g])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const p=e.levels;for(let m=0;m<p.length;m++){const g=p[m],v=o.getObjectByProperty("uuid",g.object);v!==void 0&&o.addLevel(v,g.distance,g.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){const r=t[i.skeleton];r===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(r,i.bindMatrix)}})}}const TEXTURE_MAPPING={UVMapping,CubeReflectionMapping,CubeRefractionMapping,EquirectangularReflectionMapping,EquirectangularRefractionMapping,CubeUVReflectionMapping},TEXTURE_WRAPPING={RepeatWrapping,ClampToEdgeWrapping,MirroredRepeatWrapping},TEXTURE_FILTER={NearestFilter,NearestMipmapNearestFilter,NearestMipmapLinearFilter,LinearFilter,LinearMipmapNearestFilter,LinearMipmapLinearFilter};class ImageBitmapLoader extends Loader{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Cache.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader,fetch(e,l).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){Cache.add(e,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){r&&r(c),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}let _context;class AudioContext{static getContext(){return _context===void 0&&(_context=new(window.AudioContext||window.webkitAudioContext)),_context}static setContext(e){_context=e}}class AudioLoader extends Loader{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new FileLoader(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const c=l.slice(0);AudioContext.getContext().decodeAudioData(c,function(h){t(h)})}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}}class HemisphereLightProbe extends LightProbe{constructor(e,t,i=1){super(void 0,i),this.isHemisphereLightProbe=!0;const r=new Color().set(e),s=new Color().set(t),o=new Vector3(r.r,r.g,r.b),l=new Vector3(s.r,s.g,s.b),c=Math.sqrt(Math.PI),u=c*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(l).multiplyScalar(c),this.sh.coefficients[1].copy(o).sub(l).multiplyScalar(u)}}class AmbientLightProbe extends LightProbe{constructor(e,t=1){super(void 0,t),this.isAmbientLightProbe=!0;const i=new Color().set(e);this.sh.coefficients[0].set(i.r,i.g,i.b).multiplyScalar(2*Math.sqrt(Math.PI))}}const _eyeRight=new Matrix4,_eyeLeft=new Matrix4,_projectionMatrix=new Matrix4;class StereoCamera{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new PerspectiveCamera,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new PerspectiveCamera,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,_projectionMatrix.copy(e.projectionMatrix);const r=t.eyeSep/2,s=r*t.near/t.focus,o=t.near*Math.tan(DEG2RAD*t.fov*.5)/t.zoom;let l,c;_eyeLeft.elements[12]=-r,_eyeRight.elements[12]=r,l=-o*t.aspect+s,c=o*t.aspect+s,_projectionMatrix.elements[0]=2*t.near/(c-l),_projectionMatrix.elements[8]=(c+l)/(c-l),this.cameraL.projectionMatrix.copy(_projectionMatrix),l=-o*t.aspect-s,c=o*t.aspect-s,_projectionMatrix.elements[0]=2*t.near/(c-l),_projectionMatrix.elements[8]=(c+l)/(c-l),this.cameraR.projectionMatrix.copy(_projectionMatrix)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(_eyeLeft),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(_eyeRight)}}class Clock{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=now$1(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=now$1();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function now$1(){return(typeof performance>"u"?Date:performance).now()}const _position$1=new Vector3,_quaternion$1=new Quaternion,_scale$1=new Vector3,_orientation$1=new Vector3;class AudioListener extends Object3D{constructor(){super(),this.type="AudioListener",this.context=AudioContext.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Clock}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(_position$1,_quaternion$1,_scale$1),_orientation$1.set(0,0,-1).applyQuaternion(_quaternion$1),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(_position$1.x,r),t.positionY.linearRampToValueAtTime(_position$1.y,r),t.positionZ.linearRampToValueAtTime(_position$1.z,r),t.forwardX.linearRampToValueAtTime(_orientation$1.x,r),t.forwardY.linearRampToValueAtTime(_orientation$1.y,r),t.forwardZ.linearRampToValueAtTime(_orientation$1.z,r),t.upX.linearRampToValueAtTime(i.x,r),t.upY.linearRampToValueAtTime(i.y,r),t.upZ.linearRampToValueAtTime(i.z,r)}else t.setPosition(_position$1.x,_position$1.y,_position$1.z),t.setOrientation(_orientation$1.x,_orientation$1.y,_orientation$1.z,i.x,i.y,i.z)}}class Audio extends Object3D{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const _position=new Vector3,_quaternion=new Quaternion,_scale=new Vector3,_orientation=new Vector3;class PositionalAudio extends Audio{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(_position,_quaternion,_scale),_orientation.set(0,0,1).applyQuaternion(_quaternion);const t=this.panner;if(t.positionX){const i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(_position.x,i),t.positionY.linearRampToValueAtTime(_position.y,i),t.positionZ.linearRampToValueAtTime(_position.z,i),t.orientationX.linearRampToValueAtTime(_orientation.x,i),t.orientationY.linearRampToValueAtTime(_orientation.y,i),t.orientationZ.linearRampToValueAtTime(_orientation.z,i)}else t.setPosition(_position.x,_position.y,_position.z),t.setOrientation(_orientation.x,_orientation.y,_orientation.z)}}class AudioAnalyser{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}}class PropertyMixer{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,r=this.valueSize,s=e*r+r;let o=this.cumulativeWeight;if(o===0){for(let l=0;l!==r;++l)i[s+l]=i[l];o=t}else{o+=t;const l=t/o;this._mixBufferRegion(i,s,0,l,r)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,l=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(i,r,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let c=t,u=t+t;c!==u;++c)if(i[c]!==i[c+t]){l.setValue(i,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let s=i,o=r;s!==o;++s)t[s]=t[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[i+o]}_slerp(e,t,i,r){Quaternion.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,s){const o=this._workIndex*s;Quaternion.multiplyQuaternionsFlat(e,o,e,t,e,i),Quaternion.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,i,r,s){const o=1-r;for(let l=0;l!==s;++l){const c=t+l;e[c]=e[c]*o+e[i+l]*r}}_lerpAdditive(e,t,i,r,s){for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]+e[i+o]*r}}}const _RESERVED_CHARS_RE="\\[\\]\\.:\\/",_reservedRe=new RegExp("["+_RESERVED_CHARS_RE+"]","g"),_wordChar="[^"+_RESERVED_CHARS_RE+"]",_wordCharOrDot="[^"+_RESERVED_CHARS_RE.replace("\\.","")+"]",_directoryRe=/((?:WC+[\/:])*)/.source.replace("WC",_wordChar),_nodeRe=/(WCOD+)?/.source.replace("WCOD",_wordCharOrDot),_objectRe=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_wordChar),_propertyRe=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_wordChar),_trackRe=new RegExp("^"+_directoryRe+_nodeRe+_objectRe+_propertyRe+"$"),_supportedObjectNames=["material","materials","bones","map"];class Composite{constructor(e,t,i){const r=i||PropertyBinding.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class PropertyBinding{constructor(e,t,i){this.path=t,this.parsedPath=i||PropertyBinding.parseTrackName(t),this.node=PropertyBinding.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new PropertyBinding.Composite(e,t,i):new PropertyBinding(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_reservedRe,"")}static parseTrackName(e){const t=_trackRe.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);_supportedObjectNames.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const l=s[o];if(l.name===t||l.uuid===t)return l;const c=i(l.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=PropertyBinding.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[r];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}PropertyBinding.Composite=Composite;PropertyBinding.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};PropertyBinding.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};PropertyBinding.prototype.GetterByBindingType=[PropertyBinding.prototype._getValue_direct,PropertyBinding.prototype._getValue_array,PropertyBinding.prototype._getValue_arrayElement,PropertyBinding.prototype._getValue_toArray];PropertyBinding.prototype.SetterByBindingTypeAndVersioning=[[PropertyBinding.prototype._setValue_direct,PropertyBinding.prototype._setValue_direct_setNeedsUpdate,PropertyBinding.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[PropertyBinding.prototype._setValue_array,PropertyBinding.prototype._setValue_array_setNeedsUpdate,PropertyBinding.prototype._setValue_array_setMatrixWorldNeedsUpdate],[PropertyBinding.prototype._setValue_arrayElement,PropertyBinding.prototype._setValue_arrayElement_setNeedsUpdate,PropertyBinding.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[PropertyBinding.prototype._setValue_fromArray,PropertyBinding.prototype._setValue_fromArray_setNeedsUpdate,PropertyBinding.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class AnimationObjectGroup{constructor(){this.isAnimationObjectGroup=!0,this.uuid=generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let i=0,r=arguments.length;i!==r;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length;let l,c=e.length,u=this.nCachedObjects_;for(let h=0,d=arguments.length;h!==d;++h){const p=arguments[h],m=p.uuid;let g=t[m];if(g===void 0){g=c++,t[m]=g,e.push(p);for(let v=0,_=o;v!==_;++v)s[v].push(new PropertyBinding(p,i[v],r[v]))}else if(g<u){l=e[g];const v=--u,_=e[v];t[_.uuid]=g,e[g]=_,t[m]=v,e[v]=p;for(let y=0,b=o;y!==b;++y){const x=s[y],S=x[v];let M=x[g];x[g]=S,M===void 0&&(M=new PropertyBinding(p,i[y],r[y])),x[v]=M}}else e[g]!==l&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=u}remove(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length;let s=this.nCachedObjects_;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],u=c.uuid,h=t[u];if(h!==void 0&&h>=s){const d=s++,p=e[d];t[p.uuid]=h,e[h]=p,t[u]=d,e[d]=c;for(let m=0,g=r;m!==g;++m){const v=i[m],_=v[d],y=v[h];v[h]=_,v[d]=y}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length;let s=this.nCachedObjects_,o=e.length;for(let l=0,c=arguments.length;l!==c;++l){const u=arguments[l],h=u.uuid,d=t[h];if(d!==void 0)if(delete t[h],d<s){const p=--s,m=e[p],g=--o,v=e[g];t[m.uuid]=d,e[d]=m,t[v.uuid]=p,e[p]=v,e.pop();for(let _=0,y=r;_!==y;++_){const b=i[_],x=b[p],S=b[g];b[d]=x,b[p]=S,b.pop()}}else{const p=--o,m=e[p];p>0&&(t[m.uuid]=d),e[d]=m,e.pop();for(let g=0,v=r;g!==v;++g){const _=i[g];_[d]=_[p],_.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const i=this._bindingsIndicesByPath;let r=i[e];const s=this._bindings;if(r!==void 0)return s[r];const o=this._paths,l=this._parsedPaths,c=this._objects,u=c.length,h=this.nCachedObjects_,d=new Array(u);r=s.length,i[e]=r,o.push(e),l.push(t),s.push(d);for(let p=h,m=c.length;p!==m;++p){const g=c[p];d[p]=new PropertyBinding(g,e,t)}return d}unsubscribe_(e){const t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){const r=this._paths,s=this._parsedPaths,o=this._bindings,l=o.length-1,c=o[l],u=e[l];t[u]=i,o[i]=c,o.pop(),s[i]=s[l],s.pop(),r[i]=r[l],r.pop()}}}class AnimationAction{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;const s=t.tracks,o=s.length,l=new Array(o),c={endingStart:ZeroCurvatureEnding,endingEnd:ZeroCurvatureEnding};for(let u=0;u!==o;++u){const h=s[u].createInterpolant(null);l[u]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=l,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=LoopRepeat,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const r=this._clip.duration,s=e._clip.duration,o=s/r,l=r/s;e.warp(1,o,t),this.warp(l,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const r=this._mixer,s=r.time,o=this.timeScale;let l=this._timeScaleInterpolant;l===null&&(l=r._lendControlInterpolant(),this._timeScaleInterpolant=l);const c=l.parameterPositions,u=l.sampleValues;return c[0]=s,c[1]=s+i,u[0]=e/o,u[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*i;c<0||i===0?t=0:(this._startTime=null,t=i*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),l=this._updateWeight(e);if(l>0){const c=this._interpolants,u=this._propertyBindings;switch(this.blendMode){case AdditiveAnimationBlendMode:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(o),u[h].accumulateAdditive(l);break;case NormalAnimationBlendMode:default:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(o),u[h].accumulate(r,l)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let r=this.time+e,s=this._loopCount;const o=i===LoopPingPong;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(i===LoopOnce){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const l=Math.floor(r/t);r-=t*l,s+=Math.abs(l);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const u=e<0;this._setEndings(u,!u,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:l})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,i){const r=this._interpolantSettings;i?(r.endingStart=ZeroSlopeEnding,r.endingEnd=ZeroSlopeEnding):(e?r.endingStart=this.zeroSlopeAtStart?ZeroSlopeEnding:ZeroCurvatureEnding:r.endingStart=WrapAroundEnding,t?r.endingEnd=this.zeroSlopeAtEnd?ZeroSlopeEnding:ZeroCurvatureEnding:r.endingEnd=WrapAroundEnding)}_scheduleFading(e,t,i){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,c[0]=t,l[1]=s+e,c[1]=i,this}}const _controlInterpolantsResultBuffer=new Float32Array(1);class AnimationMixer extends EventDispatcher{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,l=e._interpolants,c=i.uuid,u=this._bindingsByRootAndName;let h=u[c];h===void 0&&(h={},u[c]=h);for(let d=0;d!==s;++d){const p=r[d],m=p.name;let g=h[m];if(g!==void 0)++g.referenceCount,o[d]=g;else{if(g=o[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,m));continue}const v=t&&t._propertyBindings[d].binding.parsedPath;g=new PropertyMixer(PropertyBinding.create(i,m,v),p.ValueTypeName,p.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,m),o[d]=g}l[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,i)}const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const r=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const l=o.knownActions;e._byClipCacheIndex=l.length,l.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,l=o[s],c=l.knownActions,u=c[c.length-1],h=e._byClipCacheIndex;u._byClipCacheIndex=h,c[h]=u,c.pop(),e._byClipCacheIndex=null;const d=l.actionByRoot,p=(e._localRoot||this._root).uuid;delete d[p],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[t];o===void 0&&(o={},r[t]=o),o[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,r=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,l=o[r],c=t[t.length-1],u=e._cacheIndex;c._cacheIndex=u,t[u]=c,t.pop(),delete l[s],Object.keys(l).length===0&&delete o[r]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new LinearInterpolant(new Float32Array(2),new Float32Array(2),1,_controlInterpolantsResultBuffer),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const r=t||this._root,s=r.uuid;let o=typeof e=="string"?AnimationClip.findByName(r,e):e;const l=o!==null?o.uuid:e,c=this._actionsByClip[l];let u=null;if(i===void 0&&(o!==null?i=o.blendMode:i=NormalAnimationBlendMode),c!==void 0){const d=c.actionByRoot[s];if(d!==void 0&&d.blendMode===i)return d;u=c.knownActions[0],o===null&&(o=u._clip)}if(o===null)return null;const h=new AnimationAction(this,o,t,i);return this._bindAction(h,u),this._addInactiveAction(h,l,s),h}existingAction(e,t){const i=t||this._root,r=i.uuid,s=typeof e=="string"?AnimationClip.findByName(i,e):e,o=s?s.uuid:e,l=this._actionsByClip[o];return l!==void 0&&l.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let u=0;u!==i;++u)t[u]._update(r,e,s,o);const l=this._bindings,c=this._nActiveBindings;for(let u=0;u!==c;++u)l[u].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){const o=s.knownActions;for(let l=0,c=o.length;l!==c;++l){const u=o[l];this._deactivateAction(u);const h=u._cacheIndex,d=t[t.length-1];u._cacheIndex=null,u._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(u)}delete r[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const o in i){const l=i[o].actionByRoot,c=l[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const o in s){const l=s[o];l.restoreOriginalState(),this._removeInactiveBinding(l)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class Uniform{constructor(e){this.value=e}clone(){return new Uniform(this.value.clone===void 0?this.value:this.value.clone())}}let id$2=0;class UniformsGroup extends EventDispatcher{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:id$2++}),this.name="",this.usage=StaticDrawUsage,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let i=0,r=t.length;i<r;i++)this.uniforms.push(t[i].clone());return this}clone(){return new this.constructor().copy(this)}}class InstancedInterleavedBuffer extends InterleavedBuffer{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class GLBufferAttribute{constructor(e,t,i,r,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=r,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class Raycaster{constructor(e,t,i=0,r=1/0){this.ray=new Ray(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Layers,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return intersectObject(e,this,i,t),i.sort(ascSort),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)intersectObject(e[r],this,i,t);return i.sort(ascSort),i}}function ascSort(a,e){return a.distance-e.distance}function intersectObject(a,e,t,i){if(a.layers.test(e.layers)&&a.raycast(e,t),i===!0){const r=a.children;for(let s=0,o=r.length;s<o;s++)intersectObject(r[s],e,t,!0)}}class Spherical{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(clamp$1(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Cylindrical{constructor(e=1,t=0,i=0){return this.radius=e,this.theta=t,this.y=i,this}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}}const _vector$4=new Vector2;class Box2{constructor(e=new Vector2(1/0,1/0),t=new Vector2(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_vector$4.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_vector$4).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _startP=new Vector3,_startEnd=new Vector3;class Line3{constructor(e=new Vector3,t=new Vector3){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){_startP.subVectors(e,this.start),_startEnd.subVectors(this.end,this.start);const i=_startEnd.dot(_startEnd);let s=_startEnd.dot(_startP)/i;return t&&(s=clamp$1(s,0,1)),s}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const _vector$3=new Vector3;class SpotLightHelper extends Object3D{constructor(e,t){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const i=new BufferGeometry,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,l=1,c=32;o<c;o++,l++){const u=o/c*Math.PI*2,h=l/c*Math.PI*2;r.push(Math.cos(u),Math.sin(u),1,Math.cos(h),Math.sin(h),1)}i.setAttribute("position",new Float32BufferAttribute(r,3));const s=new LineBasicMaterial({fog:!1,toneMapped:!1});this.cone=new LineSegments(i,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),_vector$3.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(_vector$3),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const _vector$2=new Vector3,_boneMatrix=new Matrix4,_matrixWorldInv=new Matrix4;class SkeletonHelper extends LineSegments{constructor(e){const t=getBoneList(e),i=new BufferGeometry,r=[],s=[],o=new Color(0,0,1),l=new Color(0,1,0);for(let u=0;u<t.length;u++){const h=t[u];h.parent&&h.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(l.r,l.g,l.b))}i.setAttribute("position",new Float32BufferAttribute(r,3)),i.setAttribute("color",new Float32BufferAttribute(s,3));const c=new LineBasicMaterial({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,i=this.geometry,r=i.getAttribute("position");_matrixWorldInv.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const l=t[s];l.parent&&l.parent.isBone&&(_boneMatrix.multiplyMatrices(_matrixWorldInv,l.matrixWorld),_vector$2.setFromMatrixPosition(_boneMatrix),r.setXYZ(o,_vector$2.x,_vector$2.y,_vector$2.z),_boneMatrix.multiplyMatrices(_matrixWorldInv,l.parent.matrixWorld),_vector$2.setFromMatrixPosition(_boneMatrix),r.setXYZ(o+1,_vector$2.x,_vector$2.y,_vector$2.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function getBoneList(a){const e=[];a.isBone===!0&&e.push(a);for(let t=0;t<a.children.length;t++)e.push.apply(e,getBoneList(a.children[t]));return e}class PointLightHelper extends Mesh{constructor(e,t,i){const r=new SphereGeometry(t,4,2),s=new MeshBasicMaterial({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const _vector$1=new Vector3,_color1=new Color,_color2=new Color;class HemisphereLightHelper extends Object3D{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";const r=new OctahedronGeometry(t);r.rotateY(Math.PI*.5),this.material=new MeshBasicMaterial({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=r.getAttribute("position"),o=new Float32Array(s.count*3);r.setAttribute("color",new BufferAttribute(o,3)),this.add(new Mesh(r,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");_color1.copy(this.light.color),_color2.copy(this.light.groundColor);for(let i=0,r=t.count;i<r;i++){const s=i<r/2?_color1:_color2;t.setXYZ(i,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(_vector$1.setFromMatrixPosition(this.light.matrixWorld).negate())}}class GridHelper extends LineSegments{constructor(e=10,t=10,i=4473924,r=8947848){i=new Color(i),r=new Color(r);const s=t/2,o=e/t,l=e/2,c=[],u=[];for(let p=0,m=0,g=-l;p<=t;p++,g+=o){c.push(-l,0,g,l,0,g),c.push(g,0,-l,g,0,l);const v=p===s?i:r;v.toArray(u,m),m+=3,v.toArray(u,m),m+=3,v.toArray(u,m),m+=3,v.toArray(u,m),m+=3}const h=new BufferGeometry;h.setAttribute("position",new Float32BufferAttribute(c,3)),h.setAttribute("color",new Float32BufferAttribute(u,3));const d=new LineBasicMaterial({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class PolarGridHelper extends LineSegments{constructor(e=10,t=16,i=8,r=64,s=4473924,o=8947848){s=new Color(s),o=new Color(o);const l=[],c=[];if(t>1)for(let d=0;d<t;d++){const p=d/t*(Math.PI*2),m=Math.sin(p)*e,g=Math.cos(p)*e;l.push(0,0,0),l.push(m,0,g);const v=d&1?s:o;c.push(v.r,v.g,v.b),c.push(v.r,v.g,v.b)}for(let d=0;d<i;d++){const p=d&1?s:o,m=e-e/i*d;for(let g=0;g<r;g++){let v=g/r*(Math.PI*2),_=Math.sin(v)*m,y=Math.cos(v)*m;l.push(_,0,y),c.push(p.r,p.g,p.b),v=(g+1)/r*(Math.PI*2),_=Math.sin(v)*m,y=Math.cos(v)*m,l.push(_,0,y),c.push(p.r,p.g,p.b)}}const u=new BufferGeometry;u.setAttribute("position",new Float32BufferAttribute(l,3)),u.setAttribute("color",new Float32BufferAttribute(c,3));const h=new LineBasicMaterial({vertexColors:!0,toneMapped:!1});super(u,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const _v1=new Vector3,_v2=new Vector3,_v3=new Vector3;class DirectionalLightHelper extends Object3D{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let r=new BufferGeometry;r.setAttribute("position",new Float32BufferAttribute([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new LineBasicMaterial({fog:!1,toneMapped:!1});this.lightPlane=new Line(r,s),this.add(this.lightPlane),r=new BufferGeometry,r.setAttribute("position",new Float32BufferAttribute([0,0,0,0,0,1],3)),this.targetLine=new Line(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),_v1.setFromMatrixPosition(this.light.matrixWorld),_v2.setFromMatrixPosition(this.light.target.matrixWorld),_v3.subVectors(_v2,_v1),this.lightPlane.lookAt(_v2),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(_v2),this.targetLine.scale.z=_v3.length()}}const _vector=new Vector3,_camera$1=new Camera;class CameraHelper extends LineSegments{constructor(e){const t=new BufferGeometry,i=new LineBasicMaterial({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],o={};l("n1","n2"),l("n2","n4"),l("n4","n3"),l("n3","n1"),l("f1","f2"),l("f2","f4"),l("f4","f3"),l("f3","f1"),l("n1","f1"),l("n2","f2"),l("n3","f3"),l("n4","f4"),l("p","n1"),l("p","n2"),l("p","n3"),l("p","n4"),l("u1","u2"),l("u2","u3"),l("u3","u1"),l("c","t"),l("p","c"),l("cn1","cn2"),l("cn3","cn4"),l("cf1","cf2"),l("cf3","cf4");function l(g,v){c(g),c(v)}function c(g){r.push(0,0,0),s.push(0,0,0),o[g]===void 0&&(o[g]=[]),o[g].push(r.length/3-1)}t.setAttribute("position",new Float32BufferAttribute(r,3)),t.setAttribute("color",new Float32BufferAttribute(s,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const u=new Color(16755200),h=new Color(16711680),d=new Color(43775),p=new Color(16777215),m=new Color(3355443);this.setColors(u,h,d,p,m)}setColors(e,t,i,r,s){const l=this.geometry.getAttribute("color");l.setXYZ(0,e.r,e.g,e.b),l.setXYZ(1,e.r,e.g,e.b),l.setXYZ(2,e.r,e.g,e.b),l.setXYZ(3,e.r,e.g,e.b),l.setXYZ(4,e.r,e.g,e.b),l.setXYZ(5,e.r,e.g,e.b),l.setXYZ(6,e.r,e.g,e.b),l.setXYZ(7,e.r,e.g,e.b),l.setXYZ(8,e.r,e.g,e.b),l.setXYZ(9,e.r,e.g,e.b),l.setXYZ(10,e.r,e.g,e.b),l.setXYZ(11,e.r,e.g,e.b),l.setXYZ(12,e.r,e.g,e.b),l.setXYZ(13,e.r,e.g,e.b),l.setXYZ(14,e.r,e.g,e.b),l.setXYZ(15,e.r,e.g,e.b),l.setXYZ(16,e.r,e.g,e.b),l.setXYZ(17,e.r,e.g,e.b),l.setXYZ(18,e.r,e.g,e.b),l.setXYZ(19,e.r,e.g,e.b),l.setXYZ(20,e.r,e.g,e.b),l.setXYZ(21,e.r,e.g,e.b),l.setXYZ(22,e.r,e.g,e.b),l.setXYZ(23,e.r,e.g,e.b),l.setXYZ(24,t.r,t.g,t.b),l.setXYZ(25,t.r,t.g,t.b),l.setXYZ(26,t.r,t.g,t.b),l.setXYZ(27,t.r,t.g,t.b),l.setXYZ(28,t.r,t.g,t.b),l.setXYZ(29,t.r,t.g,t.b),l.setXYZ(30,t.r,t.g,t.b),l.setXYZ(31,t.r,t.g,t.b),l.setXYZ(32,i.r,i.g,i.b),l.setXYZ(33,i.r,i.g,i.b),l.setXYZ(34,i.r,i.g,i.b),l.setXYZ(35,i.r,i.g,i.b),l.setXYZ(36,i.r,i.g,i.b),l.setXYZ(37,i.r,i.g,i.b),l.setXYZ(38,r.r,r.g,r.b),l.setXYZ(39,r.r,r.g,r.b),l.setXYZ(40,s.r,s.g,s.b),l.setXYZ(41,s.r,s.g,s.b),l.setXYZ(42,s.r,s.g,s.b),l.setXYZ(43,s.r,s.g,s.b),l.setXYZ(44,s.r,s.g,s.b),l.setXYZ(45,s.r,s.g,s.b),l.setXYZ(46,s.r,s.g,s.b),l.setXYZ(47,s.r,s.g,s.b),l.setXYZ(48,s.r,s.g,s.b),l.setXYZ(49,s.r,s.g,s.b),l.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,i=1,r=1;_camera$1.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),setPoint("c",t,e,_camera$1,0,0,-1),setPoint("t",t,e,_camera$1,0,0,1),setPoint("n1",t,e,_camera$1,-i,-r,-1),setPoint("n2",t,e,_camera$1,i,-r,-1),setPoint("n3",t,e,_camera$1,-i,r,-1),setPoint("n4",t,e,_camera$1,i,r,-1),setPoint("f1",t,e,_camera$1,-i,-r,1),setPoint("f2",t,e,_camera$1,i,-r,1),setPoint("f3",t,e,_camera$1,-i,r,1),setPoint("f4",t,e,_camera$1,i,r,1),setPoint("u1",t,e,_camera$1,i*.7,r*1.1,-1),setPoint("u2",t,e,_camera$1,-i*.7,r*1.1,-1),setPoint("u3",t,e,_camera$1,0,r*2,-1),setPoint("cf1",t,e,_camera$1,-i,0,1),setPoint("cf2",t,e,_camera$1,i,0,1),setPoint("cf3",t,e,_camera$1,0,-r,1),setPoint("cf4",t,e,_camera$1,0,r,1),setPoint("cn1",t,e,_camera$1,-i,0,-1),setPoint("cn2",t,e,_camera$1,i,0,-1),setPoint("cn3",t,e,_camera$1,0,-r,-1),setPoint("cn4",t,e,_camera$1,0,r,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function setPoint(a,e,t,i,r,s,o){_vector.set(r,s,o).unproject(i);const l=e[a];if(l!==void 0){const c=t.getAttribute("position");for(let u=0,h=l.length;u<h;u++)c.setXYZ(l[u],_vector.x,_vector.y,_vector.z)}}const _box=new Box3;class BoxHelper extends LineSegments{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(8*3),s=new BufferGeometry;s.setIndex(new BufferAttribute(i,1)),s.setAttribute("position",new BufferAttribute(r,3)),super(s,new LineBasicMaterial({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&_box.setFromObject(this.object),_box.isEmpty())return;const t=_box.min,i=_box.max,r=this.geometry.attributes.position,s=r.array;s[0]=i.x,s[1]=i.y,s[2]=i.z,s[3]=t.x,s[4]=i.y,s[5]=i.z,s[6]=t.x,s[7]=t.y,s[8]=i.z,s[9]=i.x,s[10]=t.y,s[11]=i.z,s[12]=i.x,s[13]=i.y,s[14]=t.z,s[15]=t.x,s[16]=i.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=i.x,s[22]=t.y,s[23]=t.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Box3Helper extends LineSegments{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new BufferGeometry;s.setIndex(new BufferAttribute(i,1)),s.setAttribute("position",new Float32BufferAttribute(r,3)),super(s,new LineBasicMaterial({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class PlaneHelper extends Line{constructor(e,t=1,i=16776960){const r=i,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new BufferGeometry;o.setAttribute("position",new Float32BufferAttribute(s,3)),o.computeBoundingSphere(),super(o,new LineBasicMaterial({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const l=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new BufferGeometry;c.setAttribute("position",new Float32BufferAttribute(l,3)),c.computeBoundingSphere(),this.add(new Mesh(c,new MeshBasicMaterial({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const _axis=new Vector3;let _lineGeometry,_coneGeometry;class ArrowHelper extends Object3D{constructor(e=new Vector3(0,0,1),t=new Vector3(0,0,0),i=1,r=16776960,s=i*.2,o=s*.2){super(),this.type="ArrowHelper",_lineGeometry===void 0&&(_lineGeometry=new BufferGeometry,_lineGeometry.setAttribute("position",new Float32BufferAttribute([0,0,0,0,1,0],3)),_coneGeometry=new CylinderGeometry(0,.5,1,5,1),_coneGeometry.translate(0,-.5,0)),this.position.copy(t),this.line=new Line(_lineGeometry,new LineBasicMaterial({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Mesh(_coneGeometry,new MeshBasicMaterial({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{_axis.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(_axis,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class AxesHelper extends LineSegments{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new BufferGeometry;r.setAttribute("position",new Float32BufferAttribute(t,3)),r.setAttribute("color",new Float32BufferAttribute(i,3));const s=new LineBasicMaterial({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new Color,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class ShapePath{constructor(){this.type="ShapePath",this.color=new Color,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Path,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(y){const b=[];for(let x=0,S=y.length;x<S;x++){const M=y[x],E=new Shape;E.curves=M.curves,b.push(E)}return b}function i(y,b){const x=b.length;let S=!1;for(let M=x-1,E=0;E<x;M=E++){let R=b[M],w=b[E],A=w.x-R.x,L=w.y-R.y;if(Math.abs(L)>Number.EPSILON){if(L<0&&(R=b[E],A=-A,w=b[M],L=-L),y.y<R.y||y.y>w.y)continue;if(y.y===R.y){if(y.x===R.x)return!0}else{const V=L*(y.x-R.x)-A*(y.y-R.y);if(V===0)return!0;if(V<0)continue;S=!S}}else{if(y.y!==R.y)continue;if(w.x<=y.x&&y.x<=R.x||R.x<=y.x&&y.x<=w.x)return!0}}return S}const r=ShapeUtils.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,l,c;const u=[];if(s.length===1)return l=s[0],c=new Shape,c.curves=l.curves,u.push(c),u;let h=!r(s[0].getPoints());h=e?!h:h;const d=[],p=[];let m=[],g=0,v;p[g]=void 0,m[g]=[];for(let y=0,b=s.length;y<b;y++)l=s[y],v=l.getPoints(),o=r(v),o=e?!o:o,o?(!h&&p[g]&&g++,p[g]={s:new Shape,p:v},p[g].s.curves=l.curves,h&&g++,m[g]=[]):m[g].push({h:l,p:v[0]});if(!p[0])return t(s);if(p.length>1){let y=!1,b=0;for(let x=0,S=p.length;x<S;x++)d[x]=[];for(let x=0,S=p.length;x<S;x++){const M=m[x];for(let E=0;E<M.length;E++){const R=M[E];let w=!0;for(let A=0;A<p.length;A++)i(R.p,p[A].p)&&(x!==A&&b++,w?(w=!1,d[A].push(R)):y=!0);w&&d[x].push(R)}}b>0&&y===!1&&(m=d)}let _;for(let y=0,b=p.length;y<b;y++){c=p[y].s,u.push(c),_=m[y];for(let x=0,S=_.length;x<S;x++)c.holes.push(_[x].h)}return u}}const _tables=_generateTables();function _generateTables(){const a=new ArrayBuffer(4),e=new Float32Array(a),t=new Uint32Array(a),i=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){const u=c-127;u<-27?(i[c]=0,i[c|256]=32768,r[c]=24,r[c|256]=24):u<-14?(i[c]=1024>>-u-14,i[c|256]=1024>>-u-14|32768,r[c]=-u-1,r[c|256]=-u-1):u<=15?(i[c]=u+15<<10,i[c|256]=u+15<<10|32768,r[c]=13,r[c|256]=13):u<128?(i[c]=31744,i[c|256]=64512,r[c]=24,r[c|256]=24):(i[c]=31744,i[c|256]=64512,r[c]=13,r[c|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),l=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,h=0;for(;!(u&8388608);)u<<=1,h-=8388608;u&=-8388609,h+=947912704,s[c]=u|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(l[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:l}}function toHalfFloat(a){Math.abs(a)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),a=clamp$1(a,-65504,65504),_tables.floatView[0]=a;const e=_tables.uint32View[0],t=e>>23&511;return _tables.baseTable[t]+((e&8388607)>>_tables.shiftTable[t])}function fromHalfFloat(a){const e=a>>10;return _tables.uint32View[0]=_tables.mantissaTable[_tables.offsetTable[e]+(a&1023)]+_tables.exponentTable[e],_tables.floatView[0]}const DataUtils={toHalfFloat,fromHalfFloat};class BoxBufferGeometry extends BoxGeometry{constructor(e,t,i,r,s,o){console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."),super(e,t,i,r,s,o)}}class CapsuleBufferGeometry extends CapsuleGeometry{constructor(e,t,i,r){console.warn("THREE.CapsuleBufferGeometry has been renamed to THREE.CapsuleGeometry."),super(e,t,i,r)}}class CircleBufferGeometry extends CircleGeometry{constructor(e,t,i,r){console.warn("THREE.CircleBufferGeometry has been renamed to THREE.CircleGeometry."),super(e,t,i,r)}}class ConeBufferGeometry extends ConeGeometry{constructor(e,t,i,r,s,o,l){console.warn("THREE.ConeBufferGeometry has been renamed to THREE.ConeGeometry."),super(e,t,i,r,s,o,l)}}class CylinderBufferGeometry extends CylinderGeometry{constructor(e,t,i,r,s,o,l,c){console.warn("THREE.CylinderBufferGeometry has been renamed to THREE.CylinderGeometry."),super(e,t,i,r,s,o,l,c)}}class DodecahedronBufferGeometry extends DodecahedronGeometry{constructor(e,t){console.warn("THREE.DodecahedronBufferGeometry has been renamed to THREE.DodecahedronGeometry."),super(e,t)}}class ExtrudeBufferGeometry extends ExtrudeGeometry{constructor(e,t){console.warn("THREE.ExtrudeBufferGeometry has been renamed to THREE.ExtrudeGeometry."),super(e,t)}}class IcosahedronBufferGeometry extends IcosahedronGeometry{constructor(e,t){console.warn("THREE.IcosahedronBufferGeometry has been renamed to THREE.IcosahedronGeometry."),super(e,t)}}class LatheBufferGeometry extends LatheGeometry{constructor(e,t,i,r){console.warn("THREE.LatheBufferGeometry has been renamed to THREE.LatheGeometry."),super(e,t,i,r)}}class OctahedronBufferGeometry extends OctahedronGeometry{constructor(e,t){console.warn("THREE.OctahedronBufferGeometry has been renamed to THREE.OctahedronGeometry."),super(e,t)}}class PlaneBufferGeometry extends PlaneGeometry{constructor(e,t,i,r){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(e,t,i,r)}}class PolyhedronBufferGeometry extends PolyhedronGeometry{constructor(e,t,i,r){console.warn("THREE.PolyhedronBufferGeometry has been renamed to THREE.PolyhedronGeometry."),super(e,t,i,r)}}class RingBufferGeometry extends RingGeometry{constructor(e,t,i,r,s,o){console.warn("THREE.RingBufferGeometry has been renamed to THREE.RingGeometry."),super(e,t,i,r,s,o)}}class ShapeBufferGeometry extends ShapeGeometry{constructor(e,t){console.warn("THREE.ShapeBufferGeometry has been renamed to THREE.ShapeGeometry."),super(e,t)}}class SphereBufferGeometry extends SphereGeometry{constructor(e,t,i,r,s,o,l){console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."),super(e,t,i,r,s,o,l)}}class TetrahedronBufferGeometry extends TetrahedronGeometry{constructor(e,t){console.warn("THREE.TetrahedronBufferGeometry has been renamed to THREE.TetrahedronGeometry."),super(e,t)}}class TorusBufferGeometry extends TorusGeometry{constructor(e,t,i,r,s){console.warn("THREE.TorusBufferGeometry has been renamed to THREE.TorusGeometry."),super(e,t,i,r,s)}}class TorusKnotBufferGeometry extends TorusKnotGeometry{constructor(e,t,i,r,s,o){console.warn("THREE.TorusKnotBufferGeometry has been renamed to THREE.TorusKnotGeometry."),super(e,t,i,r,s,o)}}class TubeBufferGeometry extends TubeGeometry{constructor(e,t,i,r,s){console.warn("THREE.TubeBufferGeometry has been renamed to THREE.TubeGeometry."),super(e,t,i,r,s)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:REVISION}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=REVISION);const three_module=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping,AddEquation,AddOperation,AdditiveAnimationBlendMode,AdditiveBlending,AlphaFormat,AlwaysDepth,AlwaysStencilFunc,AmbientLight,AmbientLightProbe,AnimationClip,AnimationLoader,AnimationMixer,AnimationObjectGroup,AnimationUtils,ArcCurve,ArrayCamera,ArrowHelper,Audio,AudioAnalyser,AudioContext,AudioListener,AudioLoader,AxesHelper,BackSide,BasicDepthPacking,BasicShadowMap,Bone,BooleanKeyframeTrack,Box2,Box3,Box3Helper,BoxBufferGeometry,BoxGeometry,BoxHelper,BufferAttribute,BufferGeometry,BufferGeometryLoader,ByteType,Cache,Camera,CameraHelper,CanvasTexture,CapsuleBufferGeometry,CapsuleGeometry,CatmullRomCurve3,CineonToneMapping,CircleBufferGeometry,CircleGeometry,ClampToEdgeWrapping,Clock,Color,ColorKeyframeTrack,ColorManagement,CompressedArrayTexture,CompressedTexture,CompressedTextureLoader,ConeBufferGeometry,ConeGeometry,CubeCamera,CubeReflectionMapping,CubeRefractionMapping,CubeTexture,CubeTextureLoader,CubeUVReflectionMapping,CubicBezierCurve,CubicBezierCurve3,CubicInterpolant,CullFaceBack,CullFaceFront,CullFaceFrontBack,CullFaceNone,Curve,CurvePath,CustomBlending,CustomToneMapping,CylinderBufferGeometry,CylinderGeometry,Cylindrical,Data3DTexture,DataArrayTexture,DataTexture,DataTextureLoader,DataUtils,DecrementStencilOp,DecrementWrapStencilOp,DefaultLoadingManager,DepthFormat,DepthStencilFormat,DepthTexture,DirectionalLight,DirectionalLightHelper,DiscreteInterpolant,DisplayP3ColorSpace,DodecahedronBufferGeometry,DodecahedronGeometry,DoubleSide,DstAlphaFactor,DstColorFactor,DynamicCopyUsage,DynamicDrawUsage,DynamicReadUsage,EdgesGeometry,EllipseCurve,EqualDepth,EqualStencilFunc,EquirectangularReflectionMapping,EquirectangularRefractionMapping,Euler,EventDispatcher,ExtrudeBufferGeometry,ExtrudeGeometry,FileLoader,Float16BufferAttribute,Float32BufferAttribute,Float64BufferAttribute,FloatType,Fog,FogExp2,FramebufferTexture,FrontSide,Frustum,GLBufferAttribute,GLSL1,GLSL3,GreaterDepth,GreaterEqualDepth,GreaterEqualStencilFunc,GreaterStencilFunc,GridHelper,Group,HalfFloatType,HemisphereLight,HemisphereLightHelper,HemisphereLightProbe,IcosahedronBufferGeometry,IcosahedronGeometry,ImageBitmapLoader,ImageLoader,ImageUtils,IncrementStencilOp,IncrementWrapStencilOp,InstancedBufferAttribute,InstancedBufferGeometry,InstancedInterleavedBuffer,InstancedMesh,Int16BufferAttribute,Int32BufferAttribute,Int8BufferAttribute,IntType,InterleavedBuffer,InterleavedBufferAttribute,Interpolant,InterpolateDiscrete,InterpolateLinear,InterpolateSmooth,InvertStencilOp,KeepStencilOp,KeyframeTrack,LOD,LatheBufferGeometry,LatheGeometry,Layers,LessDepth,LessEqualDepth,LessEqualStencilFunc,LessStencilFunc,Light,LightProbe,Line,Line3,LineBasicMaterial,LineCurve,LineCurve3,LineDashedMaterial,LineLoop,LineSegments,LinearEncoding,LinearFilter,LinearInterpolant,LinearMipMapLinearFilter,LinearMipMapNearestFilter,LinearMipmapLinearFilter,LinearMipmapNearestFilter,LinearSRGBColorSpace,LinearToneMapping,Loader,LoaderUtils,LoadingManager,LoopOnce,LoopPingPong,LoopRepeat,LuminanceAlphaFormat,LuminanceFormat,MOUSE,Material,MaterialLoader,MathUtils,Matrix3,Matrix4,MaxEquation,Mesh,MeshBasicMaterial,MeshDepthMaterial,MeshDistanceMaterial,MeshLambertMaterial,MeshMatcapMaterial,MeshNormalMaterial,MeshPhongMaterial,MeshPhysicalMaterial,MeshStandardMaterial,MeshToonMaterial,MinEquation,MirroredRepeatWrapping,MixOperation,MultiplyBlending,MultiplyOperation,NearestFilter,NearestMipMapLinearFilter,NearestMipMapNearestFilter,NearestMipmapLinearFilter,NearestMipmapNearestFilter,NeverDepth,NeverStencilFunc,NoBlending,NoColorSpace,NoToneMapping,NormalAnimationBlendMode,NormalBlending,NotEqualDepth,NotEqualStencilFunc,NumberKeyframeTrack,Object3D,ObjectLoader,ObjectSpaceNormalMap,OctahedronBufferGeometry,OctahedronGeometry,OneFactor,OneMinusDstAlphaFactor,OneMinusDstColorFactor,OneMinusSrcAlphaFactor,OneMinusSrcColorFactor,OrthographicCamera,PCFShadowMap,PCFSoftShadowMap,PMREMGenerator,Path,PerspectiveCamera,Plane,PlaneBufferGeometry,PlaneGeometry,PlaneHelper,PointLight,PointLightHelper,Points,PointsMaterial,PolarGridHelper,PolyhedronBufferGeometry,PolyhedronGeometry,PositionalAudio,PropertyBinding,PropertyMixer,QuadraticBezierCurve,QuadraticBezierCurve3,Quaternion,QuaternionKeyframeTrack,QuaternionLinearInterpolant,RED_GREEN_RGTC2_Format,RED_RGTC1_Format,REVISION,RGBADepthPacking,RGBAFormat,RGBAIntegerFormat,RGBA_ASTC_10x10_Format,RGBA_ASTC_10x5_Format,RGBA_ASTC_10x6_Format,RGBA_ASTC_10x8_Format,RGBA_ASTC_12x10_Format,RGBA_ASTC_12x12_Format,RGBA_ASTC_4x4_Format,RGBA_ASTC_5x4_Format,RGBA_ASTC_5x5_Format,RGBA_ASTC_6x5_Format,RGBA_ASTC_6x6_Format,RGBA_ASTC_8x5_Format,RGBA_ASTC_8x6_Format,RGBA_ASTC_8x8_Format,RGBA_BPTC_Format,RGBA_ETC2_EAC_Format,RGBA_PVRTC_2BPPV1_Format,RGBA_PVRTC_4BPPV1_Format,RGBA_S3TC_DXT1_Format,RGBA_S3TC_DXT3_Format,RGBA_S3TC_DXT5_Format,RGB_ETC1_Format,RGB_ETC2_Format,RGB_PVRTC_2BPPV1_Format,RGB_PVRTC_4BPPV1_Format,RGB_S3TC_DXT1_Format,RGFormat,RGIntegerFormat,RawShaderMaterial,Ray,Raycaster,RectAreaLight,RedFormat,RedIntegerFormat,ReinhardToneMapping,RepeatWrapping,ReplaceStencilOp,ReverseSubtractEquation,RingBufferGeometry,RingGeometry,SIGNED_RED_GREEN_RGTC2_Format,SIGNED_RED_RGTC1_Format,SRGBColorSpace,Scene,ShaderChunk,ShaderLib,ShaderMaterial,ShadowMaterial,Shape,ShapeBufferGeometry,ShapeGeometry,ShapePath,ShapeUtils,ShortType,Skeleton,SkeletonHelper,SkinnedMesh,Source,Sphere,SphereBufferGeometry,SphereGeometry,Spherical,SphericalHarmonics3,SplineCurve,SpotLight,SpotLightHelper,Sprite,SpriteMaterial,SrcAlphaFactor,SrcAlphaSaturateFactor,SrcColorFactor,StaticCopyUsage,StaticDrawUsage,StaticReadUsage,StereoCamera,StreamCopyUsage,StreamDrawUsage,StreamReadUsage,StringKeyframeTrack,SubtractEquation,SubtractiveBlending,TOUCH,TangentSpaceNormalMap,TetrahedronBufferGeometry,TetrahedronGeometry,Texture,TextureLoader,TorusBufferGeometry,TorusGeometry,TorusKnotBufferGeometry,TorusKnotGeometry,Triangle,TriangleFanDrawMode,TriangleStripDrawMode,TrianglesDrawMode,TubeBufferGeometry,TubeGeometry,TwoPassDoubleSide,UVMapping,Uint16BufferAttribute,Uint32BufferAttribute,Uint8BufferAttribute,Uint8ClampedBufferAttribute,Uniform,UniformsGroup,UniformsLib,UniformsUtils,UnsignedByteType,UnsignedInt248Type,UnsignedIntType,UnsignedShort4444Type,UnsignedShort5551Type,UnsignedShortType,VSMShadowMap,Vector2,Vector3,Vector4,VectorKeyframeTrack,VideoTexture,WebGL1Renderer,WebGL3DRenderTarget,WebGLArrayRenderTarget,WebGLCubeRenderTarget,WebGLMultipleRenderTargets,WebGLRenderTarget,WebGLRenderer,WebGLUtils,WireframeGeometry,WrapAroundEnding,ZeroCurvatureEnding,ZeroFactor,ZeroSlopeEnding,ZeroStencilOp,_SRGBAFormat,sRGBEncoding},Symbol.toStringTag,{value:"Module"}));/**
 * InTween 1.0.0-beta.7
 * @license MIT
 * Copyright 2021-present Jasper Palfree
 */function _extends(){return _extends=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(a[i]=t[i])}return a},_extends.apply(this,arguments)}function _inheritsLoose(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,_setPrototypeOf(a,e)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(a)}function _setPrototypeOf(a,e){return _setPrototypeOf=Object.setPrototypeOf||function(i,r){return i.__proto__=r,i},_setPrototypeOf(a,e)}function _isNativeReflectConstruct(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _construct(a,e,t){return _isNativeReflectConstruct()?_construct=Reflect.construct:_construct=function(r,s,o){var l=[null];l.push.apply(l,s);var c=Function.bind.apply(r,l),u=new c;return o&&_setPrototypeOf(u,o.prototype),u},_construct.apply(null,arguments)}function _isNativeFunction(a){return Function.toString.call(a).indexOf("[native code]")!==-1}function _wrapNativeSuper(a){var e=typeof Map=="function"?new Map:void 0;return _wrapNativeSuper=function(i){if(i===null||!_isNativeFunction(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,r)}function r(){return _construct(i,arguments,_getPrototypeOf(this).constructor)}return r.prototype=Object.create(i.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(r,i)},_wrapNativeSuper(a)}function _assertThisInitialized(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _unsupportedIterableToArray(a,e){if(a){if(typeof a=="string")return _arrayLikeToArray(a,e);var t=Object.prototype.toString.call(a).slice(8,-1);if(t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set")return Array.from(a);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _arrayLikeToArray(a,e)}}function _arrayLikeToArray(a,e){(e==null||e>a.length)&&(e=a.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=a[t];return i}function _createForOfIteratorHelperLoose(a,e){var t=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(t)return(t=t.call(a)).next.bind(t);if(Array.isArray(a)||(t=_unsupportedIterableToArray(a))||e&&a&&typeof a.length=="number"){t&&(a=t);var i=0;return function(){return i>=a.length?{done:!0}:{done:!1,value:a[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var identity=function(e){return e},objectCtorString=Function.prototype.toString.call(Object),toString$1=Object.prototype.toString,typeName=function(e){return toString$1.call(e).slice(8,-1)},now=function(){return typeof window>"u"&&typeof process<"u"?function(){var e=process.hrtime();return e[0]*1e3+e[1]/1e6}:typeof window<"u"&&window.performance!==void 0&&window.performance.now!==void 0?window.performance.now.bind(window.performance):Date.now!==void 0?Date.now:function(){return new Date().getTime()}}(),castArray=function(e){return Array.isArray(e)?e:[e]},lerp$1=function(e,t,i){return e*(1-i)+t*i},invLerp$1=function(e,t,i){var r=t-e;return r?(i-e)/r:1},clamp=function(e,t,i){return Math.min(Math.max(i,e),t)},lerpClamped=function(e,t,i){return lerp$1(e,t,clamp(0,1,i))},invLerpClamped=function(e,t,i){return clamp(0,1,invLerp$1(e,t,i))},cloneDeep=function a(e){if(typeof e=="function")return e;var t=Array.isArray(e)?[]:{};for(var i in e){var r=e[i],s=typeName(r);s==="Array"||s==="Object"?t[i]=a(r):s==="Date"?t[i]=new Date(r.getTime()):t[i]=r}return t},isObjectLike=function(e){return e!==null&&typeof e=="object"},isPlainObject=function(e){if(!isObjectLike(e))return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;var i=hasOwnProperty.call(t,"constructor")&&t.constructor;return typeof i=="function"&&i instanceof i&&Function.prototype.toString.call(i)===objectCtorString},filterObjectValues=function(e,t){var i={};for(var r in e){var s=e[r];t(s,r)&&(i[r]=s)}return i},sanitizedObject=function(e){return filterObjectValues(e,function(t){return t!==void 0})},mapProperties=function(e,t){var i={};for(var r in e)i[r]=t(e[r],r);return i},pick=function(e,t){if(t===void 0&&(t=[]),!t)return _extends({},e);for(var i={},r=_createForOfIteratorHelperLoose(t),s;!(s=r()).done;){var o=s.value;i[o]=e[o]}return i},mergeIntersecting=function(e,t){return _extends({},e,pick(t,Object.keys(e)))},sortedIndex=function(e,t,i,r){var s=0,o=e?e.length:s;for(i=i||identity,t=i(t);s<o;){var l=s+o>>>1,c=i(e[l]);(r?c<=t:c<t)?s=l+1:o=l}return s},getIntersectingPaths=function(e,t){return Object.keys(e).filter(Object.prototype.hasOwnProperty.bind(t))},pull=function(e,t){var i=e.indexOf(t);return e.splice(i,1),e};function shortestModDist(a,e,t){var i=e-a,r=i/t,s=Math.floor(r),o=r-s,l=o>.5?-1:o<-.5?1:0;return(o+l+s)*t}var combineEasing=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var r=t.length;if(r===1)return t[0];var s=1/r;return function(o){var l=o*r,c=clamp(0,r-1,Math.floor(l));return(t[c](l-c)+c)*s}};function pipeFromArray(a){return a.length===0?identity:a.length===1?a[0]:function(t){return a.reduce(function(i,r){return r(i)},t)}}var commonjsGlobal$1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function createCommonjsModule(a,e){return e={exports:{}},a(e,e.exports),e.exports}var check$1=function(e){return e&&e.Math==Math&&e},global_1$1=check$1(typeof globalThis=="object"&&globalThis)||check$1(typeof window=="object"&&window)||check$1(typeof self=="object"&&self)||check$1(typeof commonjsGlobal$1=="object"&&commonjsGlobal$1)||function(){return this}()||Function("return this")(),path$1=global_1$1,requireObjectCoercible$1=function(e){if(e==null)throw TypeError("Can't call method on "+e);return e},toObject$1=function(e){return Object(requireObjectCoercible$1(e))},hasOwnProperty$2={}.hasOwnProperty,has$2=Object.hasOwn||function(e,t){return hasOwnProperty$2.call(toObject$1(e),t)},setGlobal$1=function(e,t){try{Object.defineProperty(global_1$1,e,{value:t,configurable:!0,writable:!0})}catch{global_1$1[e]=t}return t},SHARED$1="__core-js_shared__",store$2=global_1$1[SHARED$1]||setGlobal$1(SHARED$1,{}),sharedStore$1=store$2,shared$1=createCommonjsModule(function(a){(a.exports=function(e,t){return sharedStore$1[e]||(sharedStore$1[e]=t!==void 0?t:{})})("versions",[]).push({version:"3.17.3",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})}),id$1=0,postfix$1=Math.random(),uid$1=function(e){return"Symbol("+String(e===void 0?"":e)+")_"+(++id$1+postfix$1).toString(36)},aFunction$2=function(e){return typeof e=="function"?e:void 0},getBuiltIn$1=function(e,t){return arguments.length<2?aFunction$2(global_1$1[e]):global_1$1[e]&&global_1$1[e][t]},engineUserAgent$1=getBuiltIn$1("navigator","userAgent")||"",process$2=global_1$1.process,Deno$1=global_1$1.Deno,versions$1=process$2&&process$2.versions||Deno$1&&Deno$1.version,v8$1=versions$1&&versions$1.v8,match$1,version$1;v8$1?(match$1=v8$1.split("."),version$1=match$1[0]<4?1:match$1[0]+match$1[1]):engineUserAgent$1&&(match$1=engineUserAgent$1.match(/Edge\/(\d+)/),(!match$1||match$1[1]>=74)&&(match$1=engineUserAgent$1.match(/Chrome\/(\d+)/),match$1&&(version$1=match$1[1])));var engineV8Version$1=version$1&&+version$1,fails$1=function(e){try{return!!e()}catch{return!0}},nativeSymbol$1=!!Object.getOwnPropertySymbols&&!fails$1(function(){var a=Symbol();return!String(a)||!(Object(a)instanceof Symbol)||!Symbol.sham&&engineV8Version$1&&engineV8Version$1<41}),useSymbolAsUid$1=nativeSymbol$1&&!Symbol.sham&&typeof Symbol.iterator=="symbol",WellKnownSymbolsStore$1=shared$1("wks"),Symbol$2$1=global_1$1.Symbol,createWellKnownSymbol$1=useSymbolAsUid$1?Symbol$2$1:Symbol$2$1&&Symbol$2$1.withoutSetter||uid$1,wellKnownSymbol$1=function(e){return(!has$2(WellKnownSymbolsStore$1,e)||!(nativeSymbol$1||typeof WellKnownSymbolsStore$1[e]=="string"))&&(nativeSymbol$1&&has$2(Symbol$2$1,e)?WellKnownSymbolsStore$1[e]=Symbol$2$1[e]:WellKnownSymbolsStore$1[e]=createWellKnownSymbol$1("Symbol."+e)),WellKnownSymbolsStore$1[e]},f$5=wellKnownSymbol$1,wellKnownSymbolWrapped$1={f:f$5},descriptors$1=!fails$1(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),isObject$1$1=function(e){return typeof e=="object"?e!==null:typeof e=="function"},document$2=global_1$1.document,EXISTS$1=isObject$1$1(document$2)&&isObject$1$1(document$2.createElement),documentCreateElement$1=function(e){return EXISTS$1?document$2.createElement(e):{}},ie8DomDefine$1=!descriptors$1&&!fails$1(function(){return Object.defineProperty(documentCreateElement$1("div"),"a",{get:function(){return 7}}).a!=7}),anObject$1=function(e){if(!isObject$1$1(e))throw TypeError(String(e)+" is not an object");return e},isSymbol$1=useSymbolAsUid$1?function(a){return typeof a=="symbol"}:function(a){var e=getBuiltIn$1("Symbol");return typeof e=="function"&&Object(a)instanceof e},ordinaryToPrimitive$1=function(e,t){var i,r;if(t==="string"&&typeof(i=e.toString)=="function"&&!isObject$1$1(r=i.call(e))||typeof(i=e.valueOf)=="function"&&!isObject$1$1(r=i.call(e))||t!=="string"&&typeof(i=e.toString)=="function"&&!isObject$1$1(r=i.call(e)))return r;throw TypeError("Can't convert object to primitive value")},TO_PRIMITIVE$1=wellKnownSymbol$1("toPrimitive"),toPrimitive$1=function(e,t){if(!isObject$1$1(e)||isSymbol$1(e))return e;var i=e[TO_PRIMITIVE$1],r;if(i!==void 0){if(t===void 0&&(t="default"),r=i.call(e,t),!isObject$1$1(r)||isSymbol$1(r))return r;throw TypeError("Can't convert object to primitive value")}return t===void 0&&(t="number"),ordinaryToPrimitive$1(e,t)},toPropertyKey$1=function(e){var t=toPrimitive$1(e,"string");return isSymbol$1(t)?t:String(t)},$defineProperty$1=Object.defineProperty,f$4=descriptors$1?$defineProperty$1:function(e,t,i){if(anObject$1(e),t=toPropertyKey$1(t),anObject$1(i),ie8DomDefine$1)try{return $defineProperty$1(e,t,i)}catch{}if("get"in i||"set"in i)throw TypeError("Accessors not supported");return"value"in i&&(e[t]=i.value),e},objectDefineProperty$1={f:f$4},defineProperty$3=objectDefineProperty$1.f,defineWellKnownSymbol$1=function(e){var t=path$1.Symbol||(path$1.Symbol={});has$2(t,e)||defineProperty$3(t,e,{value:wellKnownSymbolWrapped$1.f(e)})};defineWellKnownSymbol$1("observable");wellKnownSymbolWrapped$1.f("observable");var check=function(e){return e&&e.Math==Math&&e},global_1=check(typeof globalThis=="object"&&globalThis)||check(typeof window=="object"&&window)||check(typeof self=="object"&&self)||check(typeof commonjsGlobal$1=="object"&&commonjsGlobal$1)||function(){return this}()||Function("return this")(),fails=function(e){try{return!!e()}catch{return!0}},descriptors=!fails(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),$propertyIsEnumerable={}.propertyIsEnumerable,getOwnPropertyDescriptor$1=Object.getOwnPropertyDescriptor,NASHORN_BUG=getOwnPropertyDescriptor$1&&!$propertyIsEnumerable.call({1:2},1),f$3=NASHORN_BUG?function(e){var t=getOwnPropertyDescriptor$1(this,e);return!!t&&t.enumerable}:$propertyIsEnumerable,objectPropertyIsEnumerable={f:f$3},createPropertyDescriptor=function(e,t){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:t}},toString={}.toString,classofRaw=function(e){return toString.call(e).slice(8,-1)},split="".split,indexedObject=fails(function(){return!Object("z").propertyIsEnumerable(0)})?function(a){return classofRaw(a)=="String"?split.call(a,""):Object(a)}:Object,requireObjectCoercible=function(e){if(e==null)throw TypeError("Can't call method on "+e);return e},toIndexedObject=function(e){return indexedObject(requireObjectCoercible(e))},isObject$2=function(e){return typeof e=="object"?e!==null:typeof e=="function"},path={},aFunction$1=function(e){return typeof e=="function"?e:void 0},getBuiltIn=function(e,t){return arguments.length<2?aFunction$1(path[e])||aFunction$1(global_1[e]):path[e]&&path[e][t]||global_1[e]&&global_1[e][t]},engineUserAgent=getBuiltIn("navigator","userAgent")||"",process$1=global_1.process,Deno=global_1.Deno,versions=process$1&&process$1.versions||Deno&&Deno.version,v8=versions&&versions.v8,match$2,version;v8?(match$2=v8.split("."),version=match$2[0]<4?1:match$2[0]+match$2[1]):engineUserAgent&&(match$2=engineUserAgent.match(/Edge\/(\d+)/),(!match$2||match$2[1]>=74)&&(match$2=engineUserAgent.match(/Chrome\/(\d+)/),match$2&&(version=match$2[1])));var engineV8Version=version&&+version,nativeSymbol=!!Object.getOwnPropertySymbols&&!fails(function(){var a=Symbol();return!String(a)||!(Object(a)instanceof Symbol)||!Symbol.sham&&engineV8Version&&engineV8Version<41}),useSymbolAsUid=nativeSymbol&&!Symbol.sham&&typeof Symbol.iterator=="symbol",isSymbol=useSymbolAsUid?function(a){return typeof a=="symbol"}:function(a){var e=getBuiltIn("Symbol");return typeof e=="function"&&Object(a)instanceof e},ordinaryToPrimitive=function(e,t){var i,r;if(t==="string"&&typeof(i=e.toString)=="function"&&!isObject$2(r=i.call(e))||typeof(i=e.valueOf)=="function"&&!isObject$2(r=i.call(e))||t!=="string"&&typeof(i=e.toString)=="function"&&!isObject$2(r=i.call(e)))return r;throw TypeError("Can't convert object to primitive value")},setGlobal=function(e,t){try{Object.defineProperty(global_1,e,{value:t,configurable:!0,writable:!0})}catch{global_1[e]=t}return t},SHARED="__core-js_shared__",store$1=global_1[SHARED]||setGlobal(SHARED,{}),sharedStore=store$1,shared=createCommonjsModule(function(a){(a.exports=function(e,t){return sharedStore[e]||(sharedStore[e]=t!==void 0?t:{})})("versions",[]).push({version:"3.17.3",mode:"pure",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})}),toObject=function(e){return Object(requireObjectCoercible(e))},hasOwnProperty$1={}.hasOwnProperty,has$1=Object.hasOwn||function(e,t){return hasOwnProperty$1.call(toObject(e),t)},id=0,postfix=Math.random(),uid=function(e){return"Symbol("+String(e===void 0?"":e)+")_"+(++id+postfix).toString(36)},WellKnownSymbolsStore=shared("wks"),Symbol$1$1=global_1.Symbol,createWellKnownSymbol=useSymbolAsUid?Symbol$1$1:Symbol$1$1&&Symbol$1$1.withoutSetter||uid,wellKnownSymbol=function(e){return(!has$1(WellKnownSymbolsStore,e)||!(nativeSymbol||typeof WellKnownSymbolsStore[e]=="string"))&&(nativeSymbol&&has$1(Symbol$1$1,e)?WellKnownSymbolsStore[e]=Symbol$1$1[e]:WellKnownSymbolsStore[e]=createWellKnownSymbol("Symbol."+e)),WellKnownSymbolsStore[e]},TO_PRIMITIVE=wellKnownSymbol("toPrimitive"),toPrimitive=function(e,t){if(!isObject$2(e)||isSymbol(e))return e;var i=e[TO_PRIMITIVE],r;if(i!==void 0){if(t===void 0&&(t="default"),r=i.call(e,t),!isObject$2(r)||isSymbol(r))return r;throw TypeError("Can't convert object to primitive value")}return t===void 0&&(t="number"),ordinaryToPrimitive(e,t)},toPropertyKey=function(e){var t=toPrimitive(e,"string");return isSymbol(t)?t:String(t)},document$1=global_1.document,EXISTS=isObject$2(document$1)&&isObject$2(document$1.createElement),documentCreateElement=function(e){return EXISTS?document$1.createElement(e):{}},ie8DomDefine=!descriptors&&!fails(function(){return Object.defineProperty(documentCreateElement("div"),"a",{get:function(){return 7}}).a!=7}),$getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,f$2=descriptors?$getOwnPropertyDescriptor:function(e,t){if(e=toIndexedObject(e),t=toPropertyKey(t),ie8DomDefine)try{return $getOwnPropertyDescriptor(e,t)}catch{}if(has$1(e,t))return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(e,t),e[t])},objectGetOwnPropertyDescriptor={f:f$2},replacement=/#|\.prototype\./,isForced=function(e,t){var i=data[normalize$1(e)];return i==POLYFILL?!0:i==NATIVE?!1:typeof t=="function"?fails(t):!!t},normalize$1=isForced.normalize=function(a){return String(a).replace(replacement,".").toLowerCase()},data=isForced.data={},NATIVE=isForced.NATIVE="N",POLYFILL=isForced.POLYFILL="P",isForced_1=isForced,aFunction=function(e){if(typeof e!="function")throw TypeError(String(e)+" is not a function");return e},functionBindContext=function(e,t,i){if(aFunction(e),t===void 0)return e;switch(i){case 0:return function(){return e.call(t)};case 1:return function(r){return e.call(t,r)};case 2:return function(r,s){return e.call(t,r,s)};case 3:return function(r,s,o){return e.call(t,r,s,o)}}return function(){return e.apply(t,arguments)}},anObject=function(e){if(!isObject$2(e))throw TypeError(String(e)+" is not an object");return e},$defineProperty=Object.defineProperty,f$1=descriptors?$defineProperty:function(e,t,i){if(anObject(e),t=toPropertyKey(t),anObject(i),ie8DomDefine)try{return $defineProperty(e,t,i)}catch{}if("get"in i||"set"in i)throw TypeError("Accessors not supported");return"value"in i&&(e[t]=i.value),e},objectDefineProperty={f:f$1},createNonEnumerableProperty=descriptors?function(a,e,t){return objectDefineProperty.f(a,e,createPropertyDescriptor(1,t))}:function(a,e,t){return a[e]=t,a},getOwnPropertyDescriptor=objectGetOwnPropertyDescriptor.f,wrapConstructor=function(e){var t=function(r,s,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,s)}return new e(r,s,o)}return e.apply(this,arguments)};return t.prototype=e.prototype,t},_export=function(e,t){var i=e.target,r=e.global,s=e.stat,o=e.proto,l=r?global_1:s?global_1[i]:(global_1[i]||{}).prototype,c=r?path:path[i]||createNonEnumerableProperty(path,i,{})[i],u=c.prototype,h,d,p,m,g,v,_,y,b;for(m in t)h=isForced_1(r?m:i+(s?".":"#")+m,e.forced),d=!h&&l&&has$1(l,m),v=c[m],d&&(e.noTargetGet?(b=getOwnPropertyDescriptor(l,m),_=b&&b.value):_=l[m]),g=d&&_?_:t[m],!(d&&typeof v==typeof g)&&(e.bind&&d?y=functionBindContext(g,global_1):e.wrap&&d?y=wrapConstructor(g):o&&typeof g=="function"?y=functionBindContext(Function.call,g):y=g,(e.sham||g&&g.sham||v&&v.sham)&&createNonEnumerableProperty(y,"sham",!0),createNonEnumerableProperty(c,m,y),o&&(p=i+"Prototype",has$1(path,p)||createNonEnumerableProperty(path,p,{}),createNonEnumerableProperty(path[p],m,g),e.real&&u&&!u[m]&&createNonEnumerableProperty(u,m,g)))},SPECIES=wellKnownSymbol("species"),setSpecies=function(e){var t=getBuiltIn(e),i=objectDefineProperty.f;descriptors&&t&&!t[SPECIES]&&i(t,SPECIES,{configurable:!0,get:function(){return this}})},anInstance=function(e,t,i){if(!(e instanceof t))throw TypeError("Incorrect "+(i?i+" ":"")+"invocation");return e},redefine=function(e,t,i,r){r&&r.enumerable?e[t]=i:createNonEnumerableProperty(e,t,i)},redefineAll=function(e,t,i){for(var r in t)i&&i.unsafe&&e[r]?e[r]=t[r]:redefine(e,r,t[r],i);return e},TO_STRING_TAG$3=wellKnownSymbol("toStringTag"),test={};test[TO_STRING_TAG$3]="z";var toStringTagSupport=String(test)==="[object z]",TO_STRING_TAG$2=wellKnownSymbol("toStringTag"),CORRECT_ARGUMENTS=classofRaw(function(){return arguments}())=="Arguments",tryGet=function(e,t){try{return e[t]}catch{}},classof=toStringTagSupport?classofRaw:function(a){var e,t,i;return a===void 0?"Undefined":a===null?"Null":typeof(t=tryGet(e=Object(a),TO_STRING_TAG$2))=="string"?t:CORRECT_ARGUMENTS?classofRaw(e):(i=classofRaw(e))=="Object"&&typeof e.callee=="function"?"Arguments":i},iterators={},ITERATOR$3=wellKnownSymbol("iterator"),getIteratorMethod=function(e){if(e!=null)return e[ITERATOR$3]||e["@@iterator"]||iterators[classof(e)]},getIterator=function(e,t){var i=arguments.length<2?getIteratorMethod(e):t;if(typeof i!="function")throw TypeError(String(e)+" is not iterable");return anObject(i.call(e))},getMethod=function(e){return e==null?void 0:aFunction(e)},ITERATOR$2=wellKnownSymbol("iterator"),ArrayPrototype=Array.prototype,isArrayIteratorMethod=function(e){return e!==void 0&&(iterators.Array===e||ArrayPrototype[ITERATOR$2]===e)},ceil=Math.ceil,floor=Math.floor,toInteger=function(e){return isNaN(e=+e)?0:(e>0?floor:ceil)(e)},min$1=Math.min,toLength=function(e){return e>0?min$1(toInteger(e),9007199254740991):0},iteratorClose=function(e,t,i){var r,s;anObject(e);try{if(r=e.return,r===void 0){if(t==="throw")throw i;return i}r=r.call(e)}catch(o){s=!0,r=o}if(t==="throw")throw i;if(s)throw r;return anObject(r),i},Result=function(e,t){this.stopped=e,this.result=t},iterate=function(e,t,i){var r=i&&i.that,s=!!(i&&i.AS_ENTRIES),o=!!(i&&i.IS_ITERATOR),l=!!(i&&i.INTERRUPTED),c=functionBindContext(t,r,1+s+l),u,h,d,p,m,g,v,_=function(x){return u&&iteratorClose(u,"normal",x),new Result(!0,x)},y=function(x){return s?(anObject(x),l?c(x[0],x[1],_):c(x[0],x[1])):l?c(x,_):c(x)};if(o)u=e;else{if(h=getIteratorMethod(e),typeof h!="function")throw TypeError("Target is not iterable");if(isArrayIteratorMethod(h)){for(d=0,p=toLength(e.length);p>d;d++)if(m=y(e[d]),m&&m instanceof Result)return m;return new Result(!1)}u=getIterator(e,h)}for(g=u.next;!(v=g.call(u)).done;){try{m=y(v.value)}catch(b){iteratorClose(u,"throw",b)}if(typeof m=="object"&&m&&m instanceof Result)return m}return new Result(!1)},hostReportErrors=function(e,t){var i=global_1.console;i&&i.error&&(arguments.length===1?i.error(e):i.error(e,t))},functionToString=Function.toString;typeof sharedStore.inspectSource!="function"&&(sharedStore.inspectSource=function(a){return functionToString.call(a)});var inspectSource=sharedStore.inspectSource,WeakMap$1=global_1.WeakMap,nativeWeakMap=typeof WeakMap$1=="function"&&/native code/.test(inspectSource(WeakMap$1)),keys=shared("keys"),sharedKey=function(e){return keys[e]||(keys[e]=uid(e))},hiddenKeys={},OBJECT_ALREADY_INITIALIZED="Object already initialized",WeakMap$2=global_1.WeakMap,set,get,has,enforce=function(e){return has(e)?get(e):set(e,{})},getterFor=function(e){return function(t){var i;if(!isObject$2(t)||(i=get(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return i}};if(nativeWeakMap||sharedStore.state){var store=sharedStore.state||(sharedStore.state=new WeakMap$2),wmget=store.get,wmhas=store.has,wmset=store.set;set=function(e,t){if(wmhas.call(store,e))throw new TypeError(OBJECT_ALREADY_INITIALIZED);return t.facade=e,wmset.call(store,e,t),t},get=function(e){return wmget.call(store,e)||{}},has=function(e){return wmhas.call(store,e)}}else{var STATE=sharedKey("state");hiddenKeys[STATE]=!0,set=function(e,t){if(has$1(e,STATE))throw new TypeError(OBJECT_ALREADY_INITIALIZED);return t.facade=e,createNonEnumerableProperty(e,STATE,t),t},get=function(e){return has$1(e,STATE)?e[STATE]:{}},has=function(e){return has$1(e,STATE)}}var internalState={set,get,has,enforce,getterFor},defineProperty$2=objectDefineProperty.f,OBSERVABLE=wellKnownSymbol("observable"),getInternalState$2=internalState.get,setInternalState$2=internalState.set,cleanupSubscription=function(e){var t=e.cleanup;if(t){e.cleanup=void 0;try{t()}catch(i){hostReportErrors(i)}}},subscriptionClosed=function(e){return e.observer===void 0},close=function(e){var t=e.facade;if(!descriptors){t.closed=!0;var i=e.subscriptionObserver;i&&(i.closed=!0)}e.observer=void 0},Subscription=function(e,t){var i=setInternalState$2(this,{cleanup:void 0,observer:anObject(e),subscriptionObserver:void 0}),r;descriptors||(this.closed=!1);try{(r=getMethod(e.start))&&r.call(e,this)}catch(c){hostReportErrors(c)}if(!subscriptionClosed(i)){var s=i.subscriptionObserver=new SubscriptionObserver(this);try{var o=t(s),l=o;o!=null&&(i.cleanup=typeof o.unsubscribe=="function"?function(){l.unsubscribe()}:aFunction(o))}catch(c){s.error(c);return}subscriptionClosed(i)&&cleanupSubscription(i)}};Subscription.prototype=redefineAll({},{unsubscribe:function(){var e=getInternalState$2(this);subscriptionClosed(e)||(close(e),cleanupSubscription(e))}});descriptors&&defineProperty$2(Subscription.prototype,"closed",{configurable:!0,get:function(){return subscriptionClosed(getInternalState$2(this))}});var SubscriptionObserver=function(e){setInternalState$2(this,{subscription:e}),descriptors||(this.closed=!1)};SubscriptionObserver.prototype=redefineAll({},{next:function(e){var t=getInternalState$2(getInternalState$2(this).subscription);if(!subscriptionClosed(t)){var i=t.observer;try{var r=getMethod(i.next);r&&r.call(i,e)}catch(s){hostReportErrors(s)}}},error:function(e){var t=getInternalState$2(getInternalState$2(this).subscription);if(!subscriptionClosed(t)){var i=t.observer;close(t);try{var r=getMethod(i.error);r?r.call(i,e):hostReportErrors(e)}catch(s){hostReportErrors(s)}cleanupSubscription(t)}},complete:function(){var e=getInternalState$2(getInternalState$2(this).subscription);if(!subscriptionClosed(e)){var t=e.observer;close(e);try{var i=getMethod(t.complete);i&&i.call(t)}catch(r){hostReportErrors(r)}cleanupSubscription(e)}}});descriptors&&defineProperty$2(SubscriptionObserver.prototype,"closed",{configurable:!0,get:function(){return subscriptionClosed(getInternalState$2(getInternalState$2(this).subscription))}});var $Observable=function(e){anInstance(this,$Observable,"Observable"),setInternalState$2(this,{subscriber:aFunction(e)})};redefineAll($Observable.prototype,{subscribe:function(e){var t=arguments.length;return new Subscription(typeof e=="function"?{next:e,error:t>1?arguments[1]:void 0,complete:t>2?arguments[2]:void 0}:isObject$2(e)?e:{},getInternalState$2(this).subscriber)}});redefineAll($Observable,{from:function(e){var t=typeof this=="function"?this:$Observable,i=getMethod(anObject(e)[OBSERVABLE]);if(i){var r=anObject(i.call(e));return r.constructor===t?r:new t(function(o){return r.subscribe(o)})}var s=getIterator(e);return new t(function(o){iterate(s,function(l,c){if(o.next(l),o.closed)return c()},{IS_ITERATOR:!0,INTERRUPTED:!0}),o.complete()})},of:function(){for(var e=typeof this=="function"?this:$Observable,t=arguments.length,i=new Array(t),r=0;r<t;)i[r]=arguments[r++];return new e(function(s){for(var o=0;o<t;o++)if(s.next(i[o]),s.closed)return;s.complete()})}});createNonEnumerableProperty($Observable.prototype,OBSERVABLE,function(){return this});_export({global:!0},{Observable:$Observable});setSpecies("Observable");var f=wellKnownSymbol,wellKnownSymbolWrapped={f},defineProperty$1=objectDefineProperty.f,defineWellKnownSymbol=function(e){var t=path.Symbol||(path.Symbol={});has$1(t,e)||defineProperty$1(t,e,{value:wellKnownSymbolWrapped.f(e)})};defineWellKnownSymbol("observable");var toString_1=function(e){if(isSymbol(e))throw TypeError("Cannot convert a Symbol value to a string");return String(e)},createMethod$1=function(e){return function(t,i){var r=toString_1(requireObjectCoercible(t)),s=toInteger(i),o=r.length,l,c;return s<0||s>=o?e?"":void 0:(l=r.charCodeAt(s),l<55296||l>56319||s+1===o||(c=r.charCodeAt(s+1))<56320||c>57343?e?r.charAt(s):l:e?r.slice(s,s+2):(l-55296<<10)+(c-56320)+65536)}},stringMultibyte={codeAt:createMethod$1(!1),charAt:createMethod$1(!0)},max=Math.max,min=Math.min,toAbsoluteIndex=function(e,t){var i=toInteger(e);return i<0?max(i+t,0):min(i,t)},createMethod=function(e){return function(t,i,r){var s=toIndexedObject(t),o=toLength(s.length),l=toAbsoluteIndex(r,o),c;if(e&&i!=i){for(;o>l;)if(c=s[l++],c!=c)return!0}else for(;o>l;l++)if((e||l in s)&&s[l]===i)return e||l||0;return!e&&-1}},arrayIncludes={includes:createMethod(!0),indexOf:createMethod(!1)},indexOf=arrayIncludes.indexOf,objectKeysInternal=function(e,t){var i=toIndexedObject(e),r=0,s=[],o;for(o in i)!has$1(hiddenKeys,o)&&has$1(i,o)&&s.push(o);for(;t.length>r;)has$1(i,o=t[r++])&&(~indexOf(s,o)||s.push(o));return s},enumBugKeys=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],objectKeys=Object.keys||function(e){return objectKeysInternal(e,enumBugKeys)},objectDefineProperties=descriptors?Object.defineProperties:function(e,t){anObject(e);for(var i=objectKeys(t),r=i.length,s=0,o;r>s;)objectDefineProperty.f(e,o=i[s++],t[o]);return e},html=getBuiltIn("document","documentElement"),GT=">",LT="<",PROTOTYPE="prototype",SCRIPT="script",IE_PROTO$1=sharedKey("IE_PROTO"),EmptyConstructor=function(){},scriptTag=function(e){return LT+SCRIPT+GT+e+LT+"/"+SCRIPT+GT},NullProtoObjectViaActiveX=function(e){e.write(scriptTag("")),e.close();var t=e.parentWindow.Object;return e=null,t},NullProtoObjectViaIFrame=function(){var e=documentCreateElement("iframe"),t="java"+SCRIPT+":",i;return e.style.display="none",html.appendChild(e),e.src=String(t),i=e.contentWindow.document,i.open(),i.write(scriptTag("document.F=Object")),i.close(),i.F},activeXDocument,_NullProtoObject=function(){try{activeXDocument=new ActiveXObject("htmlfile")}catch{}_NullProtoObject=typeof document<"u"?document.domain&&activeXDocument?NullProtoObjectViaActiveX(activeXDocument):NullProtoObjectViaIFrame():NullProtoObjectViaActiveX(activeXDocument);for(var e=enumBugKeys.length;e--;)delete _NullProtoObject[PROTOTYPE][enumBugKeys[e]];return _NullProtoObject()};hiddenKeys[IE_PROTO$1]=!0;var objectCreate=Object.create||function(e,t){var i;return e!==null?(EmptyConstructor[PROTOTYPE]=anObject(e),i=new EmptyConstructor,EmptyConstructor[PROTOTYPE]=null,i[IE_PROTO$1]=e):i=_NullProtoObject(),t===void 0?i:objectDefineProperties(i,t)},correctPrototypeGetter=!fails(function(){function a(){}return a.prototype.constructor=null,Object.getPrototypeOf(new a)!==a.prototype}),IE_PROTO=sharedKey("IE_PROTO"),ObjectPrototype=Object.prototype,objectGetPrototypeOf=correctPrototypeGetter?Object.getPrototypeOf:function(a){return a=toObject(a),has$1(a,IE_PROTO)?a[IE_PROTO]:typeof a.constructor=="function"&&a instanceof a.constructor?a.constructor.prototype:a instanceof Object?ObjectPrototype:null},ITERATOR$1=wellKnownSymbol("iterator"),BUGGY_SAFARI_ITERATORS$1=!1,IteratorPrototype$1,PrototypeOfArrayIteratorPrototype,arrayIterator;[].keys&&(arrayIterator=[].keys(),"next"in arrayIterator?(PrototypeOfArrayIteratorPrototype=objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator)),PrototypeOfArrayIteratorPrototype!==Object.prototype&&(IteratorPrototype$1=PrototypeOfArrayIteratorPrototype)):BUGGY_SAFARI_ITERATORS$1=!0);var NEW_ITERATOR_PROTOTYPE=IteratorPrototype$1==null||fails(function(){var a={};return IteratorPrototype$1[ITERATOR$1].call(a)!==a});NEW_ITERATOR_PROTOTYPE?IteratorPrototype$1={}:IteratorPrototype$1=objectCreate(IteratorPrototype$1);typeof IteratorPrototype$1[ITERATOR$1]!="function"&&createNonEnumerableProperty(IteratorPrototype$1,ITERATOR$1,function(){return this});var iteratorsCore={IteratorPrototype:IteratorPrototype$1,BUGGY_SAFARI_ITERATORS:BUGGY_SAFARI_ITERATORS$1},objectToString=toStringTagSupport?{}.toString:function(){return"[object "+classof(this)+"]"},defineProperty=objectDefineProperty.f,TO_STRING_TAG$1=wellKnownSymbol("toStringTag"),setToStringTag=function(e,t,i,r){if(e){var s=i?e:e.prototype;has$1(s,TO_STRING_TAG$1)||defineProperty(s,TO_STRING_TAG$1,{configurable:!0,value:t}),r&&!toStringTagSupport&&createNonEnumerableProperty(s,"toString",objectToString)}},IteratorPrototype=iteratorsCore.IteratorPrototype,returnThis$1=function(){return this},createIteratorConstructor=function(e,t,i){var r=t+" Iterator";return e.prototype=objectCreate(IteratorPrototype,{next:createPropertyDescriptor(1,i)}),setToStringTag(e,r,!1,!0),iterators[r]=returnThis$1,e},aPossiblePrototype=function(e){if(!isObject$2(e)&&e!==null)throw TypeError("Can't set "+String(e)+" as a prototype");return e};Object.setPrototypeOf||"__proto__"in{}&&function(){var a=!1,e={},t;try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(e,[]),a=e instanceof Array}catch{}return function(r,s){return anObject(r),aPossiblePrototype(s),a?t.call(r,s):r.__proto__=s,r}}();var BUGGY_SAFARI_ITERATORS=iteratorsCore.BUGGY_SAFARI_ITERATORS,ITERATOR=wellKnownSymbol("iterator"),KEYS="keys",VALUES="values",ENTRIES="entries",returnThis=function(){return this},defineIterator=function(e,t,i,r,s,o,l){createIteratorConstructor(i,t,r);var c=function(x){if(x===s&&m)return m;if(!BUGGY_SAFARI_ITERATORS&&x in d)return d[x];switch(x){case KEYS:return function(){return new i(this,x)};case VALUES:return function(){return new i(this,x)};case ENTRIES:return function(){return new i(this,x)}}return function(){return new i(this)}},u=t+" Iterator",h=!1,d=e.prototype,p=d[ITERATOR]||d["@@iterator"]||s&&d[s],m=!BUGGY_SAFARI_ITERATORS&&p||c(s),g=t=="Array"&&d.entries||p,v,_,y;if(g&&(v=objectGetPrototypeOf(g.call(new e)),v!==Object.prototype&&v.next&&(setToStringTag(v,u,!0,!0),iterators[u]=returnThis)),s==VALUES&&p&&p.name!==VALUES&&(h=!0,m=function(){return p.call(this)}),l&&d[ITERATOR]!==m&&createNonEnumerableProperty(d,ITERATOR,m),iterators[t]=m,s)if(_={values:c(VALUES),keys:o?m:c(KEYS),entries:c(ENTRIES)},l)for(y in _)(BUGGY_SAFARI_ITERATORS||h||!(y in d))&&redefine(d,y,_[y]);else _export({target:t,proto:!0,forced:BUGGY_SAFARI_ITERATORS||h},_);return _},charAt=stringMultibyte.charAt,STRING_ITERATOR="String Iterator",setInternalState$1=internalState.set,getInternalState$1=internalState.getterFor(STRING_ITERATOR);defineIterator(String,"String",function(a){setInternalState$1(this,{type:STRING_ITERATOR,string:toString_1(a),index:0})},function(){var e=getInternalState$1(this),t=e.string,i=e.index,r;return i>=t.length?{value:void 0,done:!0}:(r=charAt(t,i),e.index+=r.length,{value:r,done:!1})});var ARRAY_ITERATOR="Array Iterator",setInternalState=internalState.set,getInternalState=internalState.getterFor(ARRAY_ITERATOR);defineIterator(Array,"Array",function(a,e){setInternalState(this,{type:ARRAY_ITERATOR,target:toIndexedObject(a),index:0,kind:e})},function(){var a=getInternalState(this),e=a.target,t=a.kind,i=a.index++;return!e||i>=e.length?(a.target=void 0,{value:void 0,done:!0}):t=="keys"?{value:i,done:!1}:t=="values"?{value:e[i],done:!1}:{value:[i,e[i]],done:!1}},"values");iterators.Arguments=iterators.Array;var domIterables={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},TO_STRING_TAG=wellKnownSymbol("toStringTag");for(var COLLECTION_NAME in domIterables){var Collection=global_1[COLLECTION_NAME],CollectionPrototype=Collection&&Collection.prototype;CollectionPrototype&&classof(CollectionPrototype)!==TO_STRING_TAG&&createNonEnumerableProperty(CollectionPrototype,TO_STRING_TAG,COLLECTION_NAME),iterators[COLLECTION_NAME]=iterators.Array}var observable=path.Observable,Observable=function(a){_inheritsLoose(e,a);function e(i){return a.call(this,i||identity)||this}var t=e.prototype;return t.pipe=function(){for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return pipeFromArray(s)(this)},t.lift=function(r){var s=this;return new e(function(o){return r.call(o,s)})},t["@@observable"]=function(){return this},e}(observable),Callable=function(a){_inheritsLoose(e,a);function e(){var i;return i=a.call(this,"...args","return this._bound.__call__(...args)")||this,i._bound=i.bind(_assertThisInitialized(i)),i._bound||_assertThisInitialized(i)}var t=e.prototype;return t.__call__=function(){},e}(_wrapNativeSuper(Function)),defaultPriority=1;function getPriority(a){return a._priority_}var Emitter=function(a){_inheritsLoose(e,a);function e(i){var r;return r=a.call(this,i)||this,r._topics=r._topics||(r._topics={}),r}var t=e.prototype;return t.fromEvent=function(r,s){var o=this;return new Observable(function(l){var c=function(h){return l.next(h)};return o.on(r,c,s),function(){o.off(r,c)}})},t.on=function(r,s,o,l){if(typeof r=="object"){for(var c in r)this.on(c,r[c],s,o);return this}var u=this._topics[r]||(this._topics[r]=[]),h=s;typeof o=="object"?(s=s.bind(o),s._bindfn_=h,s._one_=h._one_,s._scope_=o):l===void 0&&(l=o),s._priority_=l===void 0?defaultPriority:l;var d=sortedIndex(u,s,getPriority);return u.splice(d,0,s),this},t.off=function(r,s,o){if(r===!0)return this._topics={},this;if(typeof r=="object"){for(var l in r)this.off(l,r[l],s);return this}var c=this._topics[r];if(!c)return this;if(s===!0)return this._topics[r]=[],this;for(var u=0,h=c.length;u<h;u++){var d=c[u];if((d._bindfn_===s||d===s)&&(!o||d._scope_===o)){c.splice(u,1);break}}return this},t.emit=function(r,s){var o=this._topics[r],l=o&&o.length;if(!l)return this;var c={};for(c.topic=r;l--;){var u=o[l];u(s,c),u._one_&&o.splice(l,1)}return this},t.one=function(r,s,o){if(typeof r=="object"){for(var l in r)this.one(l,r[l],s,o);return this}return s._one_=!0,this.on(r,s,o),this},e}(Observable),index$3=Object.freeze({__proto__:null,Callable,Emitter,identity,typeName,now,castArray,lerp:lerp$1,invLerp:invLerp$1,clamp,lerpClamped,invLerpClamped,cloneDeep,isObjectLike,isPlainObject,filterObjectValues,sanitizedObject,mapProperties,pick,mergeIntersecting,sortedIndex,getIntersectingPaths,pull,shortestModDist,combineEasing}),Pi2$1=Math.PI*2,makeElasticIn=function(e,t){e===void 0&&(e=.1),t===void 0&&(t=.1);var i=t/4;e<1?e=1:i=t*Math.asin(1/e)/Pi2$1;var r=Pi2$1/t;return function(s){return s===0?0:s===1?1:-(e*Math.pow(2,10*(s-=1))*Math.sin((s-i)*r))}},makeElasticOut=function(e,t){e===void 0&&(e=.1),t===void 0&&(t=.1);var i=t/4;e<1?e=1:i=t*Math.asin(1/e)/Pi2$1;var r=Pi2$1/t;return function(s){return s===0?0:s===1?1:e*Math.pow(2,-10*s)*Math.sin((s-i)*r)+1}},makeElasticInOut=function(e,t){e===void 0&&(e=.1),t===void 0&&(t=.1);var i=t/4;e<1?e=1:i=t*Math.asin(1/e)/Pi2$1;var r=Pi2$1/t;return function(s){return s===0?0:s===1?1:(s*=2)<1?-.5*(e*Math.pow(2,10*(s-=1))*Math.sin((s-i)*r)):e*Math.pow(2,-10*(s-=1))*Math.sin((s-i)*r)*.5+1}},makeBackIn=function(e){return e===void 0&&(e=1.70158),function(t){return t*t*((e+1)*t-e)}},makeBackOut=function(e){return e===void 0&&(e=1.70158),function(t){return--t*t*((e+1)*t+e)+1}},makeBackInOut=function(e){return e===void 0&&(e=1.70158),function(t){var i=e*1.525;return(t*=2)<1?.5*(t*t*((i+1)*t-i)):.5*((t-=2)*t*((i+1)*t+i)+2)}},makeSteps=function(e){return e===void 0&&(e=1),function(t){return((e*t|0)+1)*(1/e)}},halfPi=Math.PI/2,linear$1=function(e){return e},quadIn=function(e){return e*e},quadOut=function(e){return e*(2-e)},quadInOut=function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)},cubicIn=function(e){return e*e*e},cubicOut=function(e){return--e*e*e+1},cubicInOut=function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)},quartIn=function(e){return e*e*e*e},quartOut=function(e){return 1- --e*e*e*e},quartInOut=function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)},quintIn=function(e){return e*e*e*e*e},quintOut=function(e){return--e*e*e*e*e+1},quintInOut=function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)},sinIn=function(e){return 1-Math.cos(e*halfPi)},sinOut=function(e){return Math.sin(e*halfPi)},sinInOut=function(e){return .5*(1-Math.cos(Math.PI*e))},expIn=function(e){return e===0?0:Math.pow(1024,e-1)},expOut=function(e){return e===0?0:1-Math.pow(1024,-e)},expInOut=function(e){return e===0?0:e===1?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(2-Math.pow(1024,1-e))},elasticIn=makeElasticIn(),elasticOut=makeElasticOut(),elasticInOut=makeElasticInOut(),circularIn=function(e){return 1-Math.sqrt(1-e*e)},circularOut=function(e){return Math.sqrt(1- --e*e)},circularInOut=function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)},bounceIn=function(e){return e=1-e,e<1/2.75?1-7.5625*e*e:e<2/2.75?1-(7.5625*(e-=1.5/2.75)*e+.75):e<2.5/2.75?1-(7.5625*(e-=2.25/2.75)*e+.9375):1-(7.5625*(e-=2.625/2.75)*e+.984375)},bounceOut=function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},bounceInOut=function(e){var t=!1;return e<.5?(e=1-e*2,t=!0):e=e*2-1,e<1/2.75?e=7.5625*e*e:e<2/2.75?e=7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?e=7.5625*(e-=2.25/2.75)*e+.9375:e=7.5625*(e-=2.625/2.75)*e+.984375,t?(1-e)*.5:e*.5+.5},backIn=makeBackIn(),backOut=makeBackOut(),backInOut=makeBackInOut(),step$1=makeSteps(),index$2=Object.freeze({__proto__:null,makeElasticIn,makeElasticOut,makeElasticInOut,makeBackIn,makeBackOut,makeBackInOut,makeSteps,linear:linear$1,quadIn,quadOut,quadInOut,cubicIn,cubicOut,cubicInOut,quartIn,quartOut,quartInOut,quintIn,quintOut,quintInOut,sinIn,sinOut,sinInOut,expIn,expOut,expInOut,elasticIn,elasticOut,elasticInOut,circularIn,circularOut,circularInOut,bounceIn,bounceOut,bounceInOut,backIn,backOut,backInOut,step:step$1}),makeToggle=function(e){return function(t,i,r){return r>=e?i:t}},makeForArray=function(e){return function(t,i,r){return i.map(function(s,o){return e(t[o],s,r)})}},linear=function(e,t,i){return lerp$1(e,t,i)},array=makeForArray(lerp$1),object=function(e,t,i){return mapProperties(e,function(r,s){return lerp$1(r,t[s],i)})},string=function(e,t,i){if(i<=0)return e;var r=lerp$1(0,t.length,i)|0;return t.substr(0,r)},toggle=makeToggle(1),NATIVE_TYPES={number:{type:"number",default:0,interpolator:linear},string:{type:"string",default:"",interpolator:string},boolean:{type:"boolean",default:!1,interpolator:toggle},array:{type:"array",default:[],interpolator:array},object:{type:"object",default:{},interpolator:object}},CUSTOM_TYPES={};function getTypeCfg(a){var e=NATIVE_TYPES[a]||CUSTOM_TYPES[a];if(!e)throw new Error("Unrecognized type "+a);return e}["value"].concat(Object.keys(getTypeCfg("object")));var win;typeof window<"u"?win=window:typeof commonjsGlobal$1<"u"?win=commonjsGlobal$1:typeof self<"u"?win=self:win={};var window_1=win;(function(a){return a.requestAnimationFrame||function(e){var t=setTimeout(e,16);return t.unref&&t.unref(),t}})(window_1);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.16.1
 * @author George Michael Brower
 * @license MIT
 */class Controller{constructor(e,t,i,r,s="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Controller.nextNameID=Controller.nextNameID||0,this.$name.id=`lil-gui-name-${++Controller.nextNameID}`,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class BooleanController extends Controller{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function normalizeColorString(a){let e,t;return(e=a.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=a.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=a.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const STRING={isPrimitive:!0,match:a=>typeof a=="string",fromHexString:normalizeColorString,toHexString:normalizeColorString},INT={isPrimitive:!0,match:a=>typeof a=="number",fromHexString:a=>parseInt(a.substring(1),16),toHexString:a=>"#"+a.toString(16).padStart(6,0)},ARRAY={isPrimitive:!1,match:Array.isArray,fromHexString(a,e,t=1){const i=INT.fromHexString(a);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([a,e,t],i=1){i=255/i;const r=a*i<<16^e*i<<8^t*i<<0;return INT.toHexString(r)}},OBJECT={isPrimitive:!1,match:a=>Object(a)===a,fromHexString(a,e,t=1){const i=INT.fromHexString(a);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:a,g:e,b:t},i=1){i=255/i;const r=a*i<<16^e*i<<8^t*i<<0;return INT.toHexString(r)}},FORMATS=[STRING,INT,ARRAY,OBJECT];function getColorFormat(a){return FORMATS.find(e=>e.match(a))}class ColorController extends Controller{constructor(e,t,i,r){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=getColorFormat(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=normalizeColorString(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class FunctionController extends Controller{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class NumberController extends Controller{constructor(e,t,i,r,s,o){super(e,t,i,"number"),this._initInput(),this.min(r),this.max(s);const l=o!==void 0;this.step(l?o:this._getImplicitStep(),l),this.updateDisplay()}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=e),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{const y=parseFloat(this.$input.value);isNaN(y)||this.setValue(this._clamp(y))},t=y=>{const b=parseFloat(this.$input.value);isNaN(b)||(this._snapClampSetValue(b+y),this.$input.value=this.getValue())},i=y=>{y.code==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),t(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),t(this._step*this._arrowKeyMultiplier(y)*-1))},r=y=>{this._inputFocused&&(y.preventDefault(),t(this._step*this._normalizeMouseWheel(y)))};let s=!1,o,l,c,u,h;const d=5,p=y=>{o=y.clientX,l=c=y.clientY,s=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",g)},m=y=>{if(s){const b=y.clientX-o,x=y.clientY-l;Math.abs(x)>d?(y.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(b)>d&&g()}if(!s){const b=y.clientY-c;h-=b*this._step*this._arrowKeyMultiplier(y),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=y.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",g)},v=()=>{this._inputFocused=!0},_=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",v),this.$input.addEventListener("blur",_)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(y,b,x,S,M)=>(y-b)/(x-b)*(M-S)+S,t=y=>{const b=this.$slider.getBoundingClientRect();let x=e(y,b.left,b.right,this._min,this._max);this._snapClampSetValue(x)},i=y=>{this._setDraggingStyle(!0),t(y.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=y=>{t(y.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let o=!1,l,c;const u=y=>{y.preventDefault(),this._setDraggingStyle(!0),t(y.touches[0].clientX),o=!1},h=y=>{y.touches.length>1||(this._hasScrollBar?(l=y.touches[0].clientX,c=y.touches[0].clientY,o=!0):u(y),window.addEventListener("touchmove",d),window.addEventListener("touchend",p))},d=y=>{if(o){const b=y.touches[0].clientX-l,x=y.touches[0].clientY-c;Math.abs(b)>Math.abs(x)?u(y):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",p))}else y.preventDefault(),t(y.touches[0].clientX)},p=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",p)},m=this._callOnFinishChange.bind(this),g=400;let v;const _=y=>{if(Math.abs(y.deltaX)<Math.abs(y.deltaY)&&this._hasScrollBar)return;y.preventDefault();const x=this._normalizeMouseWheel(y)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(v),v=setTimeout(m,g)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",_,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class OptionController extends Controller{constructor(e,t,i,r){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(s=>{const o=document.createElement("option");o.innerHTML=s,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class StringController extends Controller{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const stylesheet=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function _injectStyles(a){const e=document.createElement("style");e.innerHTML=a;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let stylesInjected=!1;class GUI{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:r,title:s="Controls",injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),l&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!stylesInjected&&o&&(_injectStyles(stylesheet),stylesInjected=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(e,t,i,r,s){if(Object(i)===i)return new OptionController(this,e,t,i);const o=e[t];switch(typeof o){case"number":return new NumberController(this,e,t,i,r,s);case"boolean":return new BooleanController(this,e,t);case"string":return new StringController(this,e,t);case"function":return new FunctionController(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new ColorController(this,e,t,i)}addFolder(e){return new GUI({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof FunctionController||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof FunctionController)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function getAugmentedNamespace(a){if(a.__esModule)return a;var e=a.default;if(typeof e=="function"){var t=function i(){if(this instanceof i){var r=[null];r.push.apply(r,arguments);var s=Function.bind.apply(e,r);return new s}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(a).forEach(function(i){var r=Object.getOwnPropertyDescriptor(a,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return a[i]}})}),t}var assign=make_assign(),create$1=make_create(),trim$1=make_trim(),Global$5=typeof window<"u"?window:commonjsGlobal,util$6={assign,create:create$1,trim:trim$1,bind:bind$1,slice:slice$1,each:each$7,map,pluck:pluck$1,isList:isList$1,isFunction:isFunction$1,isObject:isObject$1,Global:Global$5};function make_assign(){return Object.assign?Object.assign:function(e,t,i,r){for(var s=1;s<arguments.length;s++)each$7(Object(arguments[s]),function(o,l){e[l]=o});return e}}function make_create(){if(Object.create)return function(t,i,r,s){var o=slice$1(arguments,1);return assign.apply(this,[Object.create(t)].concat(o))};{let e=function(){};var a=e;return function(i,r,s,o){var l=slice$1(arguments,1);return e.prototype=i,assign.apply(this,[new e].concat(l))}}}function make_trim(){return String.prototype.trim?function(e){return String.prototype.trim.call(e)}:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}}function bind$1(a,e){return function(){return e.apply(a,Array.prototype.slice.call(arguments,0))}}function slice$1(a,e){return Array.prototype.slice.call(a,e||0)}function each$7(a,e){pluck$1(a,function(t,i){return e(t,i),!1})}function map(a,e){var t=isList$1(a)?[]:{};return pluck$1(a,function(i,r){return t[r]=e(i,r),!1}),t}function pluck$1(a,e){if(isList$1(a)){for(var t=0;t<a.length;t++)if(e(a[t],t))return a[t]}else for(var i in a)if(a.hasOwnProperty(i)&&e(a[i],i))return a[i]}function isList$1(a){return a!=null&&typeof a!="function"&&typeof a.length=="number"}function isFunction$1(a){return a&&{}.toString.call(a)==="[object Function]"}function isObject$1(a){return a&&{}.toString.call(a)==="[object Object]"}var util$5=util$6,slice=util$5.slice,pluck=util$5.pluck,each$6=util$5.each,bind=util$5.bind,create=util$5.create,isList=util$5.isList,isFunction=util$5.isFunction,isObject=util$5.isObject,storeEngine={createStore},storeAPI={version:"2.0.12",enabled:!1,get:function(a,e){var t=this.storage.read(this._namespacePrefix+a);return this._deserialize(t,e)},set:function(a,e){return e===void 0?this.remove(a):(this.storage.write(this._namespacePrefix+a,this._serialize(e)),e)},remove:function(a){this.storage.remove(this._namespacePrefix+a)},each:function(a){var e=this;this.storage.each(function(t,i){a.call(e,e._deserialize(t),(i||"").replace(e._namespaceRegexp,""))})},clearAll:function(){this.storage.clearAll()},hasNamespace:function(a){return this._namespacePrefix=="__storejs_"+a+"_"},createStore:function(){return createStore.apply(this,arguments)},addPlugin:function(a){this._addPlugin(a)},namespace:function(a){return createStore(this.storage,this.plugins,a)}};function _warn(){var a=typeof console>"u"?null:console;if(a){var e=a.warn?a.warn:a.log;e.apply(a,arguments)}}function createStore(a,e,t){t||(t=""),a&&!isList(a)&&(a=[a]),e&&!isList(e)&&(e=[e]);var i=t?"__storejs_"+t+"_":"",r=t?new RegExp("^"+i):null,s=/^[a-zA-Z0-9_\-]*$/;if(!s.test(t))throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");var o={_namespacePrefix:i,_namespaceRegexp:r,_testStorage:function(c){try{var u="__storejs__test__";c.write(u,u);var h=c.read(u)===u;return c.remove(u),h}catch{return!1}},_assignPluginFnProp:function(c,u){var h=this[u];this[u]=function(){var p=slice(arguments,0),m=this;function g(){if(h)return each$6(arguments,function(_,y){p[y]=_}),h.apply(m,p)}var v=[g].concat(p);return c.apply(m,v)}},_serialize:function(c){return JSON.stringify(c)},_deserialize:function(c,u){if(!c)return u;var h="";try{h=JSON.parse(c)}catch{h=c}return h!==void 0?h:u},_addStorage:function(c){this.enabled||this._testStorage(c)&&(this.storage=c,this.enabled=!0)},_addPlugin:function(c){var u=this;if(isList(c)){each$6(c,function(p){u._addPlugin(p)});return}var h=pluck(this.plugins,function(p){return c===p});if(!h){if(this.plugins.push(c),!isFunction(c))throw new Error("Plugins must be function values that return objects");var d=c.call(this);if(!isObject(d))throw new Error("Plugins must return an object of function properties");each$6(d,function(p,m){if(!isFunction(p))throw new Error("Bad plugin property: "+m+" from plugin "+c.name+". Plugins should only return functions.");u._assignPluginFnProp(p,m)})}},addStorage:function(c){_warn("store.addStorage(storage) is deprecated. Use createStore([storages])"),this._addStorage(c)}},l=create(o,storeAPI,{plugins:[]});return l.raw={},each$6(l,function(c,u){isFunction(c)&&(l.raw[u]=bind(l,c))}),each$6(a,function(c){l._addStorage(c)}),each$6(e,function(c){l._addPlugin(c)}),l}var util$4=util$6,Global$4=util$4.Global,localStorage_1={name:"localStorage",read:read$5,write:write$5,each:each$5,remove:remove$5,clearAll:clearAll$5};function localStorage(){return Global$4.localStorage}function read$5(a){return localStorage().getItem(a)}function write$5(a,e){return localStorage().setItem(a,e)}function each$5(a){for(var e=localStorage().length-1;e>=0;e--){var t=localStorage().key(e);a(read$5(t),t)}}function remove$5(a){return localStorage().removeItem(a)}function clearAll$5(){return localStorage().clear()}var util$3=util$6,Global$3=util$3.Global,oldFFGlobalStorage={name:"oldFF-globalStorage",read:read$4,write:write$4,each:each$4,remove:remove$4,clearAll:clearAll$4},globalStorage=Global$3.globalStorage;function read$4(a){return globalStorage[a]}function write$4(a,e){globalStorage[a]=e}function each$4(a){for(var e=globalStorage.length-1;e>=0;e--){var t=globalStorage.key(e);a(globalStorage[t],t)}}function remove$4(a){return globalStorage.removeItem(a)}function clearAll$4(){each$4(function(a,e){delete globalStorage[a]})}var util$2=util$6,Global$2=util$2.Global,oldIEUserDataStorage={name:"oldIE-userDataStorage",write:write$3,read:read$3,each:each$3,remove:remove$3,clearAll:clearAll$3},storageName="storejs",doc$1=Global$2.document,_withStorageEl=_makeIEStorageElFunction(),disable=(Global$2.navigator?Global$2.navigator.userAgent:"").match(/ (MSIE 8|MSIE 9|MSIE 10)\./);function write$3(a,e){if(!disable){var t=fixKey(a);_withStorageEl(function(i){i.setAttribute(t,e),i.save(storageName)})}}function read$3(a){if(!disable){var e=fixKey(a),t=null;return _withStorageEl(function(i){t=i.getAttribute(e)}),t}}function each$3(a){_withStorageEl(function(e){for(var t=e.XMLDocument.documentElement.attributes,i=t.length-1;i>=0;i--){var r=t[i];a(e.getAttribute(r.name),r.name)}})}function remove$3(a){var e=fixKey(a);_withStorageEl(function(t){t.removeAttribute(e),t.save(storageName)})}function clearAll$3(){_withStorageEl(function(a){var e=a.XMLDocument.documentElement.attributes;a.load(storageName);for(var t=e.length-1;t>=0;t--)a.removeAttribute(e[t].name);a.save(storageName)})}var forbiddenCharsRegex=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");function fixKey(a){return a.replace(/^\d/,"___$&").replace(forbiddenCharsRegex,"___")}function _makeIEStorageElFunction(){if(!doc$1||!doc$1.documentElement||!doc$1.documentElement.addBehavior)return null;var a="script",e,t,i;try{t=new ActiveXObject("htmlfile"),t.open(),t.write("<"+a+">document.w=window</"+a+'><iframe src="/favicon.ico"></iframe>'),t.close(),e=t.w.frames[0].document,i=e.createElement("div")}catch{i=doc$1.createElement("div"),e=doc$1.body}return function(r){var s=[].slice.call(arguments,0);s.unshift(i),e.appendChild(i),i.addBehavior("#default#userData"),i.load(storageName),r.apply(this,s),e.removeChild(i)}}var util$1=util$6,Global$1=util$1.Global,trim=util$1.trim,cookieStorage={name:"cookieStorage",read:read$2,write:write$2,each:each$2,remove:remove$2,clearAll:clearAll$2},doc=Global$1.document;function read$2(a){if(!a||!_has(a))return null;var e="(?:^|.*;\\s*)"+escape(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";return unescape(doc.cookie.replace(new RegExp(e),"$1"))}function each$2(a){for(var e=doc.cookie.split(/; ?/g),t=e.length-1;t>=0;t--)if(trim(e[t])){var i=e[t].split("="),r=unescape(i[0]),s=unescape(i[1]);a(s,r)}}function write$2(a,e){a&&(doc.cookie=escape(a)+"="+escape(e)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")}function remove$2(a){!a||!_has(a)||(doc.cookie=escape(a)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")}function clearAll$2(){each$2(function(a,e){remove$2(e)})}function _has(a){return new RegExp("(?:^|;\\s*)"+escape(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(doc.cookie)}var util=util$6,Global=util.Global,sessionStorage_1={name:"sessionStorage",read:read$1,write:write$1,each:each$1,remove:remove$1,clearAll:clearAll$1};function sessionStorage(){return Global.sessionStorage}function read$1(a){return sessionStorage().getItem(a)}function write$1(a,e){return sessionStorage().setItem(a,e)}function each$1(a){for(var e=sessionStorage().length-1;e>=0;e--){var t=sessionStorage().key(e);a(read$1(t),t)}}function remove$1(a){return sessionStorage().removeItem(a)}function clearAll$1(){return sessionStorage().clear()}var memoryStorage_1={name:"memoryStorage",read,write,each,remove,clearAll},memoryStorage={};function read(a){return memoryStorage[a]}function write(a,e){memoryStorage[a]=e}function each(a){for(var e in memoryStorage)memoryStorage.hasOwnProperty(e)&&a(memoryStorage[e],e)}function remove(a){delete memoryStorage[a]}function clearAll(a){memoryStorage={}}var all=[localStorage_1,oldFFGlobalStorage,oldIEUserDataStorage,cookieStorage,sessionStorage_1,memoryStorage_1],json2$1={},hasRequiredJson2;function requireJson2(){return hasRequiredJson2||(hasRequiredJson2=1,typeof JSON!="object"&&(JSON={}),function(){var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;function f(a){return a<10?"0"+a:a}function this_value(){return this.valueOf()}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;function quote(a){return rx_escapable.lastIndex=0,rx_escapable.test(a)?'"'+a.replace(rx_escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,e){var t,i,r,s,o=gap,l,c=e[a];switch(c&&typeof c=="object"&&typeof c.toJSON=="function"&&(c=c.toJSON(a)),typeof rep=="function"&&(c=rep.call(e,a,c)),typeof c){case"string":return quote(c);case"number":return isFinite(c)?String(c):"null";case"boolean":case"null":return String(c);case"object":if(!c)return"null";if(gap+=indent,l=[],Object.prototype.toString.apply(c)==="[object Array]"){for(s=c.length,t=0;t<s;t+=1)l[t]=str(t,c)||"null";return r=l.length===0?"[]":gap?`[
`+gap+l.join(`,
`+gap)+`
`+o+"]":"["+l.join(",")+"]",gap=o,r}if(rep&&typeof rep=="object")for(s=rep.length,t=0;t<s;t+=1)typeof rep[t]=="string"&&(i=rep[t],r=str(i,c),r&&l.push(quote(i)+(gap?": ":":")+r));else for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(r=str(i,c),r&&l.push(quote(i)+(gap?": ":":")+r));return r=l.length===0?"{}":gap?`{
`+gap+l.join(`,
`+gap)+`
`+o+"}":"{"+l.join(",")+"}",gap=o,r}}typeof JSON.stringify!="function"&&(meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(a,e,t){var i;if(gap="",indent="",typeof t=="number")for(i=0;i<t;i+=1)indent+=" ";else typeof t=="string"&&(indent=t);if(rep=e,e&&typeof e!="function"&&(typeof e!="object"||typeof e.length!="number"))throw new Error("JSON.stringify");return str("",{"":a})}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){var j;function walk(a,e){var t,i,r=a[e];if(r&&typeof r=="object")for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(i=walk(r,t),i!==void 0?r[t]=i:delete r[t]);return reviver.call(a,e,r)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}()),json2$1}var json2=json2Plugin;function json2Plugin(){return requireJson2(),{}}var engine=storeEngine,storages=all,plugins=[json2],store_legacy=engine.createStore(storages,plugins);/**
 * view-draw 0.0.4
 * @license GPL-3.0
 * Copyright 2021-present Jasper Palfree
 */var lerp=function a(e,t,i){return e*(1-i)+t*i},invLerp=function a(e,t,i){var r=t-e;return r?(i-e)/r:1},angle=function a(e,t){var i=e[0],r=e[1],s=t[0],o=t[1];return s-=i,o-=r,Math.atan2(o,s)},rescale=function a(e,t){return[lerp(t[0],t[1],e[0]),lerp(t[2],t[3],e[1])]},normalize=function a(e,t){return[invLerp(t[0],t[1],e[0]),invLerp(t[2],t[3],e[1])]},makeProjection=function a(e,t){var i=e.name,r=e.to,s=e.from;t===void 0&&(t=[0,1,0,1]);var o={name:i,to:r,from:s,viewbox:t};return o.toCameraSize=function(l,c){var u=l[1]-l[0];return u*c/(o.viewbox[1]-o.viewbox[0])},o.fromCameraSize=function(l,c){var u=l[1]-l[0];return(o.viewbox[1]-o.viewbox[0])*c/u},o.toCamera=function(l,c){return rescale(r(normalize(c,o.viewbox)),l)},o.fromCamera=function(l,c){return rescale(s(normalize(c,l)),o.viewbox)},o},Pi2=Math.PI*2,cartesian={to:function a(e){return e},from:function a(e){return e}},polar={to:function a(e){var t=e[0],i=e[1];i*=Pi2;var r=t*Math.cos(i),s=t*Math.sin(i);return[r,s]},from:function a(e){var t=e[0],i=e[1],r=Math.sqrt(t*t+i*i),s=Math.atan2(i,t);return[r,s/Pi2]}},Projections=Object.freeze({__proto__:null,makeProjection,cartesian,polar});function centroid(a){for(var e=0,t=0,i=a.length,r=0;r<i;r++){var s=a[r];e+=s[0],t+=s[1]}return[e/i,t/i]}function triangleFromSides(a,e,t,i){i===void 0&&(i=!0);var r=Math.max(a,e,t);if(r===a){var s=[t,a];a=s[0],t=s[1]}else if(r===e){var o=[t,e];e=o[0],t=o[1]}var l=a===0?0:(a*a-e*e+t*t)/(2*t),c=Math.sqrt(a*a-l*l),u=[[0,0],[l,c],[t,0]];if(i)for(var h=centroid(u),d=h[0],p=h[1],m=0,g=u.length;m<g;m++)u[m][0]-=d,u[m][1]-=p;return u}var UNIT_BOUNDS=[0,1,0,1],Draw=function(){a.create=function(i,r){return r===void 0&&(r={}),new a(i,r)};function a(t,i){this.proj=t,this.projCanonical=makeProjection(cartesian),this.options=i,this.saveStateCount=0,this._internalState=[]}var e=a.prototype;return e.init=function(i,r){i!==this.canvas&&(this.canvas=i,this.ctx=i.getContext("2d")),this._useCanonical=!1,this.width=i.width,this.height=i.height,this.bounds=i.getBoundingClientRect();var s=this.width/this.bounds.width,o=.5*this.width/s,l=.5*this.height/s,c=this.options.scaleMode==="fit"?Math.min(o,l):Math.max(o,l),u=c*r.scale,h=this.proj.toCamera(UNIT_BOUNDS,r.center);return this.cameraBounds=[-h[0]*u+o,(1-h[0])*u+o,-h[1]*u+l,(1-h[1])*u+l],this.worldUnit=[0,c,0,c],this.worldScale=[0,u,0,u],this.ctx.setTransform(s,0,0,s,0,0),this},e.canonical=function(i){return i===void 0&&(i=!0),this._useCanonical=i,this},e.toCamera=function(i){return this._useCanonical?this.projCanonical.toCamera(this.cameraBounds,i):this.proj.toCamera(this.cameraBounds,i)},e.toCameraSize=function(i){return this._useCanonical?this.projCanonical.toCameraSize(this.cameraBounds,i):this.proj.toCameraSize(this.cameraBounds,i)},e.save=function(){return this.saveStateCount++,this._internalState.push({_useCanonical:this._useCanonical}),this.ctx.save(),this},e.restore=function(){this.ctx.restore();var i=this._internalState.pop();return Object.assign(this,i),this.saveStateCount=Math.max(this.saveStateCount-1,0),this},e.end=function(){this.saveStateCount&&window.console.warn("Warning: Forgot to call restore() after save().")},e.clear=function(){return this.ctx.clearRect(0,0,this.width,this.height),this},e.color=function(i){return i?(this.ctx.fillStyle!==i&&(this.ctx.fillStyle=i),this.ctx.strokeStyle!==i&&(this.ctx.strokeStyle=i),this):this},e.style=function(i,r){if(r!==void 0&&r)return this.ctx[i]=r,this;for(var s in i){var o=i[s];this.ctx[s]!==o&&o&&(this.ctx[s]=o)}return this},e.translate=function(i){var r=this.ctx,s=this._useCanonical?this.projCanonical.toCamera(this.worldScale,i):this.proj.toCamera(this.worldScale,i),o=s[0],l=s[1];return r.translate(o,l),this},e.rotate=function(i){var r=this.toCamera([0,0]);return this.ctx.translate(r[0],r[1]),this.ctx.rotate(i),this.ctx.translate(-r[0],-r[1]),this},e.dot=function(i,r){r===void 0&&(r=1);var s=this.ctx,o=this.toCamera(i),l=o[0],c=o[1];return s.beginPath(),s.arc(l,c,r,0,2*Math.PI),s.fill(),this},e.paint=function(i,r){i===void 0&&(i=!0),r===void 0&&(r=0);var s=this.ctx;return i&&s.fill(),r&&(this.style("lineWidth",r),s.stroke()),this},e.text=function(i,r,s){var o=s===void 0?{}:s,l=o.font,c=l===void 0?"12px monospace":l,u=o.textAlign,h=u===void 0?"center":u,d=this.toCamera(r),p=d[0],m=d[1];return this.style("font",c).style("textAlign",h),this.ctx.fillText(i,p,m),this},e.arrow=function(i,r,s){var o=s===void 0?{}:s,l=o.stroke,c=l===void 0?1:l,u=o.scaleHead,h=u===void 0?!1:u,d=o.headSize,p=d===void 0?6:d,m=o.headColor;this.path([i,r],!1,!1,c);var g=this.proj.fromCameraSize(h?this.worldUnit:this.cameraBounds,p);this.save(),this.translate(r),this.color(m);var v=this.toCamera(i),_=this.toCamera(r),y=angle(v,_);return this.rotate(y),this.canonical(!0),this.path([[0,0],[-g,g],[-g,-g]],!0,!0),this.restore(),this},e.circle=function(i,r,s,o){s===void 0&&(s=!0),o===void 0&&(o=0);var l=this.ctx,c=this.toCamera(i),u=c[0],h=c[1];return r=this.toCameraSize(r),l.beginPath(),l.arc(u,h,r,0,2*Math.PI),this.paint(s,o),this},e.path=function(i,r,s,o){if(r===void 0&&(r=!1),!i.length)return this;var l=this.ctx;l.beginPath();var c=this.toCamera(i[0]);l.moveTo(c[0],c[1]);for(var u=1,h=i.length;u<h;u++)c=this.toCamera(i[u]),l.lineTo(c[0],c[1]);return r&&l.closePath(),this.paint(s,o),this},e.triangle=function(i,r,s,o,l,c,u){var h=o===void 0?[0,0]:o,d=h[0],p=h[1];l===void 0&&(l=0);var m=triangleFromSides(i,r,s);return this.save(),this.translate([d,p]),this.rotate(l),this.canonical(!0),this.path(m,!0,c,u),this.restore(),this},a}();function createView(a,e,t,i){i===void 0&&(i={scaleMode:"fit"}),typeof a=="string"?a=Projections[a]:a!=="object"&&(t=e,e=a,a=cartesian),Array.isArray(e)||(t=e,e=void 0);var r=makeProjection(a,e),s={center:[0,0],scale:1,proj:r},o=Draw.create(r,i);return s.toViewCoords=function(l,c,u){return u===void 0&&(u=!1),o.init(c,s),r.fromCamera(u?o.worldUnit:o.cameraBounds,l)},s.getMousePos=function(l,c,u){u===void 0&&(u=!1),o.init(c,s);var h=[l.clientX-o.bounds.left,l.clientY-o.bounds.top];return s.toViewCoords(h,c,u)},s.camera=function(l,c){return c===void 0&&(c=1),s.center=l,s.scale=c,s},s.draw=function(l){o.init(l,s),o.clear();for(var c=arguments.length,u=new Array(c>1?c-1:0),h=1;h<c;h++)u[h-1]=arguments[h];return t.apply(void 0,[o].concat(u)),o.end(),s},s.drawOver=function(l){o.init(l,s);for(var c=arguments.length,u=new Array(c>1?c-1:0),h=1;h<c;h++)u[h-1]=arguments[h];return t.apply(void 0,[o].concat(u)),o.end(),s},s.setViewbox=function(l){return r.viewbox=l,s},s}function createCanvas(a){var e=a===void 0?{}:a,t=e.autoResize,i=t===void 0?!0:t,r=e.pixelRatio,s=r===void 0?window.devicePixelRatio||1:r,o=e.width,l=o===void 0?0:o,c=e.height,u=c===void 0?0:c,h=e.aspectRatio,d=h===void 0?null:h,p=e.el,m=p===void 0?document.body:p,g=e.background,v=g===void 0?"hsl(0, 0%, 10%)":g,_=e.onResize,y=_===void 0?function(){}:_,b=m.tagName==="CANVAS"?m:document.createElement("canvas"),x=b.getContext("2d"),S={w:!l,h:!u},M={};b.style.display="flex",b.style.background=v,b.style.transform="scale("+1/s+")",b.style.transformOrigin="top left",m.tagName!=="CANVAS"&&m.appendChild(b);var E=function(){var A=b.parentNode;A&&(S.w&&(l=A.clientWidth),S.h&&(d?u=l/d:u=A.clientHeight),M.width=l,M.height=u,b.style.marginBottom=(1-s)*u+"px",b.width=s*l,b.height=s*u,x.scale(s,s),y(M))};i&&window.addEventListener("resize",E),E();var R=function(){i&&window.removeEventListener("resize",E),b.parentNode&&b.parentNode.removeChild(b)};return{canvas:b,ctx:x,destroy:R,dimensions:M,refresh:E}}const arrowProps={stroke:2,headSize:12},view=createView("polar",[0,1.15,Math.PI,-Math.PI],(a,e)=>{a.color("#00fdf8").arrow([0,0],[1,e.angle],arrowProps)});function createPendulumView(a){const{canvas:e,destroy:t}=createCanvas({el:a});return{update:r=>{view.draw(e,r)},destroy:t}}const _changeEvent={type:"change"},_startEvent={type:"start"},_endEvent={type:"end"};class OrbitControls extends EventDispatcher{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:MOUSE.ROTATE,MIDDLE:MOUSE.DOLLY,RIGHT:MOUSE.PAN},this.touches={ONE:TOUCH.ROTATE,TWO:TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",Le),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Le),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(_changeEvent),i.update(),s=r.NONE},this.update=function(){const I=new Vector3,U=new Quaternion().setFromUnitVectors(e.up,new Vector3(0,1,0)),de=U.clone().invert(),ue=new Vector3,we=new Quaternion,Te=2*Math.PI;return function(){const Ve=i.object.position;I.copy(Ve).sub(i.target),I.applyQuaternion(U),l.setFromVector3(I),i.autoRotate&&s===r.NONE&&A(R()),i.enableDamping?(l.theta+=c.theta*i.dampingFactor,l.phi+=c.phi*i.dampingFactor):(l.theta+=c.theta,l.phi+=c.phi);let Ie=i.minAzimuthAngle,Fe=i.maxAzimuthAngle;return isFinite(Ie)&&isFinite(Fe)&&(Ie<-Math.PI?Ie+=Te:Ie>Math.PI&&(Ie-=Te),Fe<-Math.PI?Fe+=Te:Fe>Math.PI&&(Fe-=Te),Ie<=Fe?l.theta=Math.max(Ie,Math.min(Fe,l.theta)):l.theta=l.theta>(Ie+Fe)/2?Math.max(Ie,l.theta):Math.min(Fe,l.theta)),l.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=u,l.radius=Math.max(i.minDistance,Math.min(i.maxDistance,l.radius)),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),I.setFromSpherical(l),I.applyQuaternion(de),Ve.copy(i.target).add(I),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),u=1,d||ue.distanceToSquared(i.object.position)>o||8*(1-we.dot(i.object.quaternion))>o?(i.dispatchEvent(_changeEvent),ue.copy(i.object.position),we.copy(i.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",H),i.domElement.removeEventListener("pointerdown",le),i.domElement.removeEventListener("pointercancel",Ee),i.domElement.removeEventListener("wheel",De),i.domElement.removeEventListener("pointermove",_e),i.domElement.removeEventListener("pointerup",pe),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Le),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,l=new Spherical,c=new Spherical;let u=1;const h=new Vector3;let d=!1;const p=new Vector2,m=new Vector2,g=new Vector2,v=new Vector2,_=new Vector2,y=new Vector2,b=new Vector2,x=new Vector2,S=new Vector2,M=[],E={};function R(){return 2*Math.PI/60/60*i.autoRotateSpeed}function w(){return Math.pow(.95,i.zoomSpeed)}function A(I){c.theta-=I}function L(I){c.phi-=I}const V=function(){const I=new Vector3;return function(de,ue){I.setFromMatrixColumn(ue,0),I.multiplyScalar(-de),h.add(I)}}(),D=function(){const I=new Vector3;return function(de,ue){i.screenSpacePanning===!0?I.setFromMatrixColumn(ue,1):(I.setFromMatrixColumn(ue,0),I.crossVectors(i.object.up,I)),I.multiplyScalar(de),h.add(I)}}(),B=function(){const I=new Vector3;return function(de,ue){const we=i.domElement;if(i.object.isPerspectiveCamera){const Te=i.object.position;I.copy(Te).sub(i.target);let Ae=I.length();Ae*=Math.tan(i.object.fov/2*Math.PI/180),V(2*de*Ae/we.clientHeight,i.object.matrix),D(2*ue*Ae/we.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(V(de*(i.object.right-i.object.left)/i.object.zoom/we.clientWidth,i.object.matrix),D(ue*(i.object.top-i.object.bottom)/i.object.zoom/we.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function O(I){i.object.isPerspectiveCamera?u/=I:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*I)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(I){i.object.isPerspectiveCamera?u*=I:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/I)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(I){p.set(I.clientX,I.clientY)}function ne(I){b.set(I.clientX,I.clientY)}function q(I){v.set(I.clientX,I.clientY)}function Q(I){m.set(I.clientX,I.clientY),g.subVectors(m,p).multiplyScalar(i.rotateSpeed);const U=i.domElement;A(2*Math.PI*g.x/U.clientHeight),L(2*Math.PI*g.y/U.clientHeight),p.copy(m),i.update()}function J(I){x.set(I.clientX,I.clientY),S.subVectors(x,b),S.y>0?O(w()):S.y<0&&$(w()),b.copy(x),i.update()}function ge(I){_.set(I.clientX,I.clientY),y.subVectors(_,v).multiplyScalar(i.panSpeed),B(y.x,y.y),v.copy(_),i.update()}function G(I){I.deltaY<0?$(w()):I.deltaY>0&&O(w()),i.update()}function te(I){let U=!1;switch(I.code){case i.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?L(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,i.keyPanSpeed),U=!0;break;case i.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?L(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,-i.keyPanSpeed),U=!0;break;case i.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?A(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(i.keyPanSpeed,0),U=!0;break;case i.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?A(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(-i.keyPanSpeed,0),U=!0;break}U&&(I.preventDefault(),i.update())}function he(){if(M.length===1)p.set(M[0].pageX,M[0].pageY);else{const I=.5*(M[0].pageX+M[1].pageX),U=.5*(M[0].pageY+M[1].pageY);p.set(I,U)}}function N(){if(M.length===1)v.set(M[0].pageX,M[0].pageY);else{const I=.5*(M[0].pageX+M[1].pageX),U=.5*(M[0].pageY+M[1].pageY);v.set(I,U)}}function re(){const I=M[0].pageX-M[1].pageX,U=M[0].pageY-M[1].pageY,de=Math.sqrt(I*I+U*U);b.set(0,de)}function oe(){i.enableZoom&&re(),i.enablePan&&N()}function ce(){i.enableZoom&&re(),i.enableRotate&&he()}function fe(I){if(M.length==1)m.set(I.pageX,I.pageY);else{const de=ye(I),ue=.5*(I.pageX+de.x),we=.5*(I.pageY+de.y);m.set(ue,we)}g.subVectors(m,p).multiplyScalar(i.rotateSpeed);const U=i.domElement;A(2*Math.PI*g.x/U.clientHeight),L(2*Math.PI*g.y/U.clientHeight),p.copy(m)}function ve(I){if(M.length===1)_.set(I.pageX,I.pageY);else{const U=ye(I),de=.5*(I.pageX+U.x),ue=.5*(I.pageY+U.y);_.set(de,ue)}y.subVectors(_,v).multiplyScalar(i.panSpeed),B(y.x,y.y),v.copy(_)}function Se(I){const U=ye(I),de=I.pageX-U.x,ue=I.pageY-U.y,we=Math.sqrt(de*de+ue*ue);x.set(0,we),S.set(0,Math.pow(x.y/b.y,i.zoomSpeed)),O(S.y),b.copy(x)}function Y(I){i.enableZoom&&Se(I),i.enablePan&&ve(I)}function ee(I){i.enableZoom&&Se(I),i.enableRotate&&fe(I)}function le(I){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(I.pointerId),i.domElement.addEventListener("pointermove",_e),i.domElement.addEventListener("pointerup",pe)),se(I),I.pointerType==="touch"?P(I):be(I))}function _e(I){i.enabled!==!1&&(I.pointerType==="touch"?T(I):Ce(I))}function pe(I){ae(I),M.length===0&&(i.domElement.releasePointerCapture(I.pointerId),i.domElement.removeEventListener("pointermove",_e),i.domElement.removeEventListener("pointerup",pe)),i.dispatchEvent(_endEvent),s=r.NONE}function Ee(I){ae(I)}function be(I){let U;switch(I.button){case 0:U=i.mouseButtons.LEFT;break;case 1:U=i.mouseButtons.MIDDLE;break;case 2:U=i.mouseButtons.RIGHT;break;default:U=-1}switch(U){case MOUSE.DOLLY:if(i.enableZoom===!1)return;ne(I),s=r.DOLLY;break;case MOUSE.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enablePan===!1)return;q(I),s=r.PAN}else{if(i.enableRotate===!1)return;W(I),s=r.ROTATE}break;case MOUSE.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enableRotate===!1)return;W(I),s=r.ROTATE}else{if(i.enablePan===!1)return;q(I),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(_startEvent)}function Ce(I){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;Q(I);break;case r.DOLLY:if(i.enableZoom===!1)return;J(I);break;case r.PAN:if(i.enablePan===!1)return;ge(I);break}}function De(I){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(I.preventDefault(),i.dispatchEvent(_startEvent),G(I),i.dispatchEvent(_endEvent))}function Le(I){i.enabled===!1||i.enablePan===!1||te(I)}function P(I){switch(me(I),M.length){case 1:switch(i.touches.ONE){case TOUCH.ROTATE:if(i.enableRotate===!1)return;he(),s=r.TOUCH_ROTATE;break;case TOUCH.PAN:if(i.enablePan===!1)return;N(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case TOUCH.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;oe(),s=r.TOUCH_DOLLY_PAN;break;case TOUCH.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ce(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(_startEvent)}function T(I){switch(me(I),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;fe(I),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ve(I),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Y(I),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ee(I),i.update();break;default:s=r.NONE}}function H(I){i.enabled!==!1&&I.preventDefault()}function se(I){M.push(I)}function ae(I){delete E[I.pointerId];for(let U=0;U<M.length;U++)if(M[U].pointerId==I.pointerId){M.splice(U,1);return}}function me(I){let U=E[I.pointerId];U===void 0&&(U=new Vector2,E[I.pointerId]=U),U.set(I.pageX,I.pageY)}function ye(I){const U=I.pointerId===M[0].pointerId?M[1]:M[0];return E[U.pointerId]}i.domElement.addEventListener("contextmenu",H),i.domElement.addEventListener("pointerdown",le),i.domElement.addEventListener("pointercancel",Ee),i.domElement.addEventListener("wheel",De,{passive:!1}),this.update()}}const white=new Color(16776700),red=new Color(13453362),blue=new Color(951935),grey=new Color(6250069),pink=new Color(14944371);new Color(16637499);new Color(12364129);new Color(6380613);new Color(10316617);new Color(14774016);const mustard=new Color(16633403);function createRollingEllipsoid(a=128){const e=new SphereGeometry(1,a,a),t=new MeshStandardMaterial({color:mustard,transparent:!0,opacity:.5,roughness:.2,side:DoubleSide}),i=new Mesh(e,t),r=new Group;return r.add(i),{ellipsoid:i,group:r,setScale:c=>{r.scale.set(c,c,c)},setOpacity:c=>{i.material.opacity=c},update:c=>{const{I1:u,I2:h,I3:d}=c,p=c.energy,m=c.angularMomentum.lengthSq(),g=d*p/m,v=Math.sqrt(g/u),_=Math.sqrt(g/h),y=Math.sqrt(g/d);i.scale.set(v,_,y)}}}function createRollingMomentumEllipsoid(a=128){const e=new SphereGeometry(1,a,a),t=new MeshStandardMaterial({color:pink,transparent:!0,opacity:.5,roughness:.2,side:DoubleSide}),i=new Mesh(e,t),r=new Group;return r.add(i),{ellipsoid:i,group:r,setScale:c=>{r.scale.set(c,c,c)},setOpacity:c=>{i.material.opacity=c},update:c=>{const{I1:u,I2:h,I3:d}=c,p=2,m=p/u,g=p/h,v=p/d;i.scale.set(m,g,v)}}}function createEllipsoids(a=128){const e=new SphereGeometry(1,a,a),t=new MeshStandardMaterial({color:pink,transparent:!0,opacity:.5,roughness:.2,side:DoubleSide}),i=new Mesh(e,t),r=new MeshStandardMaterial({color:white,transparent:!0,opacity:.7,roughness:.2}),s=new Mesh(e,r),o=new MeshBasicMaterial({color:white,transparent:!0,opacity:.5,wireframe:!0}),l=new SphereGeometry(1,16,16),c=new Mesh(l,o);c.renderOrder=1,i.renderOrder=2,s.renderOrder=3;const u=new Group;u.add(c,s);const h=new Group;h.add(i);const d=new Group;return d.add(u,h),{Tobj:u,Lobj:h,group:d,setScale:v=>{d.scale.set(v,v,v)},setOpacity:(v=.7,_=.7)=>{i.material.opacity=_,s.material.opacity=v,c.material.opacity=v*v},update:v=>{const{I1:_,I2:y,I3:b}=v,x=v.energy,S=v.angularMomentum.lengthSq(),M=x/S,E=Math.sqrt(M*_),R=Math.sqrt(M*y),w=Math.sqrt(M*b);u.scale.set(E,R,w)}}}function createEllipsoidView(a){const e=new Scene,t=new WebGLRenderer,{width:i,height:r}=a.getBoundingClientRect();a.appendChild(t.domElement),t.setSize(i,r);const s=i/r,o=new OrthographicCamera(-1.5*s,1.5*s,1.5,-1.5,1,1e3),{update:l,group:c}=createEllipsoids();c.rotation.set(0,Math.PI/2,0),e.add(c),o.position.set(0,20,0);const u=new OrbitControls(o,t.domElement),h=new AmbientLight(16777215,.5);e.add(h);const d=new PointLight(16777215,1,100);return d.position.set(10,10,10),e.add(d),{render:()=>{u.update(),t.render(e,o)},update:l,destroy:()=>{t.dispose(),u.dispose()}}}var Stats=function(){var a=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),i(++a%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function i(h){for(var d=0;d<e.children.length;d++)e.children[d].style.display=d===h?"block":"none";a=h}var r=(performance||Date).now(),s=r,o=0,l=t(new Stats.Panel("FPS","#0ff","#002")),c=t(new Stats.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=t(new Stats.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){r=(performance||Date).now()},end:function(){o++;var h=(performance||Date).now();if(c.update(h-r,200),h>=s+1e3&&(l.update(o*1e3/(h-s),100),s=h,o=0,u)){var d=performance.memory;u.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return h},update:function(){r=this.end()},domElement:e,setMode:i}};Stats.Panel=function(a,e,t){var i=1/0,r=0,s=Math.round,o=s(window.devicePixelRatio||1),l=80*o,c=48*o,u=3*o,h=2*o,d=3*o,p=15*o,m=74*o,g=30*o,v=document.createElement("canvas");v.width=l,v.height=c,v.style.cssText="width:80px;height:48px";var _=v.getContext("2d");return _.font="bold "+9*o+"px Helvetica,Arial,sans-serif",_.textBaseline="top",_.fillStyle=t,_.fillRect(0,0,l,c),_.fillStyle=e,_.fillText(a,u,h),_.fillRect(d,p,m,g),_.fillStyle=t,_.globalAlpha=.9,_.fillRect(d,p,m,g),{dom:v,update:function(y,b){i=Math.min(i,y),r=Math.max(r,y),_.fillStyle=t,_.globalAlpha=1,_.fillRect(0,0,l,p),_.fillStyle=e,_.fillText(s(y)+" "+a+" ("+s(i)+"-"+s(r)+")",u,h),_.drawImage(v,d+o,p,m-o,g,d,p,m-o,g),_.fillRect(d+m-o,p,o,g),_.fillStyle=t,_.globalAlpha=.9,_.fillRect(d+m-o,p,o,s((1-y/b)*g))}}};const CopyShader={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Pass{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const _camera=new OrthographicCamera(-1,1,1,-1,0,1),_geometry=new BufferGeometry;_geometry.setAttribute("position",new Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3));_geometry.setAttribute("uv",new Float32BufferAttribute([0,2,0,0,2,0],2));class FullScreenQuad{constructor(e){this._mesh=new Mesh(_geometry,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_camera)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ShaderPass extends Pass{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ShaderMaterial?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=UniformsUtils.clone(e.uniforms),this.material=new ShaderMaterial({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new FullScreenQuad(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class MaskPass extends Pass{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(l),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class ClearMaskPass extends Pass{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class EffectComposer{constructor(e,t){if(this.renderer=e,t===void 0){const i=e.getSize(new Vector2);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new WebGLRenderTarget(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ShaderPass(CopyShader),this.clock=new Clock}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}MaskPass!==void 0&&(o instanceof MaskPass?i=!0:o instanceof ClearMaskPass&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Vector2);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class SimplexNoise{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,r){return e[0]*t+e[1]*i+e[2]*r}dot4(e,t,i,r,s){return e[0]*t+e[1]*i+e[2]*r+e[3]*s}noise(e,t){let i,r,s;const o=.5*(Math.sqrt(3)-1),l=(e+t)*o,c=Math.floor(e+l),u=Math.floor(t+l),h=(3-Math.sqrt(3))/6,d=(c+u)*h,p=c-d,m=u-d,g=e-p,v=t-m;let _,y;g>v?(_=1,y=0):(_=0,y=1);const b=g-_+h,x=v-y+h,S=g-1+2*h,M=v-1+2*h,E=c&255,R=u&255,w=this.perm[E+this.perm[R]]%12,A=this.perm[E+_+this.perm[R+y]]%12,L=this.perm[E+1+this.perm[R+1]]%12;let V=.5-g*g-v*v;V<0?i=0:(V*=V,i=V*V*this.dot(this.grad3[w],g,v));let D=.5-b*b-x*x;D<0?r=0:(D*=D,r=D*D*this.dot(this.grad3[A],b,x));let B=.5-S*S-M*M;return B<0?s=0:(B*=B,s=B*B*this.dot(this.grad3[L],S,M)),70*(i+r+s)}noise3d(e,t,i){let r,s,o,l;const c=.3333333333333333,u=(e+t+i)*c,h=Math.floor(e+u),d=Math.floor(t+u),p=Math.floor(i+u),m=1/6,g=(h+d+p)*m,v=h-g,_=d-g,y=p-g,b=e-v,x=t-_,S=i-y;let M,E,R,w,A,L;b>=x?x>=S?(M=1,E=0,R=0,w=1,A=1,L=0):b>=S?(M=1,E=0,R=0,w=1,A=0,L=1):(M=0,E=0,R=1,w=1,A=0,L=1):x<S?(M=0,E=0,R=1,w=0,A=1,L=1):b<S?(M=0,E=1,R=0,w=0,A=1,L=1):(M=0,E=1,R=0,w=1,A=1,L=0);const V=b-M+m,D=x-E+m,B=S-R+m,O=b-w+2*m,$=x-A+2*m,W=S-L+2*m,ne=b-1+3*m,q=x-1+3*m,Q=S-1+3*m,J=h&255,ge=d&255,G=p&255,te=this.perm[J+this.perm[ge+this.perm[G]]]%12,he=this.perm[J+M+this.perm[ge+E+this.perm[G+R]]]%12,N=this.perm[J+w+this.perm[ge+A+this.perm[G+L]]]%12,re=this.perm[J+1+this.perm[ge+1+this.perm[G+1]]]%12;let oe=.6-b*b-x*x-S*S;oe<0?r=0:(oe*=oe,r=oe*oe*this.dot3(this.grad3[te],b,x,S));let ce=.6-V*V-D*D-B*B;ce<0?s=0:(ce*=ce,s=ce*ce*this.dot3(this.grad3[he],V,D,B));let fe=.6-O*O-$*$-W*W;fe<0?o=0:(fe*=fe,o=fe*fe*this.dot3(this.grad3[N],O,$,W));let ve=.6-ne*ne-q*q-Q*Q;return ve<0?l=0:(ve*=ve,l=ve*ve*this.dot3(this.grad3[re],ne,q,Q)),32*(r+s+o+l)}noise4d(e,t,i,r){const s=this.grad4,o=this.simplex,l=this.perm,c=(Math.sqrt(5)-1)/4,u=(5-Math.sqrt(5))/20;let h,d,p,m,g;const v=(e+t+i+r)*c,_=Math.floor(e+v),y=Math.floor(t+v),b=Math.floor(i+v),x=Math.floor(r+v),S=(_+y+b+x)*u,M=_-S,E=y-S,R=b-S,w=x-S,A=e-M,L=t-E,V=i-R,D=r-w,B=A>L?32:0,O=A>V?16:0,$=L>V?8:0,W=A>D?4:0,ne=L>D?2:0,q=V>D?1:0,Q=B+O+$+W+ne+q,J=o[Q][0]>=3?1:0,ge=o[Q][1]>=3?1:0,G=o[Q][2]>=3?1:0,te=o[Q][3]>=3?1:0,he=o[Q][0]>=2?1:0,N=o[Q][1]>=2?1:0,re=o[Q][2]>=2?1:0,oe=o[Q][3]>=2?1:0,ce=o[Q][0]>=1?1:0,fe=o[Q][1]>=1?1:0,ve=o[Q][2]>=1?1:0,Se=o[Q][3]>=1?1:0,Y=A-J+u,ee=L-ge+u,le=V-G+u,_e=D-te+u,pe=A-he+2*u,Ee=L-N+2*u,be=V-re+2*u,Ce=D-oe+2*u,De=A-ce+3*u,Le=L-fe+3*u,P=V-ve+3*u,T=D-Se+3*u,H=A-1+4*u,se=L-1+4*u,ae=V-1+4*u,me=D-1+4*u,ye=_&255,I=y&255,U=b&255,de=x&255,ue=l[ye+l[I+l[U+l[de]]]]%32,we=l[ye+J+l[I+ge+l[U+G+l[de+te]]]]%32,Te=l[ye+he+l[I+N+l[U+re+l[de+oe]]]]%32,Ae=l[ye+ce+l[I+fe+l[U+ve+l[de+Se]]]]%32,Ve=l[ye+1+l[I+1+l[U+1+l[de+1]]]]%32;let Ie=.6-A*A-L*L-V*V-D*D;Ie<0?h=0:(Ie*=Ie,h=Ie*Ie*this.dot4(s[ue],A,L,V,D));let Fe=.6-Y*Y-ee*ee-le*le-_e*_e;Fe<0?d=0:(Fe*=Fe,d=Fe*Fe*this.dot4(s[we],Y,ee,le,_e));let F=.6-pe*pe-Ee*Ee-be*be-Ce*Ce;F<0?p=0:(F*=F,p=F*F*this.dot4(s[Te],pe,Ee,be,Ce));let X=.6-De*De-Le*Le-P*P-T*T;X<0?m=0:(X*=X,m=X*X*this.dot4(s[Ae],De,Le,P,T));let ie=.6-H*H-se*se-ae*ae-me*me;return ie<0?g=0:(ie*=ie,g=ie*ie*this.dot4(s[Ve],H,se,ae,me)),27*(h+d+p+m+g)}}const SSAOShader={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Vector2},cameraProjectionMatrix:{value:new Matrix4},cameraInverseProjectionMatrix:{value:new Matrix4},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );
			float viewZ = getViewZ( depth );

			vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
			vec3 viewNormal = getViewNormal( vUv );

			vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
			vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

			// compute matrix used to reorient a kernel vector

			vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
			vec3 bitangent = cross( viewNormal, tangent );
			mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

		 float occlusion = 0.0;

		 for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

				vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
				vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

				vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
				samplePointNDC /= samplePointNDC.w;

				vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

				float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
				float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
				float delta = sampleDepth - realDepth;

				if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

					occlusion += 1.0;

				}

			}

			occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

			gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

		}`},SSAODepthShader={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},SSAOBlurShader={uniforms:{tDiffuse:{value:null},resolution:{value:new Vector2}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class SSAOPass extends Pass{constructor(e,t,i,r){super(),this.width=i!==void 0?i:512,this.height=r!==void 0?r:512,this.clear=!0,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernelSize=32,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(),this.generateRandomKernelRotations();const s=new DepthTexture;s.format=DepthStencilFormat,s.type=UnsignedInt248Type,this.beautyRenderTarget=new WebGLRenderTarget(this.width,this.height),this.normalRenderTarget=new WebGLRenderTarget(this.width,this.height,{minFilter:NearestFilter,magFilter:NearestFilter,depthTexture:s}),this.ssaoRenderTarget=new WebGLRenderTarget(this.width,this.height),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new ShaderMaterial({defines:Object.assign({},SSAOShader.defines),uniforms:UniformsUtils.clone(SSAOShader.uniforms),vertexShader:SSAOShader.vertexShader,fragmentShader:SSAOShader.fragmentShader,blending:NoBlending}),this.ssaoMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new MeshNormalMaterial,this.normalMaterial.blending=NoBlending,this.blurMaterial=new ShaderMaterial({defines:Object.assign({},SSAOBlurShader.defines),uniforms:UniformsUtils.clone(SSAOBlurShader.uniforms),vertexShader:SSAOBlurShader.vertexShader,fragmentShader:SSAOBlurShader.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new ShaderMaterial({defines:Object.assign({},SSAODepthShader.defines),uniforms:UniformsUtils.clone(SSAODepthShader.uniforms),vertexShader:SSAODepthShader.vertexShader,fragmentShader:SSAODepthShader.fragmentShader,blending:NoBlending}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ShaderMaterial({uniforms:UniformsUtils.clone(CopyShader.uniforms),vertexShader:CopyShader.vertexShader,fragmentShader:CopyShader.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:DstColorFactor,blendDst:ZeroFactor,blendEquation:AddEquation,blendSrcAlpha:DstAlphaFactor,blendDstAlpha:ZeroFactor,blendEquationAlpha:AddEquation}),this.fsQuad=new FullScreenQuad(null),this.originalClearColor=new Color}dispose(){this.beautyRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t){switch(e.capabilities.isWebGL2===!1&&(this.noiseTexture.format=LuminanceFormat),e.setRenderTarget(this.beautyRenderTarget),e.clear(),e.render(this.scene,this.camera),this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case SSAOPass.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=NoBlending,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case SSAOPass.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=NoBlending,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case SSAOPass.OUTPUT.Beauty:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=NoBlending,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case SSAOPass.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case SSAOPass.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=NoBlending,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case SSAOPass.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=NoBlending,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=CustomBlending,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(e,t,i,r,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),l=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=l,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,r,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),l=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=t.clearColor||r,s=t.clearAlpha||s,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=l,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.beautyRenderTarget.setSize(e,t),this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}generateSampleKernel(){const e=this.kernelSize,t=this.kernel;for(let i=0;i<e;i++){const r=new Vector3;r.x=Math.random()*2-1,r.y=Math.random()*2-1,r.z=Math.random(),r.normalize();let s=i/e;s=MathUtils.lerp(.1,1,s*s),r.multiplyScalar(s),t.push(r)}}generateRandomKernelRotations(){const i=new SimplexNoise,r=4*4,s=new Float32Array(r);for(let o=0;o<r;o++){const l=Math.random()*2-1,c=Math.random()*2-1,u=0;s[o]=i.noise3d(l,c,u)}this.noiseTexture=new DataTexture(s,4,4,RedFormat,FloatType),this.noiseTexture.wrapS=RepeatWrapping,this.noiseTexture.wrapT=RepeatWrapping,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){const r=t.get(i);i.visible=r}),t.clear()}}SSAOPass.OUTPUT={Default:0,SSAO:1,Blur:2,Beauty:3,Depth:4,Normal:5};class RenderPass extends Pass{constructor(e,t,i,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Color}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}const SAOShader={defines:{NUM_SAMPLES:7,NUM_RINGS:4,NORMAL_TEXTURE:0,DIFFUSE_TEXTURE:0,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},tDiffuse:{value:null},tNormal:{value:null},size:{value:new Vector2(512,512)},cameraNear:{value:1},cameraFar:{value:100},cameraProjectionMatrix:{value:new Matrix4},cameraInverseProjectionMatrix:{value:new Matrix4},scale:{value:1},intensity:{value:.1},bias:{value:.5},minResolution:{value:0},kernelRadius:{value:100},randomSeed:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		#if DIFFUSE_TEXTURE == 1
		uniform sampler2D tDiffuse;
		#endif

		uniform sampler2D tDepth;

		#if NORMAL_TEXTURE == 1
		uniform sampler2D tNormal;
		#endif

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float scale;
		uniform float intensity;
		uniform float bias;
		uniform float kernelRadius;
		uniform float minResolution;
		uniform vec2 size;
		uniform float randomSeed;

		// RGBA depth

		#include <packing>

		vec4 getDefaultColor( const in vec2 screenPosition ) {
			#if DIFFUSE_TEXTURE == 1
			return texture2D( tDiffuse, vUv );
			#else
			return vec4( 1.0 );
			#endif
		}

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
			return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {
			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];
			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );
			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;
		}

		vec3 getViewNormal( const in vec3 viewPosition, const in vec2 screenPosition ) {
			#if NORMAL_TEXTURE == 1
			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );
			#else
			return normalize( cross( dFdx( viewPosition ), dFdy( viewPosition ) ) );
			#endif
		}

		float scaleDividedByCameraFar;
		float minResolutionMultipliedByCameraFar;

		float getOcclusion( const in vec3 centerViewPosition, const in vec3 centerViewNormal, const in vec3 sampleViewPosition ) {
			vec3 viewDelta = sampleViewPosition - centerViewPosition;
			float viewDistance = length( viewDelta );
			float scaledScreenDistance = scaleDividedByCameraFar * viewDistance;

			return max(0.0, (dot(centerViewNormal, viewDelta) - minResolutionMultipliedByCameraFar) / scaledScreenDistance - bias) / (1.0 + pow2( scaledScreenDistance ) );
		}

		// moving costly divides into consts
		const float ANGLE_STEP = PI2 * float( NUM_RINGS ) / float( NUM_SAMPLES );
		const float INV_NUM_SAMPLES = 1.0 / float( NUM_SAMPLES );

		float getAmbientOcclusion( const in vec3 centerViewPosition ) {
			// precompute some variables require in getOcclusion.
			scaleDividedByCameraFar = scale / cameraFar;
			minResolutionMultipliedByCameraFar = minResolution * cameraFar;
			vec3 centerViewNormal = getViewNormal( centerViewPosition, vUv );

			// jsfiddle that shows sample pattern: https://jsfiddle.net/a16ff1p7/
			float angle = rand( vUv + randomSeed ) * PI2;
			vec2 radius = vec2( kernelRadius * INV_NUM_SAMPLES ) / size;
			vec2 radiusStep = radius;

			float occlusionSum = 0.0;
			float weightSum = 0.0;

			for( int i = 0; i < NUM_SAMPLES; i ++ ) {
				vec2 sampleUv = vUv + vec2( cos( angle ), sin( angle ) ) * radius;
				radius += radiusStep;
				angle += ANGLE_STEP;

				float sampleDepth = getDepth( sampleUv );
				if( sampleDepth >= ( 1.0 - EPSILON ) ) {
					continue;
				}

				float sampleViewZ = getViewZ( sampleDepth );
				vec3 sampleViewPosition = getViewPosition( sampleUv, sampleDepth, sampleViewZ );
				occlusionSum += getOcclusion( centerViewPosition, centerViewNormal, sampleViewPosition );
				weightSum += 1.0;
			}

			if( weightSum == 0.0 ) discard;

			return occlusionSum * ( intensity / weightSum );
		}

		void main() {
			float centerDepth = getDepth( vUv );
			if( centerDepth >= ( 1.0 - EPSILON ) ) {
				discard;
			}

			float centerViewZ = getViewZ( centerDepth );
			vec3 viewPosition = getViewPosition( vUv, centerDepth, centerViewZ );

			float ambientOcclusion = getAmbientOcclusion( viewPosition );

			gl_FragColor = getDefaultColor( vUv );
			gl_FragColor.xyz *=  1.0 - ambientOcclusion;
		}`},DepthLimitedBlurShader={defines:{KERNEL_RADIUS:4,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},size:{value:new Vector2(512,512)},sampleUvOffsets:{value:[new Vector2(0,0)]},sampleWeights:{value:[1]},tDepth:{value:null},cameraNear:{value:10},cameraFar:{value:1e3},depthCutoff:{value:10}},vertexShader:`

		#include <common>

		uniform vec2 size;

		varying vec2 vUv;
		varying vec2 vInvSize;

		void main() {
			vUv = uv;
			vInvSize = 1.0 / size;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		#include <common>
		#include <packing>

		uniform sampler2D tDiffuse;
		uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform float depthCutoff;

		uniform vec2 sampleUvOffsets[ KERNEL_RADIUS + 1 ];
		uniform float sampleWeights[ KERNEL_RADIUS + 1 ];

		varying vec2 vUv;
		varying vec2 vInvSize;

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
			return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}

		void main() {
			float depth = getDepth( vUv );
			if( depth >= ( 1.0 - EPSILON ) ) {
				discard;
			}

			float centerViewZ = -getViewZ( depth );
			bool rBreak = false, lBreak = false;

			float weightSum = sampleWeights[0];
			vec4 diffuseSum = texture2D( tDiffuse, vUv ) * weightSum;

			for( int i = 1; i <= KERNEL_RADIUS; i ++ ) {

				float sampleWeight = sampleWeights[i];
				vec2 sampleUvOffset = sampleUvOffsets[i] * vInvSize;

				vec2 sampleUv = vUv + sampleUvOffset;
				float viewZ = -getViewZ( getDepth( sampleUv ) );

				if( abs( viewZ - centerViewZ ) > depthCutoff ) rBreak = true;

				if( ! rBreak ) {
					diffuseSum += texture2D( tDiffuse, sampleUv ) * sampleWeight;
					weightSum += sampleWeight;
				}

				sampleUv = vUv - sampleUvOffset;
				viewZ = -getViewZ( getDepth( sampleUv ) );

				if( abs( viewZ - centerViewZ ) > depthCutoff ) lBreak = true;

				if( ! lBreak ) {
					diffuseSum += texture2D( tDiffuse, sampleUv ) * sampleWeight;
					weightSum += sampleWeight;
				}

			}

			gl_FragColor = diffuseSum / weightSum;
		}`},BlurShaderUtils={createSampleWeights:function(a,e){const t=[];for(let i=0;i<=a;i++)t.push(gaussian(i,e));return t},createSampleOffsets:function(a,e){const t=[];for(let i=0;i<=a;i++)t.push(e.clone().multiplyScalar(i));return t},configure:function(a,e,t,i){a.defines.KERNEL_RADIUS=e,a.uniforms.sampleUvOffsets.value=BlurShaderUtils.createSampleOffsets(e,i),a.uniforms.sampleWeights.value=BlurShaderUtils.createSampleWeights(e,t),a.needsUpdate=!0}};function gaussian(a,e){return Math.exp(-(a*a)/(2*(e*e)))/(Math.sqrt(2*Math.PI)*e)}const UnpackDepthRGBAShader={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		#include <packing>

		void main() {

			float depth = 1.0 - unpackRGBAToDepth( texture2D( tDiffuse, vUv ) );
			gl_FragColor = vec4( vec3( depth ), opacity );

		}`};class SAOPass extends Pass{constructor(e,t,i=!1,r=!1,s=new Vector2(256,256)){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.supportsDepthTextureExtension=i,this.supportsNormalTexture=r,this.originalClearColor=new Color,this._oldClearColor=new Color,this.oldClearAlpha=1,this.params={output:0,saoBias:.5,saoIntensity:.18,saoScale:1,saoKernelRadius:100,saoMinResolution:0,saoBlur:!0,saoBlurRadius:8,saoBlurStdDev:4,saoBlurDepthCutoff:.01},this.resolution=new Vector2(s.x,s.y),this.saoRenderTarget=new WebGLRenderTarget(this.resolution.x,this.resolution.y),this.blurIntermediateRenderTarget=this.saoRenderTarget.clone(),this.beautyRenderTarget=this.saoRenderTarget.clone(),this.normalRenderTarget=new WebGLRenderTarget(this.resolution.x,this.resolution.y,{minFilter:NearestFilter,magFilter:NearestFilter}),this.depthRenderTarget=this.normalRenderTarget.clone();let o;this.supportsDepthTextureExtension&&(o=new DepthTexture,o.type=UnsignedShortType,this.beautyRenderTarget.depthTexture=o,this.beautyRenderTarget.depthBuffer=!0),this.depthMaterial=new MeshDepthMaterial,this.depthMaterial.depthPacking=RGBADepthPacking,this.depthMaterial.blending=NoBlending,this.normalMaterial=new MeshNormalMaterial,this.normalMaterial.blending=NoBlending,this.saoMaterial=new ShaderMaterial({defines:Object.assign({},SAOShader.defines),fragmentShader:SAOShader.fragmentShader,vertexShader:SAOShader.vertexShader,uniforms:UniformsUtils.clone(SAOShader.uniforms)}),this.saoMaterial.extensions.derivatives=!0,this.saoMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.saoMaterial.defines.NORMAL_TEXTURE=this.supportsNormalTexture?1:0,this.saoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.saoMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?o:this.depthRenderTarget.texture,this.saoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.saoMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.blending=NoBlending,this.vBlurMaterial=new ShaderMaterial({uniforms:UniformsUtils.clone(DepthLimitedBlurShader.uniforms),defines:Object.assign({},DepthLimitedBlurShader.defines),vertexShader:DepthLimitedBlurShader.vertexShader,fragmentShader:DepthLimitedBlurShader.fragmentShader}),this.vBlurMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.vBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.vBlurMaterial.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.vBlurMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?o:this.depthRenderTarget.texture,this.vBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.vBlurMaterial.blending=NoBlending,this.hBlurMaterial=new ShaderMaterial({uniforms:UniformsUtils.clone(DepthLimitedBlurShader.uniforms),defines:Object.assign({},DepthLimitedBlurShader.defines),vertexShader:DepthLimitedBlurShader.vertexShader,fragmentShader:DepthLimitedBlurShader.fragmentShader}),this.hBlurMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.hBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.hBlurMaterial.uniforms.tDiffuse.value=this.blurIntermediateRenderTarget.texture,this.hBlurMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?o:this.depthRenderTarget.texture,this.hBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.hBlurMaterial.blending=NoBlending,this.materialCopy=new ShaderMaterial({uniforms:UniformsUtils.clone(CopyShader.uniforms),vertexShader:CopyShader.vertexShader,fragmentShader:CopyShader.fragmentShader,blending:NoBlending}),this.materialCopy.transparent=!0,this.materialCopy.depthTest=!1,this.materialCopy.depthWrite=!1,this.materialCopy.blending=CustomBlending,this.materialCopy.blendSrc=DstColorFactor,this.materialCopy.blendDst=ZeroFactor,this.materialCopy.blendEquation=AddEquation,this.materialCopy.blendSrcAlpha=DstAlphaFactor,this.materialCopy.blendDstAlpha=ZeroFactor,this.materialCopy.blendEquationAlpha=AddEquation,this.depthCopy=new ShaderMaterial({uniforms:UniformsUtils.clone(UnpackDepthRGBAShader.uniforms),vertexShader:UnpackDepthRGBAShader.vertexShader,fragmentShader:UnpackDepthRGBAShader.fragmentShader,blending:NoBlending}),this.fsQuad=new FullScreenQuad(null)}render(e,t,i){if(this.renderToScreen&&(this.materialCopy.blending=NoBlending,this.materialCopy.uniforms.tDiffuse.value=i.texture,this.materialCopy.needsUpdate=!0,this.renderPass(e,this.materialCopy,null)),this.params.output===1)return;e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setRenderTarget(this.depthRenderTarget),e.clear(),this.saoMaterial.uniforms.bias.value=this.params.saoBias,this.saoMaterial.uniforms.intensity.value=this.params.saoIntensity,this.saoMaterial.uniforms.scale.value=this.params.saoScale,this.saoMaterial.uniforms.kernelRadius.value=this.params.saoKernelRadius,this.saoMaterial.uniforms.minResolution.value=this.params.saoMinResolution,this.saoMaterial.uniforms.cameraNear.value=this.camera.near,this.saoMaterial.uniforms.cameraFar.value=this.camera.far;const s=this.params.saoBlurDepthCutoff*(this.camera.far-this.camera.near);this.vBlurMaterial.uniforms.depthCutoff.value=s,this.hBlurMaterial.uniforms.depthCutoff.value=s,this.vBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.vBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.hBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.hBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.params.saoBlurRadius=Math.floor(this.params.saoBlurRadius),(this.prevStdDev!==this.params.saoBlurStdDev||this.prevNumSamples!==this.params.saoBlurRadius)&&(BlurShaderUtils.configure(this.vBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new Vector2(0,1)),BlurShaderUtils.configure(this.hBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new Vector2(1,0)),this.prevStdDev=this.params.saoBlurStdDev,this.prevNumSamples=this.params.saoBlurRadius),e.setClearColor(0),e.setRenderTarget(this.beautyRenderTarget),e.clear(),e.render(this.scene,this.camera),this.supportsDepthTextureExtension||this.renderOverride(e,this.depthMaterial,this.depthRenderTarget,0,1),this.supportsNormalTexture&&this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.renderPass(e,this.saoMaterial,this.saoRenderTarget,16777215,1),this.params.saoBlur&&(this.renderPass(e,this.vBlurMaterial,this.blurIntermediateRenderTarget,16777215,1),this.renderPass(e,this.hBlurMaterial,this.saoRenderTarget,16777215,1));let o=this.materialCopy;this.params.output===3?this.supportsDepthTextureExtension?(this.materialCopy.uniforms.tDiffuse.value=this.beautyRenderTarget.depthTexture,this.materialCopy.needsUpdate=!0):(this.depthCopy.uniforms.tDiffuse.value=this.depthRenderTarget.texture,this.depthCopy.needsUpdate=!0,o=this.depthCopy):this.params.output===4?(this.materialCopy.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.materialCopy.needsUpdate=!0):(this.materialCopy.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.materialCopy.needsUpdate=!0),this.params.output===0?o.blending=CustomBlending:o.blending=NoBlending,this.renderPass(e,o,this.renderToScreen?null:i),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}renderPass(e,t,i,r,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),l=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=l,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,i,r,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),l=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=t.clearColor||r,s=t.clearAlpha||s,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=l,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.beautyRenderTarget.setSize(e,t),this.saoRenderTarget.setSize(e,t),this.blurIntermediateRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.depthRenderTarget.setSize(e,t),this.saoMaterial.uniforms.size.value.set(e,t),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.needsUpdate=!0,this.vBlurMaterial.uniforms.size.value.set(e,t),this.vBlurMaterial.needsUpdate=!0,this.hBlurMaterial.uniforms.size.value.set(e,t),this.hBlurMaterial.needsUpdate=!0}dispose(){this.saoRenderTarget.dispose(),this.blurIntermediateRenderTarget.dispose(),this.beautyRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.depthRenderTarget.dispose(),this.depthMaterial.dispose(),this.normalMaterial.dispose(),this.saoMaterial.dispose(),this.vBlurMaterial.dispose(),this.hBlurMaterial.dispose(),this.materialCopy.dispose(),this.depthCopy.dispose(),this.fsQuad.dispose()}}SAOPass.OUTPUT={Beauty:1,Default:0,SAO:2,Depth:3,Normal:4};const FXAAShader={uniforms:{tDiffuse:{value:null},resolution:{value:new Vector2(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`},defaultOptions={stepSize:8,maxSteps:20},createSystem=a=>{a=Object.assign({},defaultOptions,a);const e=4;let t=2,i=2,r=0;const s=new Vector3(1,0,0),o=new Vector3(0,1,0),l=new Vector3(0,0,1),c=new Vector3(0,0,1),u=new Vector3().copy(s),h=new Vector3().copy(o),d=new Vector3().copy(l),p=new Vector3,m=new Vector3,g=new Vector3,v=[new Vector3,new Vector3,new Vector3],_=new Quaternion,y=new Quaternion,b=new Quaternion,x=new Quaternion,S=new Vector3,M=(N,re)=>N==0?0:N/re,E=new Vector3,R=({x1:N,v1:re,x2:oe,v2:ce,x3:fe,v3:ve},Se,Y,ee)=>(ee.copy(N).multiplyScalar(M(-2*t*Se.dot(re),Y+t)),E.copy(oe).multiplyScalar(M(-2*i*Se.dot(ce),Y+i)),ee.add(E),E.copy(fe).multiplyScalar(M(-2*r*Se.dot(ve),Y+r)),ee.add(E),ee),w=new Vector3(0,1,0),A=new Vector3,L=new Vector3,V=()=>{v[0].crossVectors(u,p).multiplyScalar(t),v[1].crossVectors(h,m).multiplyScalar(i),v[2].crossVectors(d,g).multiplyScalar(r),L.copy(v[0]).add(v[1]).add(v[2]),b.setFromUnitVectors(w,A.copy(L).normalize()),x.copy(b)},D=new Vector3,B=new Vector3,O=()=>{D.crossVectors(u,p).add(A.crossVectors(h,m)),A.crossVectors(u,m).add(B.crossVectors(p,h)),B.crossVectors(u,h).cross(A),D.add(B)},$=(N=1,re=0)=>{t=e/(1+N+re),i=N*t,r=re*t,V()};let W=0;const ne=N=>{p.crossVectors(N,u),m.crossVectors(N,h),g.crossVectors(N,d),O(),V(),S.copy(N),y.setFromUnitVectors(c,A.copy(N).normalize()),W=L.dot(S)/L.length()},q=(N,re)=>{N*=Math.PI/180,re*=Math.PI/180,u.set(Math.cos(N),0,Math.sin(N)),h.set(-Math.sin(re)*Math.sin(N),Math.cos(re),Math.sin(re)*Math.cos(N)),ge(),d.copy(l).applyQuaternion(_),d.normalize(),O(),V()},Q=new Vector3,J=new Quaternion,ge=()=>{_.setFromUnitVectors(s,u),Q.copy(o).applyQuaternion(_),J.setFromUnitVectors(Q,h),_.multiplyQuaternions(J,_)},G=(()=>{const N=new Vector3,re=new Vector3,oe=new Vector3,ce=new Vector3,fe=new Vector3,ve=new Vector3,Se=new Vector3,Y=new Vector3,ee=new Vector3,le=new Vector3,_e=new Vector3,pe=new Vector3,Ee=new Vector3,be=new Vector3,Ce=new Vector3,De=new Vector3,Le=new Vector3,P=new Vector3,T=new Vector3,H=new Vector3,se=new Vector3,ae=new Vector3,me=new Vector3,ye=new Vector3,I=(U,de,ue)=>{de.x1.copy(U.v1).multiplyScalar(ue).add(u),R(U,U.v1,t,de.v1).multiplyScalar(ue).add(p),de.x2.copy(U.v2).multiplyScalar(ue).add(h),R(U,U.v2,i,de.v2).multiplyScalar(ue).add(m),de.x3.copy(U.v3).multiplyScalar(ue).add(d),R(U,U.v3,r,de.v3).multiplyScalar(ue).add(g)};return function(de){const ue=de/2;I({x1:u,v1:p,x2:h,v2:m,x3:d,v3:g},{x1:N,v1:Ee,x2:re,v2:be,x3:oe,v3:Ce},ue),I({x1:N,v1:Ee,x2:re,v2:be,x3:oe,v3:Ce},{x1:ce,v1:De,x2:fe,v2:Le,x3:ve,v3:P},ue),I({x1:ce,v1:De,x2:fe,v2:Le,x3:ve,v3:P},{x1:Se,v1:T,x2:Y,v2:H,x3:ee,v3:se},de),I({x1:Se,v1:T,x2:Y,v2:H,x3:ee,v3:se},{x1:le,v1:ae,x2:_e,v2:me,x3:pe,v3:ye},de),ce.multiplyScalar(2),De.multiplyScalar(2),fe.multiplyScalar(2),Le.multiplyScalar(2),ve.multiplyScalar(2),P.multiplyScalar(2),le.multiplyScalar(.5).add(Se).add(ce).add(N).multiplyScalar(1/3),ae.multiplyScalar(.5).add(T).add(De).add(Ee).multiplyScalar(1/3),_e.multiplyScalar(.5).add(Y).add(fe).add(re).multiplyScalar(1/3),me.multiplyScalar(.5).add(H).add(Le).add(be).multiplyScalar(1/3),pe.multiplyScalar(.5).add(ee).add(ve).add(oe).multiplyScalar(1/3),ye.multiplyScalar(.5).add(se).add(P).add(Ce).multiplyScalar(1/3),u.multiplyScalar(-.5).add(le),p.multiplyScalar(-.5).add(ae),h.multiplyScalar(-.5).add(_e),m.multiplyScalar(-.5).add(me),d.multiplyScalar(-.5).add(pe),g.multiplyScalar(-.5).add(ye),u.normalize(),h.normalize(),d.normalize()}})();let te=0;return{setOmega:ne,setInitialPosition:q,step:N=>{let re=a.stepSize;N||(N=re);let oe=a.maxSteps*re,ce=te,fe=te+N;for(N>oe&&(ce=fe-oe);ce<fe-re;ce+=re)te=ce,G(re);ce!==fe&&(te=fe,G(fe-ce)),ge(),O(),V(),J.setFromAxisAngle(A.copy(L).normalize(),W*te),b.premultiply(J),J.setFromAxisAngle(A.copy(S).normalize(),S.length()*N),y.premultiply(J)},setMassRatio:$,qRot:_,angularMomentum:L,omega:D,jRot:b,jWorld:x,omegaRot:y,x1:u,x2:h,x3:d,LParts:v,getMasses:()=>[t,i,r],get I1(){return i+r},get I2(){return t+r},get I3(){return t+i},get energy(){return t*p.lengthSq()+i*m.lengthSq()+r*g.lengthSq()},zeroTime:()=>{te=0}}};var freeGlobal$1=typeof commonjsGlobal=="object"&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,_freeGlobal=freeGlobal$1,freeGlobal=_freeGlobal,freeSelf=typeof self=="object"&&self&&self.Object===Object&&self,root$1=freeGlobal||freeSelf||Function("return this")(),_root=root$1,root=_root,Symbol$3=root.Symbol,_Symbol=Symbol$3,Symbol$2=_Symbol;Symbol$2&&Symbol$2.toStringTag;var Symbol$1=_Symbol;Symbol$1&&Symbol$1.toStringTag;function commonjsRequire(a){throw new Error('Could not dynamically require "'+a+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var THREE_MeshLineExports={},THREE_MeshLine={get exports(){return THREE_MeshLineExports},set exports(a){THREE_MeshLineExports=a}};const require$$0=getAugmentedNamespace(three_module);(function(a,e){(function(){var t=this,i=typeof commonjsRequire<"u",r=t.THREE||i&&require$$0;if(!r)throw new Error("MeshLine requires three.js");class s extends r.BufferGeometry{constructor(){super(),this.isMeshLine=!0,this.type="MeshLine",this.positions=[],this.previous=[],this.next=[],this.side=[],this.width=[],this.indices_array=[],this.uvs=[],this.counters=[],this._points=[],this._geom=null,this.widthCallback=null,this.matrixWorld=new r.Matrix4,Object.defineProperties(this,{geometry:{enumerable:!0,get:function(){return this}},geom:{enumerable:!0,get:function(){return this._geom},set:function(h){this.setGeometry(h,this.widthCallback)}},points:{enumerable:!0,get:function(){return this._points},set:function(h){this.setPoints(h,this.widthCallback)}}})}}s.prototype.setMatrixWorld=function(u){this.matrixWorld=u},s.prototype.setGeometry=function(u,h){this._geometry=u,this.setPoints(u.getAttribute("position").array,h)},s.prototype.setPoints=function(u,h){if(!(u instanceof Float32Array)&&!(u instanceof Array)){console.error("ERROR: The BufferArray of points is not instancied correctly.");return}if(this._points=u,this.widthCallback=h,this.positions=[],this.counters=[],u.length&&u[0]instanceof r.Vector3)for(var d=0;d<u.length;d++){var p=u[d],m=d/u.length;this.positions.push(p.x,p.y,p.z),this.positions.push(p.x,p.y,p.z),this.counters.push(m),this.counters.push(m)}else for(var d=0;d<u.length;d+=3){var m=d/u.length;this.positions.push(u[d],u[d+1],u[d+2]),this.positions.push(u[d],u[d+1],u[d+2]),this.counters.push(m),this.counters.push(m)}this.process()};function o(u,h){var d=new r.Matrix4,p=new r.Ray,m=new r.Sphere,g=new r.Vector3,v=this.geometry;if(v.boundingSphere||v.computeBoundingSphere(),m.copy(v.boundingSphere),m.applyMatrix4(this.matrixWorld),u.ray.intersectSphere(m,g)!==!1){d.copy(this.matrixWorld).invert(),p.copy(u.ray).applyMatrix4(d);var _=new r.Vector3,y=new r.Vector3,b=new r.Vector3,x=this instanceof r.LineSegments?2:1,S=v.index,M=v.attributes;if(S!==null)for(var E=S.array,R=M.position.array,w=M.width.array,A=0,L=E.length-1;A<L;A+=x){var V=E[A],D=E[A+1];_.fromArray(R,V*3),y.fromArray(R,D*3);var B=w[Math.floor(A/3)]!==void 0?w[Math.floor(A/3)]:1,O=u.params.Line.threshold+this.material.lineWidth*B/2,$=O*O,W=p.distanceSqToSegment(_,y,g,b);if(!(W>$)){g.applyMatrix4(this.matrixWorld);var ne=u.ray.origin.distanceTo(g);ne<u.near||ne>u.far||(h.push({distance:ne,point:b.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this}),A=L)}}}}s.prototype.raycast=o,s.prototype.compareV3=function(u,h){var d=u*6,p=h*6;return this.positions[d]===this.positions[p]&&this.positions[d+1]===this.positions[p+1]&&this.positions[d+2]===this.positions[p+2]},s.prototype.copyV3=function(u){var h=u*6;return[this.positions[h],this.positions[h+1],this.positions[h+2]]},s.prototype.process=function(){var u=this.positions.length/6;this.previous=[],this.next=[],this.side=[],this.width=[],this.indices_array=[],this.uvs=[];var h,d;this.compareV3(0,u-1)?d=this.copyV3(u-2):d=this.copyV3(0),this.previous.push(d[0],d[1],d[2]),this.previous.push(d[0],d[1],d[2]);for(var p=0;p<u;p++){if(this.side.push(1),this.side.push(-1),this.widthCallback?h=this.widthCallback(p/(u-1)):h=1,this.width.push(h),this.width.push(h),this.uvs.push(p/(u-1),0),this.uvs.push(p/(u-1),1),p<u-1){d=this.copyV3(p),this.previous.push(d[0],d[1],d[2]),this.previous.push(d[0],d[1],d[2]);var m=p*2;this.indices_array.push(m,m+1,m+2),this.indices_array.push(m+2,m+1,m+3)}p>0&&(d=this.copyV3(p),this.next.push(d[0],d[1],d[2]),this.next.push(d[0],d[1],d[2]))}this.compareV3(u-1,0)?d=this.copyV3(1):d=this.copyV3(u-1),this.next.push(d[0],d[1],d[2]),this.next.push(d[0],d[1],d[2]),!this._attributes||this._attributes.position.count!==this.positions.length?this._attributes={position:new r.BufferAttribute(new Float32Array(this.positions),3),previous:new r.BufferAttribute(new Float32Array(this.previous),3),next:new r.BufferAttribute(new Float32Array(this.next),3),side:new r.BufferAttribute(new Float32Array(this.side),1),width:new r.BufferAttribute(new Float32Array(this.width),1),uv:new r.BufferAttribute(new Float32Array(this.uvs),2),index:new r.BufferAttribute(new Uint16Array(this.indices_array),1),counters:new r.BufferAttribute(new Float32Array(this.counters),1)}:(this._attributes.position.copyArray(new Float32Array(this.positions)),this._attributes.position.needsUpdate=!0,this._attributes.previous.copyArray(new Float32Array(this.previous)),this._attributes.previous.needsUpdate=!0,this._attributes.next.copyArray(new Float32Array(this.next)),this._attributes.next.needsUpdate=!0,this._attributes.side.copyArray(new Float32Array(this.side)),this._attributes.side.needsUpdate=!0,this._attributes.width.copyArray(new Float32Array(this.width)),this._attributes.width.needsUpdate=!0,this._attributes.uv.copyArray(new Float32Array(this.uvs)),this._attributes.uv.needsUpdate=!0,this._attributes.index.copyArray(new Uint16Array(this.indices_array)),this._attributes.index.needsUpdate=!0),this.setAttribute("position",this._attributes.position),this.setAttribute("previous",this._attributes.previous),this.setAttribute("next",this._attributes.next),this.setAttribute("side",this._attributes.side),this.setAttribute("width",this._attributes.width),this.setAttribute("uv",this._attributes.uv),this.setAttribute("counters",this._attributes.counters),this.setIndex(this._attributes.index),this.computeBoundingSphere(),this.computeBoundingBox()};function l(u,h,d,p,m){var g;if(u=u.subarray||u.slice?u:u.buffer,d=d.subarray||d.slice?d:d.buffer,u=h?u.subarray?u.subarray(h,m&&h+m):u.slice(h,m&&h+m):u,d.set)d.set(u,p);else for(g=0;g<u.length;g++)d[g+p]=u[g];return d}s.prototype.advance=function(u){var h=this._attributes.position.array,d=this._attributes.previous.array,p=this._attributes.next.array,m=h.length;l(h,0,d,0,m),l(h,6,h,0,m-6),h[m-6]=u.x,h[m-5]=u.y,h[m-4]=u.z,h[m-3]=u.x,h[m-2]=u.y,h[m-1]=u.z,l(h,6,p,0,m-6),p[m-6]=u.x,p[m-5]=u.y,p[m-4]=u.z,p[m-3]=u.x,p[m-2]=u.y,p[m-1]=u.z,this._attributes.position.needsUpdate=!0,this._attributes.previous.needsUpdate=!0,this._attributes.next.needsUpdate=!0},r.ShaderChunk.meshline_vert=["",r.ShaderChunk.logdepthbuf_pars_vertex,r.ShaderChunk.fog_pars_vertex,"","attribute vec3 previous;","attribute vec3 next;","attribute float side;","attribute float width;","attribute float counters;","","uniform vec2 resolution;","uniform float lineWidth;","uniform vec3 color;","uniform float opacity;","uniform float sizeAttenuation;","","varying vec2 vUV;","varying vec4 vColor;","varying float vCounters;","","vec2 fix( vec4 i, float aspect ) {","","    vec2 res = i.xy / i.w;","    res.x *= aspect;","	 vCounters = counters;","    return res;","","}","","void main() {","","    float aspect = resolution.x / resolution.y;","","    vColor = vec4( color, opacity );","    vUV = uv;","","    mat4 m = projectionMatrix * modelViewMatrix;","    vec4 finalPosition = m * vec4( position, 1.0 );","    vec4 prevPos = m * vec4( previous, 1.0 );","    vec4 nextPos = m * vec4( next, 1.0 );","","    vec2 currentP = fix( finalPosition, aspect );","    vec2 prevP = fix( prevPos, aspect );","    vec2 nextP = fix( nextPos, aspect );","","    float w = lineWidth * width;","","    vec2 dir;","    if( nextP == currentP ) dir = normalize( currentP - prevP );","    else if( prevP == currentP ) dir = normalize( nextP - currentP );","    else {","        vec2 dir1 = normalize( currentP - prevP );","        vec2 dir2 = normalize( nextP - currentP );","        dir = normalize( dir1 + dir2 );","","        vec2 perp = vec2( -dir1.y, dir1.x );","        vec2 miter = vec2( -dir.y, dir.x );","        //w = clamp( w / dot( miter, perp ), 0., 4. * lineWidth * width );","","    }","","    //vec2 normal = ( cross( vec3( dir, 0. ), vec3( 0., 0., 1. ) ) ).xy;","    vec4 normal = vec4( -dir.y, dir.x, 0., 1. );","    normal.xy *= .5 * w;","    normal *= projectionMatrix;","    if( sizeAttenuation == 0. ) {","        normal.xy *= finalPosition.w;","        normal.xy /= ( vec4( resolution, 0., 1. ) * projectionMatrix ).xy;","    }","","    finalPosition.xy += normal.xy * side;","","    gl_Position = finalPosition;","",r.ShaderChunk.logdepthbuf_vertex,r.ShaderChunk.fog_vertex&&"    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",r.ShaderChunk.fog_vertex,"}"].join(`
`),r.ShaderChunk.meshline_frag=["",r.ShaderChunk.fog_pars_fragment,r.ShaderChunk.logdepthbuf_pars_fragment,"","uniform sampler2D map;","uniform sampler2D alphaMap;","uniform float useMap;","uniform float useAlphaMap;","uniform float useDash;","uniform float dashArray;","uniform float dashOffset;","uniform float dashRatio;","uniform float visibility;","uniform float alphaTest;","uniform vec2 repeat;","","varying vec2 vUV;","varying vec4 vColor;","varying float vCounters;","","void main() {","",r.ShaderChunk.logdepthbuf_fragment,"","    vec4 c = vColor;","    if( useMap == 1. ) c *= texture2D( map, vUV * repeat );","    if( useAlphaMap == 1. ) c.a *= texture2D( alphaMap, vUV * repeat ).a;","    if( c.a < alphaTest ) discard;","    if( useDash == 1. ){","        c.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));","    }","    gl_FragColor = c;","    gl_FragColor.a *= step(vCounters, visibility);","",r.ShaderChunk.fog_fragment,"}"].join(`
`);class c extends r.ShaderMaterial{constructor(h){super({uniforms:Object.assign({},r.UniformsLib.fog,{lineWidth:{value:1},map:{value:null},useMap:{value:0},alphaMap:{value:null},useAlphaMap:{value:0},color:{value:new r.Color(16777215)},opacity:{value:1},resolution:{value:new r.Vector2(1,1)},sizeAttenuation:{value:1},dashArray:{value:0},dashOffset:{value:0},dashRatio:{value:.5},useDash:{value:0},visibility:{value:1},alphaTest:{value:0},repeat:{value:new r.Vector2(1,1)}}),vertexShader:r.ShaderChunk.meshline_vert,fragmentShader:r.ShaderChunk.meshline_frag}),this.isMeshLineMaterial=!0,this.type="MeshLineMaterial",Object.defineProperties(this,{lineWidth:{enumerable:!0,get:function(){return this.uniforms.lineWidth.value},set:function(d){this.uniforms.lineWidth.value=d}},map:{enumerable:!0,get:function(){return this.uniforms.map.value},set:function(d){this.uniforms.map.value=d}},useMap:{enumerable:!0,get:function(){return this.uniforms.useMap.value},set:function(d){this.uniforms.useMap.value=d}},alphaMap:{enumerable:!0,get:function(){return this.uniforms.alphaMap.value},set:function(d){this.uniforms.alphaMap.value=d}},useAlphaMap:{enumerable:!0,get:function(){return this.uniforms.useAlphaMap.value},set:function(d){this.uniforms.useAlphaMap.value=d}},color:{enumerable:!0,get:function(){return this.uniforms.color.value},set:function(d){this.uniforms.color.value=d}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(d){this.uniforms.opacity.value=d}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(d){this.uniforms.resolution.value.copy(d)}},sizeAttenuation:{enumerable:!0,get:function(){return this.uniforms.sizeAttenuation.value},set:function(d){this.uniforms.sizeAttenuation.value=d}},dashArray:{enumerable:!0,get:function(){return this.uniforms.dashArray.value},set:function(d){this.uniforms.dashArray.value=d,this.useDash=d!==0?1:0}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(d){this.uniforms.dashOffset.value=d}},dashRatio:{enumerable:!0,get:function(){return this.uniforms.dashRatio.value},set:function(d){this.uniforms.dashRatio.value=d}},useDash:{enumerable:!0,get:function(){return this.uniforms.useDash.value},set:function(d){this.uniforms.useDash.value=d}},visibility:{enumerable:!0,get:function(){return this.uniforms.visibility.value},set:function(d){this.uniforms.visibility.value=d}},alphaTest:{enumerable:!0,get:function(){return this.uniforms.alphaTest.value},set:function(d){this.uniforms.alphaTest.value=d}},repeat:{enumerable:!0,get:function(){return this.uniforms.repeat.value},set:function(d){this.uniforms.repeat.value.copy(d)}}}),this.setValues(h)}}c.prototype.copy=function(u){return r.ShaderMaterial.prototype.copy.call(this,u),this.lineWidth=u.lineWidth,this.map=u.map,this.useMap=u.useMap,this.alphaMap=u.alphaMap,this.useAlphaMap=u.useAlphaMap,this.color.copy(u.color),this.opacity=u.opacity,this.resolution.copy(u.resolution),this.sizeAttenuation=u.sizeAttenuation,this.dashArray.copy(u.dashArray),this.dashOffset.copy(u.dashOffset),this.dashRatio.copy(u.dashRatio),this.useDash=u.useDash,this.visibility=u.visibility,this.alphaTest=u.alphaTest,this.repeat.copy(u.repeat),this},a.exports&&(e=a.exports={MeshLine:s,MeshLineMaterial:c,MeshLineRaycast:o}),e.MeshLine=s,e.MeshLineMaterial=c,e.MeshLineRaycast=o}).call(commonjsGlobal)})(THREE_MeshLine,THREE_MeshLineExports);const Trail=({renderer:a,maxSize:e=100,maxDistance:t=1e3,throttleTime:i=10,throttleDistance:r=1,color:s=14540253,usePoints:o=!1}={})=>{const l=new Group,c=new Vector2(a?a.width:window.innerWidth,a?a.height:window.innerHeight),u=[],h=[];let d=0;const p=new BufferGeometry,m=new THREE_MeshLineExports.MeshLine,g=o?new Points(p,new PointsMaterial({color:s,size:4})):new Mesh(m,new THREE_MeshLineExports.MeshLineMaterial({color:s,lineWidth:4,resolution:c,sizeAttenuation:0})),v=new Quaternion,_=new Vector3,y=S=>{e=S.maxSize||e,t=S.maxDistance||t,r=S.throttleDistance||r},b=()=>{u.splice(0,u.length),h.splice(0,h.length),d=0,p.setFromPoints(u),m.setPoints(u),p.attributes.position.needsUpdate=!0},x=(S,M)=>{const E=u[u.length-1];_.copy(S),M&&(v.copy(M.quaternion),v.invert(),_.applyQuaternion(v));const R=E?_.distanceTo(E):0;if(E&&R<r)return;let w;for(;u.length>=e||d>=t;)w=u.shift(),d-=h.shift();const A=w?w.copy(_):_.clone();d+=R,h.push(R),u.push(A),p.setFromPoints(u),m.setPoints(u),p.attributes.position.needsUpdate=!0};return l.add(g),{mesh:l,trail:g,update:x,clear:b,setOptions:y}},elCache=new Map,createQuerySelectorUtil=a=>e=>{let t=elCache.get(e);return t&&document.body.contains(t)||(t=a(e),elCache.set(e,t)),t};createQuerySelectorUtil(window.document.querySelector.bind(window.document));createQuerySelectorUtil(window.document.querySelectorAll.bind(window.document));function createKissingSpheres(a=128){const e=new SphereGeometry(1,a,a),t=new MeshStandardMaterial({color:white,transparent:!0,opacity:.5,roughness:.2,side:DoubleSide}),i=new Mesh(e,t),r=new MeshStandardMaterial({color:red,transparent:!0,opacity:.7,roughness:.2}),s=new Mesh(e,r),o=new Mesh(e,r);s.renderOrder=1,o.renderOrder=2,i.renderOrder=3;const l=new Group;return l.add(i,s,o),{group:l,setScale:d=>{l.scale.set(d,d,d)},setOpacity:(d,p)=>{i.material.opacity=d,s.material.opacity=p,o.material.opacity=p},update:d=>{const{I1:p,I2:m,I3:g}=d,v=d.angularMomentum,_=v.length(),y=1/p-1/g,b=1/p-1/m,x=1/m-1/g;i.scale.set(y,y,y),o.scale.set(b,b,b),s.scale.set(x,x,x),i.position.copy(v).multiplyScalar((1/p+1/g)/_),o.position.copy(v).multiplyScalar((1/p+1/m)/_),s.position.copy(v).multiplyScalar((1/m+1/g)/_)}}}const ARROW_LENGTH=180;let container,stats,controls,renderer;const View={};function massSizeScale(a){return Math.sqrt(a)*10}function createMass(a={x:0,y:0,z:0},{roughness:e=.5,metalness:t=.5},i=grey){const r=new SphereGeometry(1,32,16),s=new MeshStandardMaterial({bumpScale:1,color:i,metalness:t,roughness:e,envMap:null,dithering:!0}),o=new Mesh(r,s);return o.position.set(a.x,a.y,a.z),o.castShadow=!0,o.receiveShadow=!0,{mesh:o,geometry:r,material:s,color:i}}function createSpinner(a){const e=new Group,t={roughness:.7,metalness:.5},i=createMass({x:100,y:0,z:0},t,red),r=createMass({x:-100,y:0,z:0},t,red),s=createMass({x:0,y:100,z:0},t,blue),o=createMass({x:0,y:-100,z:0},t,blue),l=createMass({x:0,y:0,z:100},t,grey),c=createMass({x:0,y:0,z:-100},t,grey),u=[i,r,s,o,l,c];e.add(...u.map(w=>w.mesh));const h=new BoxGeometry(200,200,200),d=new MeshStandardMaterial({color:white,metalness:.5,roughness:.9,envMap:null,dithering:!0}),p=new Mesh(h,d);p.castShadow=!0,p.receiveShadow=!0,p.rotation.set(0,0,0),e.add(p);const m=new CylinderGeometry(.5,.5,100,32),g=new Mesh(m,d);g.castShadow=!0,g.receiveShadow=!0,g.rotation.set(0,0,0),g.position.set(0,50,0);const v=new Mesh(m,d);v.castShadow=!0,v.receiveShadow=!0,v.rotation.set(0,0,0),v.position.set(0,-50,0);const _=new Group;_.add(g,v),e.add(_);const y=new Mesh(m,d);y.castShadow=!0,y.receiveShadow=!0,y.rotation.set(0,0,0),y.position.set(0,50,0);const b=new Mesh(m,d);b.castShadow=!0,b.receiveShadow=!0,b.rotation.set(0,0,0),b.position.set(0,-50,0);const x=new Group;x.rotation.set(Math.PI/2,0,0),x.add(y,b),e.add(x);const S=(w=0,A=0,L=0)=>{e.rotation.set(w,A,L)},M=w=>{e.rotation.setFromQuaternion(w)},E=(w,A,L)=>{const V=massSizeScale(w);i.mesh.scale.set(V,V,V),r.mesh.scale.set(V,V,V);const D=massSizeScale(A);s.mesh.scale.set(D,D,D),o.mesh.scale.set(D,D,D);const B=massSizeScale(L);l.mesh.scale.set(B,B,B),c.mesh.scale.set(B,B,B),p.scale.set(1,A/w,L/w+1/50),x.visible=!!L},R=w=>{r.mesh.visible=!w,o.mesh.visible=!w,c.mesh.visible=!w,b.visible=!w,v.visible=!w};return E(1,1),{group:e,setRotation:S,setMasses:E,setSingleSided:R,setOrientation:M}}function init(){container=document.createElement("div"),document.body.appendChild(container),View.scene=new Scene,View.scene.background=white,View.scene.fog=new Fog(white,1e3,5e3),View.layout=new Group,View.layout.rotation.set(-Math.PI/2,0,0),View.layoutQ=new Quaternion().setFromEuler(View.layout.rotation),View.scene.add(View.layout),View.Jframe=new Object3D,View.layout.add(View.Jframe),View.omegaFrame=new Object3D,View.layout.add(View.omegaFrame),View.ellipseFrame=new Object3D,View.layout.add(View.ellipseFrame),View.camera=new PerspectiveCamera(40,window.innerWidth/window.innerHeight,100,4e3),View.cameraOrth=new OrthographicCamera(window.innerWidth/-4,window.innerWidth/4,window.innerHeight/4,window.innerHeight/-4,100,4e3),View.cameraContainer=new Group,View.cameraContainer.add(View.camera,View.cameraOrth),View.scene.add(View.cameraContainer),View.camera.position.set(600,400,-400),View.cameraOrth.position.set(600,400,-400),View.camera.lookAt(View.scene.position),View.cameraOrth.lookAt(View.scene.position);const a=[View.camera,View.cameraOrth];View.ellipsoids=createEllipsoids(256),View.ellipsoids.group.rotation.set(0,0,0),View.rollingEllipsoid=createRollingEllipsoid(),View.rollingEllipsoid.group.rotation.copy(View.ellipsoids.group.rotation),View.rollingEllipsoid.group.renderOrder=1;const e=new Plane(new Vector3(1,1,1),0),t=new PlaneHelper(e,1e3,0);t.children[0].material.side=DoubleSide,View.omegaPlane=t,View.scene.add(t),View.rollingMomentumEllipsoid=createRollingMomentumEllipsoid(),View.rollingMomentumEllipsoid.group.rotation.copy(View.ellipsoids.group.rotation),View.spinner=createSpinner(),View.spinner.group.add(View.ellipsoids.group,View.rollingEllipsoid.group,View.rollingMomentumEllipsoid.group),View.layout.add(View.spinner.group),View.kissingSpheres=createKissingSpheres(),View.layout.add(View.kissingSpheres.group),View.angMomArrow=new ArrowHelper(new Vector3,View.layout.position,ARROW_LENGTH,pink),View.layout.add(View.angMomArrow),View.omegaArrow=new ArrowHelper(new Vector3,View.layout.position,ARROW_LENGTH,mustard),View.layout.add(View.omegaArrow),View.x1Arrow=new ArrowHelper(new Vector3,View.layout.position,50,red),View.layout.add(View.x1Arrow),View.x2Arrow=new ArrowHelper(new Vector3,View.layout.position,50,blue),View.layout.add(View.x2Arrow),View.x3Arrow=new ArrowHelper(new Vector3,View.layout.position,50,grey),View.layout.add(View.x3Arrow),View.trailsGroup=new Group,View.layout.add(View.trailsGroup),View.x1Trail=Trail({renderer,throttleDistance:.01,maxSize:1e3,maxDistance:10,color:red}),View.x1Trail.mesh.scale.set(100,100,100),View.trailsGroup.add(View.x1Trail.mesh),View.x2Trail=Trail({renderer,throttleDistance:.01,maxSize:1e3,maxDistance:10,color:blue}),View.x2Trail.mesh.scale.set(100,100,100),View.trailsGroup.add(View.x2Trail.mesh),View.x3Trail=Trail({renderer,throttleDistance:.01,maxSize:1e3,maxDistance:10,color:grey}),View.x3Trail.mesh.scale.set(100,100,100),View.trailsGroup.add(View.x3Trail.mesh),View.jTrail=Trail({renderer,throttleDistance:.01,maxSize:1e3,maxDistance:10,color:pink}),View.jTrail.mesh.scale.set(180,180,180),View.trailsGroup.add(View.jTrail.mesh),View.omegaTrail=Trail({renderer,throttleDistance:.01,maxSize:1e3,maxDistance:10,color:mustard}),View.omegaTrail.mesh.scale.set(180,180,180),View.trailsGroup.add(View.omegaTrail.mesh);const i=new RingGeometry(0,100,64);View.LPartX1=new Mesh(i,new MeshBasicMaterial({color:red,side:DoubleSide,transparent:!0,opacity:.75})),View.LPartX2=new Mesh(i,new MeshBasicMaterial({color:blue,side:DoubleSide,transparent:!0,opacity:.75})),View.LPartX3=new Mesh(i,new MeshBasicMaterial({color:grey,side:DoubleSide,transparent:!0,opacity:.75})),View.LParts=[View.LPartX1,View.LPartX2,View.LPartX3],View.layout.add(View.LPartX1,View.LPartX2,View.LPartX3);const r=new DirectionalLight(16777181,.9);r.position.x=100,r.position.y=550,r.position.z=-200,r.castShadow=!0,r.shadow.camera.near=.1,r.shadow.camera.far=2e3,r.shadow.camera.right=1e3,r.shadow.camera.left=-1e3,r.shadow.camera.top=1e3,r.shadow.camera.bottom=-1e3,r.shadow.mapSize.width=512*16,r.shadow.mapSize.height=512*16,r.shadow.radius=1,r.shadow.normalBias=0,r.shadow.bias=6e-4,View.scene.add(r);const s=new PlaneGeometry(5e3,5e3),o=new MeshStandardMaterial({bumpScale:1,color:10942552,metalness:.1,roughness:.9,envMap:null}),l=new Mesh(s,o);l.position.y=-240,l.rotation.set(-Math.PI/2,0,0),l.receiveShadow=!0,View.scene.add(l),View.ground=l;const c=`
    varying vec3 vWorldPosition;

    void main() {
      vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
      vWorldPosition = worldPosition.xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
  `,u=`
    uniform vec3 topColor;
    uniform vec3 bottomColor;
    uniform float offset;
    uniform float exponent;

    varying vec3 vWorldPosition;

    void main() {

      float h = normalize( vWorldPosition + offset ).y;
      gl_FragColor = vec4( mix( bottomColor, topColor, max( pow( max( h, 0.0 ), exponent ), 0.0 ) ), 1.0 );

    }
  `,h={topColor:{value:new Color(16777215)},bottomColor:{value:new Color(2335963)},offset:{value:500},exponent:{value:.5}};h.topColor.value.copy(r.color);const d=new SphereGeometry(2e3,64,15),p=new ShaderMaterial({uniforms:h,vertexShader:c,fragmentShader:u,side:BackSide});View.sky=new Mesh(d,p),View.scene.add(View.sky),View.scene.add(new AmbientLight(16777181,.9));const m=new HemisphereLight(r.color,2335963,.9);View.scene.add(m),View.axesHelper=new AxesHelper(200),View.layout.add(View.axesHelper),renderer=new WebGLRenderer({antialias:!0,alpha:!1}),renderer.autoClear=!1,renderer.setClearColor(View.scene.fog.color),renderer.setPixelRatio(window.devicePixelRatio),renderer.setSize(window.innerWidth,window.innerHeight),container.appendChild(renderer.domElement),renderer.outputEncoding=sRGBEncoding,renderer.toneMapping=ACESFilmicToneMapping,renderer.toneMappingExposure=.7,renderer.shadowMap.enabled=!0,renderer.shadowMap.type=VSMShadowMap,renderer.shadowMap.type=PCFSoftShadowMap,renderer.physicallyCorrectLights=!0,View.composers=a.map(g=>{const v=new EffectComposer(renderer);View.renderPass=new RenderPass(View.scene,g),v.addPass(View.renderPass);const _=new SSAOPass(View.scene,g,window.innerWidth,window.innerHeight);_.kernelSize=4,_.kernelRadius=8,_.minDistance=.001,_.maxDistance=.025,_.ssaoMaterial.uniforms.cameraFar.value=4e3,View.fxaaPass=new ShaderPass(FXAAShader),View.fxaaPass.material.uniforms.resolution.value.x=1/(window.innerWidth*renderer.getPixelRatio()),View.fxaaPass.material.uniforms.resolution.value.y=1/(window.innerHeight*renderer.getPixelRatio()),v.addPass(View.fxaaPass);const y=new ShaderPass(CopyShader);return v.addPass(y),v}),stats=new Stats,container.appendChild(stats.dom),controls=a.map(g=>{const v=new OrbitControls(g,renderer.domElement);return v.minDistance=400,v.maxDistance=2e3,v.rotateSpeed=1,v.zoomSpeed=1.2,v.minZoom=.5,v.maxZoom=2,v.panSpeed=.8,v.enableDamping=!0,v.dampingFactor=.2,v})}function onWindowResize(){const a=window.innerWidth,e=window.innerHeight;View.camera.aspect=a/e,View.camera.updateProjectionMatrix(),View.cameraOrth.left=e/-4,View.cameraOrth.right=e/4,View.cameraOrth.top=a/4,View.cameraOrth.bottom=a/-4,View.cameraOrth.updateProjectionMatrix(),View.fxaaPass.material.uniforms.resolution.value.x=1/(a*renderer.getPixelRatio()),View.fxaaPass.material.uniforms.resolution.value.y=1/(e*renderer.getPixelRatio()),renderer.setSize(a,e),View.composers.forEach(t=>t.setSize(a,e))}const n=new Vector3,setArrow=(a,e,t=!1,i=1)=>{n.copy(e),n.lengthSq()!==0?(t?a.setLength(i*n.length()*ARROW_LENGTH,.2*ARROW_LENGTH,.04*ARROW_LENGTH):a.setLength(i*ARROW_LENGTH),a.setDirection(n.normalize()),a.visible=!0):a.visible=!1},cameraOrientator=(a,e,t=1e3)=>{const i=e,r=i.isCamera?i:i.children.filter(u=>u.isCamera),s=i.quaternion.clone(),o=new Quaternion;let l=-1,c=!1;return(u=performance.now())=>{if(c)return;if(l<0){l=u,s.copy(i.quaternion);return}const h=index$3.invLerpClamped(l,l+t,u);h>1&&(c=!0),a.updateMatrixWorld(),i.quaternion.slerpQuaternions(s,o.setFromRotationMatrix(a.matrixWorld),index$2.quadOut(h)),r.forEach(d=>{d.up.set(0,1,0).applyQuaternion(i.quaternion)})}},UP=new Vector3(0,0,1),qtmp=new Quaternion,vtmp=new Vector3,updateLParts=a=>{View.LParts.forEach((e,t)=>{qtmp.setFromUnitVectors(UP,vtmp.copy(a[t]).normalize()),e.rotation.setFromQuaternion(qtmp)})},match=(a,e)=>(e[a]||e.default||(()=>{}))();function getPresetNames(){return Array.from(store_legacy.get("presets")||[])}function savePreset(a,e){if(!a)return;const t=getPresetNames();t.push(a),store_legacy.set("presets",Array.from(new Set(t))),store_legacy.set(`preset:${a}`,e)}function loadPreset(a){return store_legacy.get(`preset:${a}`)}function makeGui(a){let e=getPresetNames();const t=["world","J","J up","body","omega_0","ellipse"];let i,r,s;const o=new GUI;o.addFolder("Reset").close().add({reset:()=>l.reset()},"reset");const l=o.addFolder("Simulation"),c=W=>{const ne=loadPreset(W);ne&&(l.load(ne),u.preset=W,s.updateDisplay())},u={preset:"",loadPreset:"(select)",savePreset:()=>{const W=u.preset;!W||W==="(select)"||(savePreset(W,l.save()),e=getPresetNames(),u.loadPreset=W,r=r.options(e).onChange(c))}},h=o.addFolder("Presets");h.add(u,"savePreset").name("Save"),s=h.add(u,"preset"),r=h.add(u,"loadPreset",e).name("Load Preset").onChange(c);const d=new Vector3(1,0,0),p=new Vector3(0,1,0),m=Math.PI/180,g={psi:0,chi:0,r:.5,q:0,w_x:1e-6,w_y:0,w_z:.005,get omega(){const W=new Vector3(g.w_x,g.w_y,g.w_z);return W.applyAxisAngle(d,g.chi*m),W.applyAxisAngle(p,-g.psi*m),W},L:.013,energy_scale:1,cameraType:0,frame:t[0],showXVecs:!1,showAxes:!0,showBg:!0,singleSidedMasses:!1,showOmegaPlane:!1,showEllipsoids:!1,ELopacity:.7,LLopacity:.7,showRollingEllipsoid:!1,Ewopacity:.5,showRollingMomentumEllipsoid:!1,Lwopacity:.5,showKissingSpheres:!1,kissInnerOpacity:.7,kissOuterOpacity:.5,showLpart1:!1,showLpart2:!1,showLpart3:!1,showPV:!0,whichPVTrails:0,trailsFrame:"match",showBodyTrails:!0,whichBodyTrails:0,trailLength:10,showOmega:!0,showJ:!0,normalizedArrows:!1,arrowScale:1,paused:!0,togglePause:()=>{g.paused=!g.paused,i.name(g.paused?"Play":"Pause"),a({object:g,property:"paused",value:g.paused})},angularMomentum:0},v=()=>{const ne=4/(g.r+1);g.r*ne;const q=1+1/g.r,Q=1/q,J=MathUtils.lerp(Q,1,g.energy_scale),ge=g.L,G=4/q,te=.5*ge*ge/G,he=2*g.r*te/G,N=he*q*(J-Q),re=he/q*(1-J);g.w_x=Math.sqrt(N),g.w_y=0,g.w_z=Math.sqrt(re)},_=l.addFolder("Camera").close();_.add(View.camera.position,"x"),_.add(View.camera.position,"y"),_.add(View.camera.position,"z"),_.add(View.cameraOrth.position,"x"),_.add(View.cameraOrth.position,"y"),_.add(View.cameraOrth.position,"z");const y=l.addFolder("Initial Conditions");let b,x;const S=()=>{b.min(Math.max(g.q,.02)),x.max(g.r),b.updateDisplay(),x.updateDisplay(),v()};y.add(g,"psi",0,180,1),y.add(g,"chi",0,360,1),y.add(g,"L",0,.03,.001).name("L"),b=y.add(g,"r",.02,1,.01).name("mass ratio m2/m1").onChange(S),x=y.add(g,"q",0,g.r,.01).name("mass ratio m3/m1").onChange(S);const M=y.add(g,"energy_scale",0,1,.001).name("energy amount");y.add({fn(){M.setValue(g.r*g.r)}},"fn").name("Set to instability"),S();const E=l.addFolder("Angular Velocity").close();E.add(g,"w_x",-.02,.02,1e-6).listen(),E.add(g,"w_y",-.02,.02,1e-6).listen(),E.add(g,"w_z",-.02,.02,1e-6).listen();const R=l.addFolder("Angular Momentum Parts").close();R.add(g,"showLpart1").name("L of X1"),R.add(g,"showLpart2").name("L of X2"),R.add(g,"showLpart3").name("L of X3");const w=l.addFolder("View Options");w.add(g,"cameraType",{Perspective:0,Orthographic:1}),w.add(g,"frame",t),w.add(g,"singleSidedMasses").name("Single Sided Masses").onChange(W=>{View.spinner.setSingleSided(W)}),w.add(g,"showXVecs").name("x vectors"),w.add(g,"showAxes").name("axes"),w.add(g,"showBg").name("environment");const A=l.addFolder("Ellipsoids");A.add(g,"showOmegaPlane").name("Show Omega Plane"),A.add(g,"showEllipsoids").name("Show L space Ellipsoids");const L=()=>View.ellipsoids.setOpacity(g.ELopacity,g.LLopacity);A.add(g,"LLopacity",0,1,.1).name("L²(L) opacity").onChange(L),A.add(g,"ELopacity",0,1,.1).name("E(L) opacity").onChange(L),A.add(g,"showRollingEllipsoid").name("Show E(w) Ellipsoid");const V=()=>{View.rollingEllipsoid.setOpacity(g.Ewopacity),View.rollingMomentumEllipsoid.setOpacity(g.Lwopacity)};A.add(g,"Ewopacity",0,1,.1).name("E(w) opacity").onChange(V),A.add(g,"showRollingMomentumEllipsoid").name("Show L²(w) space Ellipsoid"),A.add(g,"Lwopacity",0,1,.1).name("L²(w) opacity").onChange(V),A.add(g,"showKissingSpheres").name("Show Kissing Spheres");const D=()=>{View.kissingSpheres.setOpacity(g.kissOuterOpacity,g.kissInnerOpacity)};A.add(g,"kissInnerOpacity",0,1,.1).name("Inner opacity").onChange(D),A.add(g,"kissOuterOpacity",0,1,.1).name("Outer opacity").onChange(D);const B=l.addFolder("Arrows");B.add(g,"showOmega").name("Show angular velocity"),B.add(g,"showJ").name("Show angular momentum"),B.add(g,"normalizedArrows").name("Normalize lengths"),B.add(g,"arrowScale").name("Scale factor");const O=l.addFolder("Trails");return O.add(g,"showBodyTrails").name("body trails"),O.add(g,"whichBodyTrails",{All:0,Mass1:1,Mass2:2,Mass3:3}),O.add(g,"showPV").name("pseudovector trials"),O.add(g,"whichPVTrails",{Both:0,J:1,omega:2}),O.add(g,"trailsFrame",["match",...t]).name("trails frame"),O.add(g,"trailLength",1,50,.1).name("trail length"),i=l.add(g,"togglePause").name("Play"),l.onChange(W=>{(W.property==="L"||W.property==="energy_scale")&&v(),a(W)}),a({object:g}),o.addFolder("Metrics").close().add(g,"angularMomentum").disable().listen(),{rootGui:o,gui:l,state:g}}function main(){let a=!0;init();let e=View.scene,t=View.scene,i=View.layout,r=!0,s=1;const o=createSystem(),l=createPendulumView(document.getElementById("pendulum-view")),c=createEllipsoidView(document.getElementById("ellipsoid-view"));function u(){R(),stats.update(),requestAnimationFrame(u)}const h=[View.x1Trail,View.x2Trail,View.x3Trail,View.jTrail,View.omegaTrail],d=new Vector3,p=()=>{View.x1Trail.update(o.x1,t),View.x2Trail.update(o.x2,t),View.x3Trail.update(o.x3,t),View.jTrail.update(d.copy(o.angularMomentum).normalize(),t),d.copy(o.omega),r?d.normalize():d.multiplyScalar(1/o.angularMomentum.length()),d.multiplyScalar(s),View.omegaTrail.update(d,t)},m=()=>{h.forEach(V=>V.clear())},g=new Vector3(1,1,1).normalize(),v=(V,D,B)=>{const $=d.copy(B).lerp(g,1e-6).cross(D).angleTo(V)>Math.PI/2?1:-1;return d.copy(B).lerp(g,1e-6).projectOnPlane(V),2*$*d.angleTo(D)-Math.PI/2},_=new Quaternion().setFromAxisAngle(new Vector3(0,0,1),Math.PI);let y,b=!0,x=!0,S,M=performance.now(),E=cameraOrientator(View.scene,View.cameraContainer);function R(){const V=performance.now(),D=V-M;M=V,a||o.step(D),View.spinner.setOrientation(o.qRot);const B=s/(r?1:o.angularMomentum.length());View.ellipsoids.setScale(s*ARROW_LENGTH),View.rollingEllipsoid.setScale(s*ARROW_LENGTH),View.kissingSpheres.setScale(s*ARROW_LENGTH),View.rollingMomentumEllipsoid.setScale(s*ARROW_LENGTH),View.omegaPlane.plane.normal.copy(o.angularMomentum).multiplyScalar(-1),View.omegaPlane.plane.normal.applyQuaternion(View.layoutQ),View.omegaPlane.plane.constant=s*ARROW_LENGTH*o.omega.dot(o.angularMomentum)/o.angularMomentum.lengthSq(),setArrow(View.angMomArrow,o.angularMomentum,!1,s),setArrow(View.omegaArrow,o.omega,!r,B),View.angMomArrow.visible=x&&View.angMomArrow.visible,View.omegaArrow.visible=b&&View.omegaArrow.visible,setArrow(View.x1Arrow,o.x1),setArrow(View.x2Arrow,o.x2),setArrow(View.x3Arrow,o.x3),View.Jframe.quaternion.copy(S?o.jRot:o.jWorld),View.ellipseFrame.quaternion.copy(o.jWorld).multiply(_),View.omegaFrame.quaternion.copy(o.omegaRot),updateLParts(o.LParts),E(V),a||p(),controls[y].update(),View.composers[y].render(),l.update({angle:v(o.x1,o.x2,o.angularMomentum)}),c.render()}window.addEventListener("resize",onWindowResize);const w=["r","q","psi","chi","w_x","w_y","w_z","energy_scale","L"],A=V=>{o.setInitialPosition(V.psi,V.chi),o.setMassRatio(V.r,V.q),o.setOmega(V.omega),View.spinner.setMasses(...o.getMasses()),o.zeroTime(),c.update(o),View.ellipsoids.update(o),View.rollingEllipsoid.update(o),View.rollingMomentumEllipsoid.update(o),View.kissingSpheres.update(o)};makeGui(V=>{const D=V.object;if((!V.property||w.indexOf(V.property)>-1)&&(A(D),m()),V.property==="paused"){a=V.value;return}y=D.cameraType,r=D.normalizedArrows,s=D.arrowScale,b=D.showOmega,x=D.showJ,View.axesHelper.visible=D.showAxes,View.ground.visible=View.sky.visible=D.showBg,h.forEach(W=>W.setOptions({maxDistance:D.trailLength}));const B=i;match(D.trailsFrame==="match"?D.frame:D.trailsFrame,{world:()=>{t=View.scene,i=View.layout},"J up":()=>{t=View.scene,i=View.layout},ellipse:()=>{t=View.scene,i=View.layout},J:()=>{t=View.Jframe,i=t},omega_0:()=>{t=View.omegaFrame,i=t},body:()=>{t=View.spinner.group,i=t}}),B!==i&&(m(),i.add(View.trailsGroup));const O=e;e=match(D.frame,{world:()=>View.scene,"J up":()=>View.Jframe,J:()=>View.Jframe,omega_0:()=>View.omegaFrame,body:()=>View.spinner.group,ellipse:()=>View.ellipseFrame}),S=D.frame!=="J up",O!==e&&(E=cameraOrientator(e,View.cameraContainer)),View.x1Arrow.line.visible=View.x1Arrow.cone.visible=View.x2Arrow.line.visible=View.x2Arrow.cone.visible=View.x3Arrow.line.visible=View.x3Arrow.cone.visible=D.showXVecs;const $=D.whichBodyTrails;View.x1Trail.mesh.visible=D.showBodyTrails&&(!$||$===1),View.x2Trail.mesh.visible=D.showBodyTrails&&(!$||$===2),View.x3Trail.mesh.visible=D.showBodyTrails&&(!$||$===3),View.LPartX1.visible=D.showLpart1,View.LPartX2.visible=D.showLpart2,View.LPartX3.visible=D.showLpart3,o.getMasses()[2]===0&&(View.LPartX3.visible=View.x3Trail.mesh.visible=View.x3Arrow.line.visible=View.x3Arrow.cone.visible=!1),View.jTrail.mesh.visible=D.showPV&&D.whichPVTrails!==2,View.omegaTrail.mesh.visible=D.showPV&&D.whichPVTrails!==1,View.ellipsoids.group.visible=D.showEllipsoids,View.rollingEllipsoid.group.visible=D.showRollingEllipsoid,View.omegaPlane.visible=D.showOmegaPlane,View.rollingMomentumEllipsoid.group.visible=D.showRollingMomentumEllipsoid,View.kissingSpheres.group.visible=D.showKissingSpheres,D.angularMomentum=o.angularMomentum.length()}),u()}main();
