import { StyleSheet,ScrollView, Text, View } from 'react-native'
import React from 'react'

const ReturnRefundPolicyScreen = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>Return Refund Policy</Text>
      <View>
        <Text style={styles.description}>
        If paying by debit card, or credit card, you give us permission to automatically charge your credit or debit card as payment for your Program, Product or Service without any additional authorization, for which you will receive an electronic receipt.

In the event that payment is not received by the date due, you will have a three (3) day grace period to make the payment otherwise the Program, Product or Services will not continue and we reserve the right to cease your access immediately and permanently.

If you fail to make payment in a timely manner in accordance with these Terms of Use or voluntarily decide to withdraw from our Programs, Products or Services at any time or for any reason whatsoever, you still will remain fully responsible for the full cost of the Programs, Products and/or Services.

All information obtained during your purchase or transaction for our Programs, Products and Services and all of the information that you give as part of the transaction, such as your name, address, method of payment, credit card number, and billing information, may be collected by both us and our payment processing company.

You agree to only purchase goods or services for yourself or for another person for whom you are legally permitted to do so or for whom you have obtained the express consent to provide their name, address, method of payment, credit card number, and billing information.

You agree to be financially responsible for all purchases made by you or someone acting on your behalf. You agree to use our Programs, Products, Services, and Program Materials for legitimate, non-commercial purposes only and not for speculative, false, fraudulent, or illegal purposes.

Since we have a clear and explicit Refund Policy in these Terms of Use that you have agreed to prior to completing the purchase of any of our Programs, Products, or Services, we do not tolerate or accept any type of chargeback threat or actual chargeback from your credit card company. In the event that a chargeback is placed on a purchase or we receive a chargeback threat during or after your purchase, we reserve the right to report the incident to all three credit reporting agencies or to any other entity for inclusion in any chargeback database or for listing as a delinquent account which could have a negative impact on your credit report score. The information reported will include your name, email address, order date, order amount, and billing address. Chargeback abusers wishing to be removed from the database shall make the payment for the amount of the chargeback.

If you make a purchase from one of our affiliates, or any other individual or company through a link provided on or through our Programs, Products or Services (“Merchant”), all information obtained during your purchase or transaction and all of the information that you give as part of the transaction, such as your credit card number and contact information, may be collected by the merchant and their payment processing company as well. Your participation, correspondence or business dealings with any affiliate, individual or company on or through our Programs, Products or Services, and all purchase terms, conditions, representations or warranties associated with payment, refunds, and/or delivery related to your purchase, are solely between you and the Merchant. You agree that we shall not be responsible or liable for any loss, damage, refunds, or other matters of any sort that incurred as the result of such dealings with a Merchant.

Payment processing companies and Merchants may have privacy and data collection practices that are different from ours. We have no responsibility or liability for these independent policies of the payment processing companies and Merchants. In addition, when you make certain purchases through our Programs, Products or Services, you may be subject to the additional terms and conditions of a payment processing company, Merchant or us that specifically apply to your purchase. For more information regarding a Merchant and its terms and conditions that may apply, visit that merchant’s Website and click on its information links or contact the Merchant directly.

You release us, our affiliates, our payment processing company, and Merchants from any damages that you incur, and agree not to assert any claims against us or them, arising from your purchase through or use of our Website or its Content.

        </Text>
      </View>
      </ScrollView>
    </View>
  )
}

export default ReturnRefundPolicyScreen

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