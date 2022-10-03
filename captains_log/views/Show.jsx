const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout');

// class component
class Show extends React.Component {

    render() {
        
        const { log } = this.props

        return (
            <DefaultLayout title={`${log.title} details`} group="logs">
                <h1>Show Page</h1>
                <p>
                    Title: {log.title}
                
                </p>
                <p>
                     Entry: {log.entry}
                </p>
                <p>
                    {log.shipIsBroken ? "The ship is broken... :(" : "The ship is not broken!"}
                </p>

                <button>
                    <a href={`/logs/${log._id}/edit`}>Edit</a>
                </button>

                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" />
                </form>

                <nav>
                    <a href="/logs">Back</a>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Show;