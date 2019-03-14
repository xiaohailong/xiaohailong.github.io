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
        successAdd:false,
        addMsg:'add success!'
        // show:false
    },
    mounted:function(){
        this.tempList = this.todoList;
        this.currentColor();
    },
    methods: {
        add:function(thing){
            this.alreadyAdd = false;
            // !this.alreadyAdd && this.todoList.push(Object.assign(this.newtodo,{status:'undo',show:false}));
            // console.log(Object.assign(this.newtodo,{status:'undo',show:false})); //Object.assign ？？？？
            this.todoList = this.tempList;
            if(this.newtodo.title == ''){
                this.addMsg = 'please input the title';
            }else{
                console.table(this.todoList);
                !this.alreadyAdd && this.todoList.push({title:this.newtodo.title,con:this.newtodo.con,status:'undo',show:false});
                this.newadd.push(thing);
                this.addMsg = 'add success!';
                console.table(this.todoList);
            }
            this.successAdd = true;
            this.newtodo = {title:'',con:''};
        },
        check:function(thing){
            this.successAdd = false;
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
        },
        filterUndo:function(){
            this.todoList = this.tempList;
            this.choosed = 'total';
            this.todoList = this.todoList.filter(function(item){
                return item.status == 'undo';
            });
        },
        total:function(){
            this.todoList = this.tempList;
            this.choosed = 'total';
        },
        done:function(item){
            if(item.status == 'undo'){
                item.show = !item.show;
            }
        },
        currentColor:function(){
            let alltab = document.querySelectorAll('.tab_ul_li');
            for(let i = 0;i<alltab.length;i++){
                alltab[i].addEventListener('click',function(){
                    alltab.forEach(function(item){
                        if(item.classList.contains('cur')){
                            item.classList.remove('cur');
                        }
                    });
                    this.classList.add('cur');
                },false);
            }
            
        }
    },
});