import Text "mo:core/Text";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Array "mo:core/Array";
import List "mo:core/List";
import Order "mo:core/Order";

actor {
  type QuotationRequest = {
    name : Text;
    organization : Text;
    orgType : Text;
    service : Text;
    email : Text;
    description : Text;
    timestamp : Time.Time;
  };

  type Inquiry = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module QuotationRequest {
    public func compare(quotation1 : QuotationRequest, quotation2 : QuotationRequest) : Order.Order {
      Int.compare(quotation2.timestamp, quotation1.timestamp);
    };
  };

  module Inquiry {
    public func compare(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      Int.compare(inquiry2.timestamp, inquiry1.timestamp);
    };
  };

  let submissions = List.empty<QuotationRequest>();
  let inquiries = List.empty<Inquiry>();

  public shared ({ caller }) func submitQuotation(request : QuotationRequest) : async () {
    let timestampedRequest : QuotationRequest = {
      request with timestamp = Time.now();
    };
    submissions.add(timestampedRequest);
  };

  public shared ({ caller }) func submitInquiry(inquiry : Inquiry) : async () {
    let timestampedInquiry : Inquiry = {
      inquiry with timestamp = Time.now();
    };
    inquiries.add(timestampedInquiry);
  };

  public query ({ caller }) func getAllSubmissions() : async [QuotationRequest] {
    submissions.toArray().sort();
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.toArray().sort();
  };
};
