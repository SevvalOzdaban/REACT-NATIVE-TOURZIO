import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

class Search extends Component {
    state = {
        searching: '',
    };
    updateSearch = (searching) => {
        this.setState({ searching });
    };

    render() {
        const { searching } = this.state;
        return (
            <View>
                <SearchBar
                    platform="default"
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={searching}
                    containerStyle={{
                        backgroundColor: 'white',
                        borderBottomColor: 'transparent',
                        borderTopColor: 'transparent',
                        justifyContent: "center",
                        width: width * 0.95,
                        height: height * 0.05,
                        borderRadius: 30,
                    }}
                    inputContainerStyle={{
                        backgroundColor: 'transparent',
                        width: width * 0.95,
                        height: height * 0.06,
                        borderRadius: 30,
                    }}
                />
            </View>
        );
    }
};

export default Search;