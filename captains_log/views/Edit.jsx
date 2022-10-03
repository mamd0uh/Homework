const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        let { log } = this.props

        return (
            <DefaultLayout title="edit a log" group="logs">
                <h1>Edit Page</h1>
                <form action={`/logs/${log._id}?_method=PUT`} method="POST">

                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" defaultValue={log.title} />

                    <label htmlFor="entry">Entry:</label>
                    <input type="text" id="entry" name="entry" defaultValue={log.entry} />

                    <label htmlFor="shipIsBroken">Ship is Broken?:</label>
                    <input type="checkbox" id="shipIsBroken" name="shipIsBroken" defaultChecked={log.shipIsBroken} />

                    <input type="submit" value="Edit Log"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit