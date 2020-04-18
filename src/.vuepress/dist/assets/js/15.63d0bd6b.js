(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{358:function(a,t,e){"use strict";e.r(t);var s=e(0),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("Adoption for Serverless is growing across the tech companies, there is always new tools to make this journey easy,\n")]),a._v(" "),e("p",[a._v("I have been looking at Chalice, and it is one of those tools made for python lovers for fast api prototyping and easy writing of ETL jobs.")]),a._v(" "),e("h2",{attrs:{id:"what-is-aws-chalice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-aws-chalice"}},[a._v("#")]),a._v(" What is AWS Chalice?")]),a._v(" "),e("div",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:"/assets/img/introduction-to-aws-chalice/chalice-logo.png",width:"350"}})]),a._v(" "),e("p",[a._v("AWS chalice is a microframework for writing serverless app in python. that means chalice have a very light footprint. Also it supports only Python for now.")]),a._v(" "),e("h2",{attrs:{id:"what-does-aws-chalice-provide"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-does-aws-chalice-provide"}},[a._v("#")]),a._v(" What does AWS Chalice provide?")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("The tool provides a CLI tool that you can use to create your app, test it locally, deploy it to AWS and manage it.")])]),a._v(" "),e("li",[e("p",[a._v("The tool use decorators to generate the routers for your APIs, triggers and access for your lambda functions.")])]),a._v(" "),e("li",[e("p",[a._v("Makes it easy to integrate with Amazon API Gateway, Amazon S3, Amazon SNS, Amazon SQS, and other AWS services.")])]),a._v(" "),e("li",[e("p",[a._v("The tool also auto generate the IAM policies according to your lambda routes, we don't have to create those roles manually.")])])]),a._v(" "),e("h2",{attrs:{id:"how-to-install-aws-chalice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-install-aws-chalice"}},[a._v("#")]),a._v(" How to install AWS Chalice")]),a._v(" "),e("p",[a._v("Prerequisites:")]),a._v(" "),e("ul",[e("li",[a._v("Python")]),a._v(" "),e("li",[a._v("Virtualenv")]),a._v(" "),e("li",[a._v("Pip")])]),a._v(" "),e("h3",{attrs:{id:"installation-steps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation-steps"}},[a._v("#")]),a._v(" Installation steps")]),a._v(" "),e("ul",[e("li",[a._v("Use virtualenv for installation")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("virtualenv ~/.virtualenvs/chalice-demo\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" ~/.virtualenvs/chalice-demo/activate\npip "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" chalice\n")])])]),e("ul",[e("li",[a._v("Confirm Installation")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("chalice --version\n")])])]),e("p",[a._v("you should see output like")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("chalice "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.13")]),a._v(".1, python "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.7")]),a._v(".7, darwin "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("19.4")]),a._v(".0\n")])])]),e("p",[a._v("Congrats, now you have chalice installed and ready to be used.")]),a._v(" "),e("h2",{attrs:{id:"hello-world-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-example"}},[a._v("#")]),a._v(" Hello World Example")]),a._v(" "),e("p",[a._v("In this example we will use chalice default example to create a hellow world endpoint\n")]),e("div",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:"/assets/img/introduction-to-aws-chalice/hello-world-example.png",width:"500"}})]),e("p"),a._v(" "),e("h3",{attrs:{id:"create-the-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-project"}},[a._v("#")]),a._v(" Create the project")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("chalice new-project helloworld\n")])])]),e("h3",{attrs:{id:"deploy-to-aws"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploy-to-aws"}},[a._v("#")]),a._v(" Deploy to AWS")]),a._v(" "),e("p",[a._v("a prerequisite to this step is to have aws cli configured for your environment.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" helloworld\nchalice deploy\n")])])]),e("p",[a._v("You will get the following output")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("Creating deployment package.\nCreating IAM role: helloworld-dev\nCreating lambda function: helloworld-dev\nCreating Rest API\nResources deployed:\n  - Lambda ARN: arn:aws:lambda:eu-west-1:982640118702:function:helloworld-dev\n  - Rest API URL: https://fu9ijghrsh8.execute-api.eu-west-1.amazonaws.com/api/ \n")])])]),e("p",[a._v("You can test the endpoint from the output above in your browser, or use the curl command to get the response")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" https://fu5ai2rsh8.execute-api.eu-west-1.amazonaws.com/api/\n")])])]),e("p",[a._v("You will get the following output")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"world"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("h3",{attrs:{id:"quick-look-at-the-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quick-look-at-the-code"}},[a._v("#")]),a._v(" Quick look at the code")]),a._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" chalice "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" Chalice\n\napp "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Chalice"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("app_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'helloworld'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[a._v("@app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("route")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("def")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("index")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"world"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("As you can see the code behind this is so simple, you can play with it and add another endpoint.")]),a._v(" "),e("p",[a._v("In the next articles we will go deeper into more advanced examples with AWS Chalice.")])])}),[],!1,null,null,null);t.default=n.exports}}]);