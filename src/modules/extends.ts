// [ES5 有几种方式可以实现继承](https://mp.weixin.qq.com/s/FHiSjn2Ooj7ZNqp9IfJ8mA)
// 原型链继承
// 原型链继承的基本思想是利用原型让一个引用类型继承另一个引用类型的属性和方法。
// 问题：通过原型来实现继承时，原先的实例属性变成了现在的原型属性，该原型的引用类型属性会被所有的实例共享。

// 借用构造函数
// 借用构造函数的技术，其基本思想为:在子类型的构造函数中调用超类型构造函数。
// 问题：父类的原型属性对子类不可见。

// 组合继承 (原型链 + 借用构造函数)
// 无论什么情况下，都会调用两次超类型构造函数：一次是在创建子类型原型的时候，另一次是在子类型构造函数内部。
