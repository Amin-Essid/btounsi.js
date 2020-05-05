import React, {Component} from 'react';
import data from './Data';

const ShowsContext = React.createContext();

class ShowsProvider extends Component {
    state = {
        loading: true,
        shows: [],
        channels: [],
        featuredShows: [],
        dramaShows: [],
        comedyShows: [],
        legendaryShows: [],
        wataniaShows:[],
        alhiwarShows: [],
        attessiaShows: [],
        nessmaShows: [],
        filtredShows: []
    }

    // set the state using the data:
    componentDidMount(){
        let shows = data;
        let featuredShows = shows.filter(show => show.featured);
        let comedyShows = shows.filter(show => show.type === 'comedy');
        let dramaShows = shows.filter(show => show.type === 'drama');
        let attessiaShows = shows.filter(show => show.channel === 'attessia');
        let alhiwarShows = shows.filter(show => show.channel === 'alhiwar');
        let wataniaShows = shows.filter(show => show.channel === 'watania');
        let nessmaShows = shows.filter(show => show.channel === 'nessma');
        this.setState({
            shows,
            featuredShows,
            comedyShows,
            dramaShows,
            attessiaShows,
            alhiwarShows,
            wataniaShows,
            nessmaShows,
            loading: false
        })
        //set the necessery data to the state

    }

    //format the data
    // set the new state
    // create the passed functions to provider

    render(){
        return(
            <ShowsContext.Provider value = {{...this.state}}>
                {this.props.children}
            </ShowsContext.Provider>
        )
    }
}

const ShowsConsumer = ShowsContext.Consumer;

export function withConsumer(Component){
    return function ConsumerWrapper(props) {
        return <ShowsConsumer>
            {value => <Component {...props} context={value}/>}
        </ShowsConsumer>
    }
}

export {ShowsConsumer, ShowsContext, ShowsProvider}