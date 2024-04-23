var ToDo = React.createClass({displayName: "ToDo",
    getInitialState: function(){
        return{editing: false}
    },
    render: function() {
        if(this.state.editing){
            return this.renderEditCard();
        }else{
            return this.renderDefaultCard();
        }    
    },
    renderDefaultCard: function() {
        return(
            React.createElement("div", {className: "todo"}, 
                React.createElement("h3", null, this.props.children), 
                React.createElement("button", {className: "btn btn-primary glyphicon glyphicon-pencil", onClick: this.edit}), 
                React.createElement("button", {className: "btn btn-warning glyphicon glyphicon-trash", onClick: this.delete})
            )
        )
    },
    renderEditCard: function() {
        return(
            React.createElement("div", {className: "todo"}, 
                React.createElement("textarea", {defaultValue: this.props.children, ref: "savedText"}), 
                React.createElement("button", {className: "btn btn-success glyphicon glyphicon-floppy-disk", onClick: this.save})
            )
        )
    },
    edit: function() {
        console.log("Editing task");
        this.setState({editing: true});
        
    },
    delete: function() {
        console.log("Task Deleted!");
        this.props.onDelete(this.props.index);

    },
    save: function() {
        console.log("Task saved");
        this.setState({editing: false});
        var txt = this.refs.savedText.getDOMNode().value;
        console.log('The saved text is ' + txt)
        this.props.onSave(this.refs.savedText.getDOMNode().value, this.props.index);
    }
});

var ToDoList = React.createClass({displayName: "ToDoList",
    getInitialState: function(){
        return{
            tasks: [
                'Attend stand up calls',
                'Push code',
                'Attend meetings',
                'Gym time'

            ]
        }
            
        
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
                React.createElement("button", {className: "btn btn-success glyphicon glyphyicon-plus"})
            )
        )
    }
});
React.render(React.createElement(ToDoList, {count: 10}), document.getElementById('react-component'));
