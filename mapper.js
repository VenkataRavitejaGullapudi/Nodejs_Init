xml = `<?xml version="1.0" encoding="UTF-8"?>
<ProcessCustomerPartyMaster xmlns="http://schema.infor.com/InforOAGIS/2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" releaseID="9.2" versionID="2.12.x" xsi:schemaLocation="http://schema.infor.com/InforOAGIS/2 http://schema.infor.com/2.12.x/InforOAGIS/BODs/ProcessCustomerPartyMaster.xsd">
	<ApplicationArea>
		<Sender>
			<LogicalID>lid://infor.ims.salesforceims</LogicalID>
			<ComponentID>erp</ComponentID>
			<ConfirmationCode>OnError</ConfirmationCode>
		</Sender>
		<CreationDateTime>3/3/2021, 6:08 AM</CreationDateTime>
		<BODID>0014W00002F5D5ZQAV:ExternalIdNotPresent</BODID>
	</ApplicationArea>
	<DataArea>
		<Process>
			<TenantID>SXEADEQADEV_DEV</TenantID>
			<AccountingEntityID>2000</AccountingEntityID>
			<LocationID />
			<ActionCriteria>
				<ActionExpression actionCode="Add" />
			</ActionCriteria>
		</Process>
		<CustomerPartyMaster>
			<PartyIDs>
				<ID>
				</ID>
			</PartyIDs>
			<Name>SFDCToCSDCust_smrn</Name>
			<CurrencyCode>USD</CurrencyCode>
			<Status>
				<Code>Open</Code>
			</Status>
			<PaymentTermID>n30</PaymentTermID>
			<SalesPersonReference>
				<IDs>
					<ID>
					</ID>
				</IDs>
				<Name languageID="en-US">integration.sfdc.crm@csdsf.com</Name>
				<SalesPersonRole>External</SalesPersonRole>
			</SalesPersonReference>
			<SalesPersonReference>
				<IDs>
					<ID>
					</ID>
				</IDs>
				<Name languageID="en-US">integration.sfdc.crm@csdsf.com</Name>
				<SalesPersonRole>Internal</SalesPersonRole>
			</SalesPersonReference>
			<LastModificationDateTime>3/3/2021, 6:08 AM</LastModificationDateTime>
			<Location>
				<Address type="Text">
					<AttentionOfName>SFDCToCSDCust_smrn</AttentionOfName>
					<AddressLine sequence="1">50552 Road 632</AddressLine>
					<AddressLine sequence="2">
					</AddressLine>
					<AddressLine sequence="3">
					</AddressLine>
					<AddressLine sequence="4">
					</AddressLine>
					<AddressLine sequence="5">
					</AddressLine>
					<AddressLine sequence="6">
					</AddressLine>
					<CityName>
					</CityName>
					<CountrySubDivisionCode>CA</CountrySubDivisionCode>
					<CountryCode>US</CountryCode>
					<PostalCode>93644</PostalCode>
				</Address>
				<Address type="Discrete">
					<AttentionOfName>SFDCToCSDCust_smrn</AttentionOfName>
					<BuildingNumber/>
					<BuildingName/>
					<StreetName>
					</StreetName>
					<Unit/>
					<Floor/>
					<PostOfficeBox/>
					<CityName>Oakhurst</CityName>
					<CountrySubDivisionCode>CA</CountrySubDivisionCode>
					<CountryCode>US</CountryCode>
					<PostalCode>93644</PostalCode>
					<Preference>
						<Indicator>true</Indicator>
					</Preference>
				</Address>
			</Location>
			<Communication preferredIndicator="true" sequence="1">
				<ChannelCode>Phone</ChannelCode>
				<UseCode>Office</UseCode>
				<DialNumber>5122229690</DialNumber>
			</Communication>
			<Communication>
				<ChannelCode>Web Site</ChannelCode>
				<UseCode>Office</UseCode>
				<URI>
				</URI>
			</Communication>
			<Communication>
				<ChannelCode>Phone</ChannelCode>
				<UseCode>Fax</UseCode>
				<DialNumber>1234</DialNumber>
			</Communication>
		</CustomerPartyMaster>
	</DataArea>
</ProcessCustomerPartyMaster>`

const payload = {
    id: 5036592791740,
    email: 'infor@infor.com',
    accepts_marketing: false,
    created_at: '2021-03-03T19:09:06+05:30',
    updated_at: '2021-03-03T19:09:06+05:30',
    first_name: 'First nam',
    last_name: 'Last',
    orders_count: 0,
    state: 'disabled',
    total_spent: '0.00',
    last_order_id: null,
    note: 'Notes',
    verified_email: true,
    multipass_identifier: null,
    tax_exempt: false,
    phone: '+919567899768',
    tags: 'Tags, Tags2',
    last_order_name: null,
    currency: 'INR',
    addresses: [[Object]],
    accepts_marketing_updated_at: '2021-03-03T19:09:06+05:30',
    marketing_opt_in_level: null,
    admin_graphql_api_id: 'gid://shopify/Customer/5036592791740',
    default_address: {
        id: 6202108117180,
        customer_id: 5036592791740,
        first_name: 'add first',
        last_name: 'add last',
        company: 'infor',
        address1: 'address',
        address2: 'aprt',
        city: 'Hyderabad',
        province: 'Andhra Pradesh',
        country: 'India',
        zip: '3422311',
        phone: '+918787878787',
        name: 'add first add last',
        province_code: 'AP',
        country_code: 'IN',
        country_name: 'India',
        default: true
    }
}

var convert = require('xml-js');
var ReferenceObj = {}
ReferenceObj = convert.xml2json(xml, { compact: false });
console.log(ReferenceObj)


