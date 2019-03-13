let app = new Vue({
    el: '#app',
    data: {
        title:'todo_list',
        choosed:'total',
        todoList:[
            {title:'vue',con:'learn vue',status:'done',show:false},
            {title:'webpack',con:'learn webpack',status:'undo',show:false},
            {title:'node',con:'learn node',status:'undo',show:false},
            {title:'es6',con:'learn es6',status:'undo',show:false},
            {title:'小程序',con:'learn 小程序',status:'undo',show:false}
        ],
        newtodo:{title:'',con:''},
        alreadyAdd:false,
        newadd:[],
        tempList:[],
        successAdd:false
        // show:false
    },
    mounted:function(){
        this.tempList = this.todoList;
        console.log(this.tempList);
    },
    methods: {
        add:function(thing){
            this.alreadyAdd = false;
            // !this.alreadyAdd && this.todoList.push(Object.assign(this.newtodo,{status:'undo',show:false}));
            // console.log(Object.assign(this.newtodo,{status:'undo',show:false})); //Object.assign ？？？？
            !this.alreadyAdd && this.todoList.push({title:this.newtodo.title,con:this.newtodo.con,status:'undo',show:false});
            this.newadd.push(thing);
            this.newtodo = {title:'',con:''};
            // oFunc.inform('add success!');
           
            console.table(this.todoList);
        },
        check:function(thing){
            this.alreadyAdd = false;
            this.todoList.forEach(element => {
                if(thing == element.title){
                    this.alreadyAdd = true;
                }
            });
        },
        filterDone:function(){
            
            this.todoList = this.tempList;
            this.choosed = 'total';
            this.todoList = this.todoList.filter(function(item){
                return item.status == 'done';
            });
            console.log(this.todoList);
        },
        filterUndo:function(){
            this.todoList = this.tempList;
            this.choosed = 'total';
            this.todoList = this.todoList.filter(function(item){
                return item.status == 'undo';
            });
            console.log(this.todoList);
        },
        total:function(){
            this.todoList = this.tempList;
            this.choosed = 'total';
        },
        done:function(item){
            item.show = !item.show;
            console.log(item.show);
        }
    },
});