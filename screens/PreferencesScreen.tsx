import { StyleSheet, ScrollView, Text, Image, View } from 'react-native'
import React from 'react'
import { Button, ToggleButton, Chip, 
  Slider,  List, Divider, useTheme  } from 'react-native-paper';

  type StatusState = 'checked' | 'unchecked';

const PreferencesScreen = () => {
  const [expanded, setExpanded] = React.useState<boolean>(true);
  const [first, setFirst] = React.useState<string>('bold');
  const [fruit, setFruit] = React.useState<string>('watermelon');
  const [status, setStatus] = React.useState<StatusState>('checked');

  const _handlePress = () => {
    setExpanded(!expanded);
  };


  const [visible, setVisible] = React.useState(false);
  const [checkedNormal, setCheckedNormal] = React.useState<boolean>(true);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <ScrollView>
     <View style={styles.container}>
    <Text style={styles.title}>Preferences</Text>
    </View>
    <View style={styles.description}>
    <List.Section title="Expandable list item">
        <List.Accordion
          left={props => <List.Icon {...props} icon="folder" />}
          title="Expandable list item"
        >
          <List.Item title="List item 1" />
          <List.Item title="List item 2" />
    <View style={styles.padding}>
          <ToggleButton
            icon="android"
            value="android"
            status={status}
            onPress={status =>
              setStatus(status === 'checked' ? 'unchecked' : 'checked')
            }
          />
        </View>
        </List.Accordion>
        <List.Accordion
          left={props => <List.Icon {...props} icon="folder" />}
          title="Start expanded"
          expanded={expanded}
          onPress={_handlePress}
        >
          <List.Item title="List item 1" />
          <ToggleButton.Row
          value={first}
          onValueChange={(value: string) => setFirst(value)}
          style={styles.padding}
        >
          <ToggleButton disabled icon="format-italic" value="italic" />
          <ToggleButton icon="format-bold" value="bold" />
          <ToggleButton icon="format-underline" value="underlined" />
          <ToggleButton icon="format-color-text" value="format-color" />
        </ToggleButton.Row>
        </List.Accordion>
      </List.Section>
      <Divider />
      <List.Section title="Expandable & multiline list item">
        <List.Accordion
          title="Expandable list item"
          description="Describes the expandable list item"
        >
          <List.Item title="List item 1" />
          <List.Item title="List item 2" />
        </List.Accordion>
      </List.Section>
      <Divider />
      <List.Section title="Expandable list with icons">
        <List.Accordion
          left={props => <List.Icon {...props} icon="star" />}
          title="Accordion item 1"
        >
          <List.Item
            left={props => <List.Icon {...props} icon="thumb-up" />}
            title="List item 1"
          />
          <List.Item
            left={props => <List.Icon {...props} icon="thumb-down" />}
            title="List item 2"
          />
        </List.Accordion>
      </List.Section>
     <Text style={styles.title}>
      Looking for
      </Text>
     <Text style={styles.title}>
   Distance 
      </Text>
     <Text style={styles.title}>
      age range
      </Text>
     <Text style={styles.title}>
      Location
      </Text>
      <List.Section>
        <List.Subheader>Custom description</List.Subheader>
        <List.Item
          left={() => (
            <Image
              style={styles.image}
            />
          )}
          right={props => <List.Icon {...props} icon="star-outline" />}
          title="List Item 1"
          description={({
            ellipsizeMode,
            color: descriptionColor,
            fontSize,
          }) => (
            <View style={[styles.container, styles.column]}>
              <Text
                numberOfLines={2}
                ellipsizeMode={ellipsizeMode}
                style={{ color: descriptionColor, fontSize }}
              >
                React Native Paper is a high-quality, standard-compliant
                Material Design library that has you covered in all major
                use-cases.
              </Text>
              <View style={[styles.container, styles.row, { paddingTop: 8 }]}>
                <Chip icon="file-pdf" onPress={() => {}}>
                  DOCS.pdf
                </Chip>
              </View>
            </View>
          )}
        />
      </List.Section>
    </View>
  </ScrollView>
  )
}

export default PreferencesScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  description: {
    padding: 10,
    paddingTop: 50,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  padding: {
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
  },
})