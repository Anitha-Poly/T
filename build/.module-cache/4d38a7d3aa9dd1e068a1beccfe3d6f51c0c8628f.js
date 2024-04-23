var ToDo = React.createClass({displayName: "ToDo",
    render: function() {
        return(
            React.createElement("div", {className: "todo"}, 
                React.createElement("h3", null, "Some Random Task"), 
                React.createElement("button", {className: "btn btn-primary glyphicon glyphicon-pencil"}), 
                React.createElement("button", {className: "btn btn-warning glyphicon glyphicon-trash"})
            )
        )
        
        
    }
});
React.render(React.createElement(ToDo, null), document.getElementById('react-component'));