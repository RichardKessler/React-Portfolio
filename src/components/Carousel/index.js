import React from 'react';
import Card from '../Cards'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import NPS from '../../assets/NPS-Visit-Guide.png';
import Jobs from '../../assets/Job-News-Search.png';
import Weather from '../../assets/Weather-Dash.png';
import Workday from '../../assets/Day-Planner.png';
import Employees from '../../assets/EmployeeDirectory.png';
import Fitness from '../../assets/Workout-Tracker.png';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'National Parks Services Visitor Guide',
                    subTitle: 'Go out and find your adventure!',
                    imgSrc: NPS,
                    link: 'https://parks-and-weather.herokuapp.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Job and News Search',
                    subTitle: 'Get that job you always wanted, but do your research first',
                    imgSrc: Jobs,
                    link: 'https://richardkessler.github.io/Job-and-News-Search/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Weather Dashboard',
                    subTitle: 'Check the weather before making plans',
                    imgSrc: Weather,
                    link: 'https://richardkessler.github.io/Weather-Dashboard/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Work Day Planner',
                    subTitle: 'Make and change plans throughout your day with ease',
                    imgSrc: Workday,
                    link: 'https://richardkessler.github.io/Day-Planner/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Directory of Employees',
                    subTitle: 'Easily find your employees non-sensitive information',
                    imgSrc: Employees,
                    link: 'https://frosty-knuth-dfbbf2.netlify.app/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Fitness Helper',
                    subTitle: 'Keep track of your workouts and see all of your fitness gains',
                    imgSrc: Fitness,
                    link: 'https://workout-plan-2020.herokuapp.com/?id=5f03ac50b4664a00175102c9',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return this.state.items.map(item => {
            return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

render() {
    return(
        <Container fluid={true}>
            <Row className='justify-content-around'>
                {this.makeItems(this.state.itmes)}
            </Row>
        </Container>
    )
}

}

export default Carousel;