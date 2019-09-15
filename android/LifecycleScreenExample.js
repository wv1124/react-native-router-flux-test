import { Navigation } from 'react-native-navigation';

class LifecycleScreenExample extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      text: 'nothing yet'
    };
  }

  componentDidAppear() {
    this.setState({ text: 'componentDidAppear' });
  }

  componentDidDisappear() {
    alert('componentDidDisappear');
  }

  navigationButtonPressed({ buttonId }) {
    // a navigation-based button (for example in the topBar) was clicked. See section on buttons.
  }

  componentWillUnmount() {
    alert('componentWillUnmount');
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.h1}>{`Lifecycle Screen`}</Text>
        <Text style={styles.h1}>{this.state.text}</Text>
      </View>
    );
  }
}
