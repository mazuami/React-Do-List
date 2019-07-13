import React,{Component} from 'react';
import Story2 from './StoryPt2';

class MyAppInfo extends Component{
    render(){
        return(
            <div>
                <h4>A Short Bio</h4>
                <p> This is a story of a crow and a whiskey bottle. The crow saw a wine bottle and asked 
                    " Why don't you fly high up the sky." </p>
                 <Story2 />   
            </div>
        )
    };
}

export default MyAppInfo;
