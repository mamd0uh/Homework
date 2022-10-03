const React = require('react')
const DefaultLayout = require('../views/layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { logs } = this.props

        return (
            <DefaultLayout title="All Logs" group="logs">
                    <h1>Logs Index Page</h1>
                    <ul id="logs-index">
                        {logs.map((log) => {
                            return (
                                <li key={log._id}>
                                   Log Title: <a href={`/logs/${log._id}`}>{log.title}</a> Log Entry: {log.entry}.
                                </li>
                            )
                        })}
                    </ul>

                    <nav>
                        <a href="/logs/new">Create a new a log</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index;