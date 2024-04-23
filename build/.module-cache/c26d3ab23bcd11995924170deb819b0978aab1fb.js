


var ToDo = React.createClass({displayName: "ToDo",
    getInitialState: function(){
        return {editing: false, completed: false};
    },
    
    render: function() {
        if(this.state.editing){
            return this.renderEditCard();
        } else {
            return this.renderDefaultCard();
        }    
    },
    componentDidMount: function(){ 
        $(this.getDOMNode()).draggable();
    },
    renderDefaultCard: function() {
        return(
            React.createElement("div", {className: "todo" + (this.state.completed ? " completed" : "")}, 
                React.createElement("h3", null, this.props.children), 
                React.createElement("label", {className: "custom-checkbox"}, 
                    React.createElement("input", {type: "checkbox", checked: this.state.completed, onChange: this.toggleCompletion}), 
                    React.createElement("span", {className: "custom-checkbox-checkmark"})
                ), 
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
    },
    toggleCompletion: function() {
        this.setState({completed: !this.state.completed});
    }
});
