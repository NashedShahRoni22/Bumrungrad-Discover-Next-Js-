export const metadata = {
  title: "Legal Info | Bumrungrad International Terms & Conditions",
  description:
    "Review the terms and conditions of using Bumrungrad International’s services, ensuring you’re informed every step of the way.",
};

import React from "react";
import Link from "next/link";

export default function TermsConditions() {
  return (
    <div className="p-5 my-5 md:container md:mx-auto ">
      <h5 className="text-3xl">Terms and Conditions</h5>
      <p className="text-justify mt-4">
        Thank you for choosing Bumrungrad Discover as your trusted source for
        healthcare guidance and travel assistance. These Terms and Conditions
        serve to guide your journey on our website and outline the terms of
        engagement with our services. By accessing or utilizing our{" "}
        <Link
          className="font-semibold text-blue underline"
          href="https://discoverinternationalmedicalservice.com/"
        >
          Bumrungrad International Hospital
        </Link>{" "}
        , you affirm your understanding and acceptance of these Terms and
        Conditions along with our Privacy Policy. Should any aspect of these
        terms not align with your expectations, we kindly ask that you refrain
        from using our website or services.
      </p>
      <h5 className="text-3xl mt-8">Use of Services</h5>
      <p className="text-justify mt-4">
        Medical Services: Bumrungrad Discover serves as the official referral
        office of Bangladesh for Bumrungrad International Hospital. We provide
        guidance and assistance in accessing the best healthcare{" "}
        <Link
          className="font-semibold text-blue underline"
          href="https://discoverinternationalmedicalservice.com/our-services"
        >
          Our Service
        </Link>{" "}
        in Thailand, particularly in Bangkok. Travel Assistance: In addition to
        medical services, we offer travel guides and assistance for visa
        processing, air tickets, air ambulance services, airport pickups, and
        accommodations related to healthcare treatment in Bangkok. Appointment
        Scheduling: We facilitate doctor appointments at Bumrungrad
        International Hospital and assist in ordering medications and arranging
        telemedicine consultations.
      </p>
      <h5 className="text-3xl mt-8">User Responsibilities</h5>
      <p className="text-justify mt-4">
        Accuracy of Information: You agree to provide accurate and complete
        information when using our services, particularly when scheduling
        medical appointments or making travel arrangements. Compliance with
        Laws: You agree to comply with all applicable laws and regulations when
        using our website and services, including but not limited to healthcare
        and travel regulations.
      </p>
      <h5 className="text-3xl mt-8">Payment and Fees</h5>
      <p className="text-justify mt-4">
        Payment Obligations: Some of our services may require payment, and you
        agree to pay any applicable fees in a timely manner. Currency and
        Pricing: All prices and fees are listed in US dollars (USD) unless
        otherwise specified. We reserve the right to change pricing at any time
        without prior notice. Contact our representative to know the any
        <Link
          className="font-semibold text-blue underline ml-2"
          href="https://discoverinternationalmedicalservice.com/packages"
        >
          Packages
        </Link>{" "}
        price.
      </p>
      <h5 className="text-3xl mt-8">Intellectual Property</h5>
      <p className="text-justify mt-4">
        Ownership: All content and materials on our website, including but not
        limited to text, images, logos, and trademarks, are the property of
        Bumrungrad Discover or its licensors and are protected by copyright and
        other intellectual property laws. Use Restrictions: You may not
        reproduce, distribute, modify, or otherwise use any content from our
        website without our prior written consent.
      </p>
      <h5 className="text-3xl mt-8">Limitation of Liability</h5>
      <p className="text-justify mt-4">
        Disclaimer: Bumrungrad Discover provides information and assistance
        services for healthcare, medical advice and travel purposes only. We do
        not provide diagnosis or treatment. No Warranty: We make no warranties
        or representations about the accuracy or reliability of the information
        provided on our website.
      </p>
      <h5 className="text-3xl mt-8">Indemnification</h5>
      <p className="text-justify mt-4">
        You agree to indemnify and hold Bumrungrad Discover and its affiliates,
        officers, directors, employees, and agents harmless from any claims,
        damages, liabilities, and expenses arising out of your use of our
        website or services.
      </p>
      <h5 className="text-3xl mt-8">Governing Law</h5>
      <p className="text-justify mt-4">
        These Terms and Conditions shall be governed by and construed in
        accordance with the laws of Bangladesh. Any disputes arising under these
        terms shall be subject to the exclusive jurisdiction of the courts in
        Bangladesh.
      </p>

      <h5 className="text-3xl mt-8">Contact Us</h5>
      <p className="text-justify mt-4">
        If you have any questions or concerns about these Terms and Conditions,
        please{" "}
        <Link
          className="font-semibold text-blue underline ml-2"
          href="https://discoverinternationalmedicalservice.com/contact-us"
        >
          Contact
        </Link>{" "}
        us at{" "}
        <span className="text-blue font-bold">
          support@discoverinternationalmedicalservice.com
        </span>
      </p>
    </div>
  );
}
