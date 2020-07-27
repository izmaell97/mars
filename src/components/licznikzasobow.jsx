import React from 'react'
import ReactDOM from 'react-dom';


export class ResourceCounter extends React.Component {
        constructor(props) {
            super(props);
            this.state = {wartosc: 0};
      this.handlezasob = this.handlezasob.bind(this);
      this.handlezasobmniej = this.handlezasobmniej.bind(this);
        }

        handlezasob() {
            let nowawartosc = this.state.wartosc + 1;
            this.setState({
                wartosc: nowawartosc
            });
        }

        handlezasobmniej() {
            let nowawartosc=0
           if(this.state.wartosc>0) {
               nowawartosc = this.state.wartosc - 1;

               this.setState({
                   wartosc: nowawartosc
               });
           }
           else {
                this.setState({
                   wartosc: 0
               });
           }
        }

    render() {
            let newStyle = {...styles}
            let {background } = this.props
         let {color } = this.props
            newStyle.background = background
        newStyle.color = color

              return (
                  <div style={newStyle}>
                      <p style={styltab}>
                      <h1 >{this.props.text}</h1>

                          <button style={stylbutton} onClick={this.handlezasob}>+</button>
                        <a style={styltab2}>  {this.state.wartosc}</a>
                          <button style={stylbutton} onClick={this.handlezasobmniej}>-</button>

                      </p>
                  </div>
              )

    }
}
const styles={
  background: '#156545',
  color:      'grey',
  marginTop: 20,
    marginLeft:80,
  fontSize: 20,
}
const styltab={
   marginLeft:50,
}
const styltab2={
   marginLeft:5,
    marginRight:10,
    fontSize:30,
}
const stylbutton={
    background: 'silver',
    color: 'black',
    fontSize: 30,


}



