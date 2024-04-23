var ToDoList = React.createClass({displayName: "ToDoList",
    getInitialState: function(){
        return{
            tasks: []
        }    
    },
    componentWillMount: function(){
        var self = this;
        if(this.props.count){
            // jQuery getJSON to get JSON from an api
            $.getJSON("http://baconipsum.com/api/?type=all-meat&sentences=" + this.props.count + "&start-with-lorem=1&callback=?", function(results){
                // Callback fn
                results[0].split('. ').forEach(function(sentence){
                    self.addToList(sentence.substring(0, 40));
                })
            });
        }
    },
    addToList: function(newText) {
        var tasksArr = this.state.tasks;
        tasksArr.push(newText);
        this.setState({tasks: tasksArr });

    },
    saveList: function(newText, i) {
        var tasksArr = this.state.tasks;
        tasksArr[i] = newText;
        this.setState({tasks: tasksArr });
    },
    deleteFromList: function(i) {
        var tasksArr = this.state.tasks;
        tasksArr.splice(i, 1);
        this.setState({tasks: tasksArr });

    },
    eachTask: function(task, i) {
        return (
            
            React.createElement(ToDo, {index: i, onSave: this.saveList, onDelete: this.deleteFromList}, task)
        )
    },
    render: function() {
        return (
            React.createElement("div", {className: "todo-list"}, 
                this.state.tasks.map(this.eachTask), 
                React.createElement("button", {className: "btn btn-sm btn-success glyphicon glyphicon-plus", onClick: this.addToList.bind(null, "New Task")})
            )
        )
    }
});