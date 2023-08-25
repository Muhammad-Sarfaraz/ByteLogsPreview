(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{303:function(e,a,t){"use strict";t.r(a);var n=t(14),s=Object(n.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#script"}},[e._v("#")]),e._v(" Script")]),e._v(" "),a("h4",{attrs:{id:"global-scroll"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-scroll"}},[e._v("#")]),e._v(" Global Scroll:")]),e._v(" "),a("ul",[a("li",[e._v("First, create the plugin:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export const scroll = {\n    install(app) {\n        app.config.globalProperties.$scroll = {\n            execute(selector) {\n                var container = document.querySelector(`#${selector}`);\n                console.log(container);\n                if (container) {\n                    container.scrollIntoView({\n                        behavior: 'smooth'\n                    });\n                }\n            },\n        };\n    },\n};\n\n")])])]),a("ul",[a("li",[e._v("Register in vue global, then")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("this.$scroll.execute('scrollToDivId')\n")])])]),a("h4",{attrs:{id:"the-compound-data-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-compound-data-object"}},[e._v("#")]),e._v(" The Compound Data Object:")]),e._v(" "),a("p",[e._v("Suppose, You have to get data of 3/4 models, what will you do ? you will call one by one , but cost time and resources. Instead just\nmake a single api call and get all the data which you are looking for!")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Laravel backend:\nRoute::get('support/get-models', function (Request $request) {\n  $data = [];\n\n  if ($request->has('data')) {\n      $modelNames = $request->get('data');\n      $modelNamesArray = explode(',', $modelNames);\n\n      foreach ($modelNamesArray as $modelName) {\n          $model = app(\"App\\Models\\\\\" . ucfirst($modelName));\n          $modelData = $model->all();\n          $data[$modelName] = $modelData;\n      }\n  }\n  return response()->json($data);\n});\n\n// In crud.js\ngetModelsData(names){\n  const data = axios.get('support/get-models',{\n      params:{\n          data:names,\n      }\n  });\n  return data;\n},\n\n// Where it is required!\ncreated(){\nthis.getModelsData(\"Event,Calendar\").then((res)=>{\n    console.log(res.data);\n});\n}\n\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);