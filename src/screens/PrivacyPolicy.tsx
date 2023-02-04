import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Container, Header, Text} from '@app/components/templates';
import colors from '@app/contants/colors';

const PrivacyPolicy = () => {
  return (
    <Container flex={1} backgroundColor={colors.appBackgroundColor}>
      <Header title="Privacy Policy" />
      <Container pl={10} pr={10} pt={25} style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text align="center" color="primary" size="lg" lineHeight={24}>
            Privacy Policy
          </Text>
          <Text mt={10} lineHeight={18} color="primary" size="xs">
            Innovation Evolved (Pty) Ltd, referred to as We, us etc. bellow, is
            committed to protecting the privacy of our customers. Note that this
            Privacy Policy may change for time to time, so please check back
            periodically.
          </Text>

          <Text mt={10} color="primary" lineHeight={18} weight="medium">
            1. Information we gather from our users.
          </Text>
          <Text color="primary" lineHeight={18} mt={5} size="xs">
          We receive and store any information you enter on our website or via OAuth for Facebook, Google,
LinkedIn or Twitter, which you accept to share with these service providers. This information is not
limited to Name, Email, Mobile Number, Address etc. You can choose not to provide certain
information, but this will limit your ability for products offered on the website, or to take advantage
of some of our features for website customers. We obtain information about you when you register
or purchase a product. We also use &quot;cookie&quot; technology on our website. The cookies we use do not
reveal any personal information. We use this technology to enhance your experience and to
determine for which one of our partners, if any, referred you to our website. We also use third party
analytics tools such as Google Analytics on our website and in our software and services to obtain
non-personal, aggregate information.
          </Text>

          <Text mt={10} color="primary" lineHeight={18} weight="medium">
            2. How do we use the information we receive from you?
          </Text>
          <Text color="primary" lineHeight={18} mt={5} size="xs">
          Billing information will only be given to registered 3rd party vendors like PayPal and PayGate for
verification on payment methods and payment transactions. This will be a secure transaction
between our vendors. We will take pride in keeping your information safe and not easily assessable.
Our 3rd party vendors are reputable companies in their fields and we trust them with information
shared from our website as we are registered with them. Innovation Evolved (Pty) Ltd, () falls under
the Privacy Policy that they provide. You can have a look at their privacy policies on their web sites.
We use personal information collected from our customers and visitors to our website to provide a
superior web experience and allowing seekers of items and providers of products or services to
interact and get the items they looking for. We do not facilitate payments between seekers and
providers. All transactions between seekers and providers are done solely on their own risks. We are
not liable for any loss, damage in any form whatsoever between transactions of seekers and
providers. We also use it to provide more effective customer service, to contact customers regarding
their purchases, and to send promotional emails about our products and services that may be of
interest to them. We may also use aggregate customer behaviour to analyse our marketing
effectiveness. This allows us to further enhance the customer shopping experience.
          </Text>

          <Text mt={10} color="primary" lineHeight={18} weight="medium">
            3. With whom do we share your information?
          </Text>
          <Text color="primary" lineHeight={18} mt={5} size="xs">
          We do not share your Personally Identifiable Information with third parties, except when required
by law enforcement or judicial authorities which may occur from time to time. In this case, we will
disclose Personally Identifiable Information upon receipt of a court order or subpoena in order to
assist a law enforcement investigation. We reserve the right to report to law enforcement agencies
any activities that we in good faith believe to be unlawful. Use of our Website by children.
Innovation Evolved (Pty) Ltd does not sell products for purchase by children. If you are under 18 you
may use our website only with the accompaniment of a parent or guardian.
          </Text>

          <Text mt={10} color="primary" lineHeight={18} weight="medium">
            4. Information Collection by Our Advertisers
          </Text>
          <Text color="primary" lineHeight={18} mt={5} size="xs">
          Personally identifiable information (PII) may be collected by advertisers using The PII is provided by
consumers for purposes such as the purchase of goods and services, order shipment and
sweepstakes entry. The information collected is subject to the policies of each advertiser.
          </Text>

          <Text mt={10} color="primary" lineHeight={18} weight="medium">
            5. How to remove your personal information.
          </Text>
          <Text color="primary" lineHeight={18} mt={5} size="xs">
          By deregistering &amp; informing to remove your personal information is the preferred method in
making sure all your information is being removed from our platform. Only once you submit your
request and a confirmation is send from us. Only then is your information permanently removed.
          </Text>
          
          <Text color="primary" lineHeight={18} mt={10} size="xs">
          Innovation Evolved (Pty) Ltd . does not make any representation regarding the accuracy or suitability
of any of the information contained in those advertisements. Innovation Evolved (Pty) Ltd . does not
accept any responsibility or liability for the conduct or content of those advertisements and the
offerings made by those advertisers. Advertisements and links to other sites where goods or services
are advertised are not endorsements or recommendations by . Innovation Evolved (Pty) Ltd . of the
third-party sites, goods or services. Your access to or use of them is at your own discretion.
          </Text>

        </ScrollView>
      </Container>
    </Container>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#ffffff',
    flex: 1,
  },
});
