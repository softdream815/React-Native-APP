import React from 'react';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Modal, Container, Text} from '@app/components/templates';
import Icon from 'react-native-vector-icons/Ionicons';

const TOCModal = ({show, onClose}) => (
  <Modal
    visible={show}
    contentStyle={{
      flex: 1,
      marginHorizontal: -20,
      marginVertical: -20,
      paddingHorizontal: 10,
    }}>
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container flex={1} pt={20}>
          <Container mb={20}>
            <Text
              align="center"
              weight="medium"
              color="primary"
              size="md"
              lineHeight={24}>
              Terms and Conditions
            </Text>
            <Text
              align="center"
              weight="medium"
              color="primary"
              size="md"
              lineHeight={24}>
              Item Provider
            </Text>
          </Container>
          <Text color="primary" lineHeight={18}>
            In using this mobile app you are deemed to have read and agreed to the following terms and conditions:
          </Text>
          <Text size="xs" mt={10} lineHeight={14}>
          The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any
or all Agreements: &quot;Client&quot;, “You”, “Item Provider”, “Registered business” and “Your” refers to you, the person
accessing this mobile app and accepting the Company’s terms and conditions. &quot;The Company&quot;, “Ourselves”, “We”
and &quot;Us&quot;, refers to our Company operating under Innovation Evolved (Pty) Ltd. “Party”, “Parties”, , Innovation
Evolved (Pty) Ltd , or “Us”, refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to
the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the
Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the
express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services/products, in
accordance with and subject to, prevailing the South African Law. Any use of the above terminology or other words in
the singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to
same.
          </Text>

          <Text color="primary" lineHeight={18} weight="medium" mt={10}>
            Privacy Statement
          </Text>
          <Text size="xs" mt={10} lineHeight={14}>
          We are committed to protecting your privacy. Authorized employees within the company on a need to know basis
only use any information collected from individual customers. We constantly review our systems and data to ensure
the best possible service to our customers.
          </Text>

          <Text color="primary" lineHeight={18} weight="medium" mt={10}>
            Confidentiality
          </Text>
          <Text size="xs" mt={10} lineHeight={14}>
          We take the highest precautions to keep your info from malicious perpetrators. Due to the nature of our services we
provide, your information is easily obtainable from registered individuals. We make it as easy as possible for
individuals to get hold of you to seek the requested item.
Any information concerning the Client and their respective Client Records may be passed to third parties. However,
Client records are regarded as confidential and therefore will not be divulged to any third party, other than our
manufacturer/supplier(s) and if legally required to do so to the appropriate authorities. Clients have the right to
request sight of, and copies of any and all Client Records we keep, on the proviso that we are given reasonable
notice of such a request. Clients are requested to retain copies of any literature issued in relation to the provision of
our services. Where appropriate, we shall issue Client’s with appropriate written information, handouts or copies of
records as part of an agreed contract, for the benefit of both parties.
          </Text>
          <Text size="xs" mt={10} lineHeight={14} weight="medium" color="primary">
          We will not sell, share, or rent your personal information to any third party or use your e-mail address for
unsolicited mail. Any emails sent by will only be in connection with the provision of agreed services and
products.
          </Text>

          <Text color="primary" lineHeight={18} weight="medium" mt={10}>
            Disclaimer {'\n'}
            Exclusions and Limitations
          </Text>
          <Text size="xs" mt={5} lineHeight={14}>
          The information on this web site is provided on an &quot;as is&quot; basis. To the fullest extent permitted by law, this Company: {'\n'}
          {'\u2022'} excludes all representations and warranties relating to this mobile app and its contents or which is or
may be provided by any affiliates or any other third party, including in relation to any inaccuracies or
omissions in this mobile app and/or the Company’s literature; and {'\n'}
{'\u2022'} excludes all liability for damages arising out of or in connection with your use of this mobile app. This
includes, without limitation, direct loss, loss of business or profits (whether or not the loss of such profits
was foreseeable, arose in the normal course of things or you have advised this Company of the possibility
of such potential loss), damage caused to your computer, computer software, systems and programs and
the data thereon or any other direct or indirect, consequential and incidental damages. {'\n'}
{'\n'}
This Company does not however exclude liability for death or personal injury caused by its negligence. The above
exclusions and limitations apply only to the extent permitted by law. None of your statutory rights as a consumer are
affected.
          </Text>

          <Text color="primary" lineHeight={18} weight="medium" mt={10}>
            Payment
          </Text>
          <Text size="xs" mt={5} lineHeight={14}>
          All major Credit/Debit Cards, EFT Transfer and PayPal are all acceptable methods of payment. Due to the nature of
our services provided. We charge businesses registered with us on a pro rata monthly basis. Our Terms are payment
in full when a package is selected or on registration. All services remain the property of the Company. Monies that
remain outstanding by the due date will suspend your services and you will not be included in the packages you are
registered for. You will only be reassigned to your package as active once the rate on the outstanding balance until
such time as the balance is paid in full and final settlement. We reserve the right to suspend your service if any
money or payment is outstanding. We reserve the right to seek recovery of any monies remaining unpaid and
suspension of service or access from the date of invoice via collection Agencies and/or through the Small Claims
Court in the event that the outstanding balance. In such circumstances, you shall be liable for any and all additional
administrative and/or court costs. {'\n'}{'\n'}
We reserve the right to terminate the arrangement and, if agreed to, we shall reactivate you. Consequently, all
bookings and/or transactions and agreements entered into will cease with immediate effect until such time as any
and all outstanding monies are recovered in full.
          </Text>

          <Text color="primary" lineHeight={18} weight="medium" mt={10}>
            Cancellation Policy
          </Text>
          <Text size="xs" mt={5} lineHeight={14}>
          You can cancel your policy by unsubscribing from the mobile app. You will forfeit all/any services provided on
cancellation. No refunds are applicable on all cancellations. Due to the nature of our business you are charged a fee
for an entire month being the start and end of a month. We do not charge you on a day basis so monies cannot be
refunded for the days remaining upon cancellation. Please provide a 30 day cancellation notice. This is required for
our third party providers PayPal and PayGate to stop all debit orders on your account.
          </Text>

          <Text color="primary" lineHeight={18} weight="medium" mt={10}>
            Termination of Agreements and Refunds Policy
          </Text>
          <Text size="xs" mt={5} lineHeight={14}>
          Both the Client and ourselves have the right to terminate any Services Agreement for any reason, including the
ending of services that are already underway. No refunds shall be offered, where a Service is deemed to have begun
and is, for all intents and purposes, underway. Any monies that have been paid to us which constitute payment in
respect of the provision of unused Services, shall be refunded.
          </Text>

          <Text color="primary" lineHeight={18} weight="medium" mt={10}>
            Availability
          </Text>
          <Text size="xs" mt={5} lineHeight={14}>
          Unless otherwise stated, the services featured on this mobile app are only available within South Africa. All
advertising is intended solely for the South African market. You are solely responsible for evaluating the fitness for a
particular purpose of any downloads, programs and text available through this site. Redistribution or republication of
any part of this site, Intellectual property or its content is prohibited, including such by framing or other similar or any
other means, without the express written consent of the Company. The Company does not warrant that the service
from this site will be uninterrupted, timely or error free, although it is provided to the best ability. By using this service
you thereby indemnify this Company, its employees, agents and affiliates against any loss or damage, in whatever
manner, howsoever caused.
          </Text>
          <Text color="primary" lineHeight={18} weight="medium" mt={10}>
            Cookies
          </Text>
          <Text size="xs" mt={5} lineHeight={14}>
          Like most interactive web sites this Company’s mobile app [or ISP] uses cookies to enable us to retrieve user details
for each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for
those people visiting. Some of our affiliate partners may also use cookies.
          </Text>
          <Text color="primary" lineHeight={18} weight="medium" mt={10}>
            Links to this mobile app
          </Text>
          <Text size="xs" mt={5} lineHeight={14}>
          You may not create a link to any page of this mobile app without our prior written consent. If you do create a link to a
page of this mobile app you do so at your own risk and the exclusions and limitations set out above will apply to your
use of this mobile app by linking to it.
          </Text>
          <Text color="primary" lineHeight={18} weight="medium" mt={10}>
            Links from this mobile app
          </Text>
          <Text size="xs" mt={5} lineHeight={14}>
          We do not monitor or review the content of other party’s mobile apps which are linked to from this mobile app.
Opinions expressed or material appearing on such mobile apps are not necessarily shared or endorsed by us and
should not be regarded as the publisher of such opinions or material. Please be aware that we are not responsible for
the privacy practices, or content, of these sites. We encourage our users to be aware when they leave our site &amp; to
read the privacy statements of these sites. You should evaluate the security and trustworthiness of any other site
connected to this site or accessed through this site yourself, before disclosing any personal information to them. This
Company will not accept any responsibility for any loss or damage in whatever manner, howsoever caused, resulting
from your disclosure to third parties of personal information.
          </Text>
          <Text color="primary" lineHeight={18} weight="medium" mt={10}>
            Copyright Notice
          </Text>
          <Text size="xs" mt={5} lineHeight={14}>
          Copyright and other relevant intellectual property rights exist on all text relating to the Company’s services and the
full content of this mobile app. No part of this mobile app or services rendered including intellectual property can
be duplicated, copied or reengineered. Innovation Evolved (Pty) Ltd owns all content and intellectual property of. {'\n\n'}
This Company’s logo is a registered trademark of Innovation Evolved (Pty) Ltd in South Africa and other countries.
The brand names and specific services of this Company featured on this web site are trade marked.
          </Text>
          
          <Text color="primary" lineHeight={18} weight="medium" mt={10}>
            Communication
          </Text>
          <Text size="xs" mt={5} lineHeight={14}>
          We have several different e-mail addresses for different queries. These, &amp; other contact information, can be found on
our Contact Us link on our mobile app or via Company literature or via the Company’s stated telephone, facsimile or
mobile telephone numbers. {'\n\n'}
This company is registered in South Africa, Company Number 2012/017892/07.
          </Text>

          <Text color="primary" lineHeight={18} weight="medium" mt={10}>
            Force Majeure
          </Text>
          <Text size="xs" mt={5} lineHeight={14}>
          Neither party shall be liable to the other for any failure to perform any obligation under any Agreement which is due to
an event beyond the control of such party including but not limited to any Act of God, terrorism, war, Political
insurgence, insurrection, riot, civil unrest, act of civil or military authority, uprising, earthquake, flood or any other
natural or man made eventuality outside of our control, which causes the termination of an agreement or contract
entered into, nor which could have been reasonably foreseen. Any Party affected by such event shall forthwith inform
the other Party of the same and shall use all reasonable endeavours to comply with the terms and conditions of any
Agreement contained herein.
          </Text>
          <Text color="primary" lineHeight={18} weight="medium" mt={10}>
            Waiver
          </Text>
          <Text size="xs" mt={5} lineHeight={14}>
          Failure of either Party to insist upon strict performance of any provision of this or any Agreement or the failure of
either Party to exercise any right or remedy to which it, he or they are entitled hereunder shall not constitute a waiver
thereof and shall not cause a diminution of the obligations under this or any Agreement. No waiver of any of the
provisions of this or any Agreement shall be effective unless it is expressly stated to be such and signed by both
Parties.
          </Text>
          <Text color="primary" lineHeight={18} weight="medium" mt={10}>
            General
          </Text>
          <Text size="xs" mt={5} lineHeight={14}>
          By accessing this mobile app and using our services you consent to these terms and conditions in all disputes
arising out of such access. If any of these terms are deemed invalid or unenforceable for any reason (including, but
not limited to the exclusions and limitations set out above), then the invalid or unenforceable provision will be
severed from these terms and the remaining terms will continue to apply. Failure of the Company to enforce any of
the provisions set out in these Terms and Conditions and any Agreement, or failure to exercise any option to
terminate, shall not be construed as waiver of such provisions and shall not affect the validity of these Terms and
Conditions or of any Agreement or any part thereof, or the right thereafter to enforce each and every provision.
These Terms and Conditions shall not be amended, modified, varied or supplemented except in writing and signed
by duly authorised representatives of the Company.
          </Text>

          <Text color="primary" lineHeight={18} weight="medium" mt={10}>
            Notification of Changes
          </Text>
          <Text size="xs" mt={5} lineHeight={14}>
          The Company reserves the right to change these conditions from time to time as it sees fit and your continued use of
the site will signify your acceptance of any adjustment to these terms. If there are any changes to our privacy policy,
we will announce that these changes have been made on our home page and on other key pages on our site. If there
are any changes in how we use our site customers’ Personally Identifiable Information, notification by e-mail or postal
mail will be made to those affected by this change. Any changes to our privacy policy will be posted on our web site
30 days prior to these changes taking place. You are therefore advised to re-read this statement on a regular basis
          </Text>

          <Text size="xs" mt={10} lineHeight={14} color="primary" weight='medium'>
          These terms and conditions form part of the Agreement between the Client and ourselves. Your accessing of
this mobile app and/or undertaking of a booking or Agreement indicates your understanding, agreement to
and acceptance, of the Disclaimer Notice and the full Terms and Conditions contained herein. Your statutory
Consumer Rights are unaffected.
          </Text>

          <Text align="right" mt={5} mb={30} color="primary" size="xs">
            © Innovation Evolved (Pty) Ltd All Rights Reserved
          </Text>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="close" size={24} />
          </TouchableOpacity>
        </Container>
      </ScrollView>
    </SafeAreaView>
  </Modal>
);

export default TOCModal;

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  }
});
