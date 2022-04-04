import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CookiesPolicyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cookies Policy</Text>
      <View>
        <Text style={styles.description}>
        Here are our top 10 tips to stay safe on social media:
Use a strong password.  The longer it is, the more secure it will be.
Use a different password for each of your social media accounts.
Set up your security answers.  This option is available for most social media sites.
If you have social media apps on your phone, be sure to password protect your device.
Be selective with friend requests. If you don’t know the person, don’t accept their request.  It could be a fake account.
Click links with caution.  Social media accounts are regularly hacked.  Look out for language or content that does not sound like something your friend would post.
Be careful about what you share. Don’t reveal sensitive personal information ie: home address, financial information, phone number.  The more you post the easier it is to have your identity stolen.
Become familiar with the privacy policies of the social media channels you use and customize your privacy settings to control who sees what.
Protect your computer by installing antivirus software to safeguard.  Also ensure that your browser, operating system, and software are kept up to date.
Remember to log off when you’re done.
        </Text>
      </View>
    </View>
  )
}

export default CookiesPolicyScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
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
  },
})