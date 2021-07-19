import gql from 'graphql-tag';


export const getParticipantGroupDetail = /* GraphQL */ `
  query GetParticipantGroup($id: ID!) {
    getParticipantGroup(id: $id) {
      id
      approved
      paymentId
      sessionId
      createdAt
      updatedAt
      group {
        id
        name
        zoomLink
        type
        audience
        description
        price
        length
        minParticipants
        maxParticipants
        schedule
        clinicianId
        createdAt
        updatedAt
        clinician {
          items {
            id
            approved
            firstName
            lastName
            email
            createdAt
            updatedAt
          }
          nextToken
        }
        sessions {
          items {
            id
            sessionDate
            sessionTime
            status
            type
            groupId
            clinicianId
            createdAt
            updatedAt
          }
          nextToken
        }
      }
    }
  }
`;

export const getParticipantDetail = /* GraphQL */ `
  query GetParticipant($id: ID!) {
    getParticipant(id: $id) {
      id
      groups {
        items {
          group {
            id
            name
            clinician {
              items {
                firstName
                lastName
                fullName
                phone
                group {
                  items {
                    id
                  }
                }
              }
            }
          }
          approved
          createdAt
        }
      }
    }
  }
`;

export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sessionDate
        sessionTime
        status
        type
        groupId
        group {
          id
          name
          zoomLink
          type
          description
          price
          length
          minParticipants
          maxParticipants
          schedule
          clinicianId
          clinician {
            items {
              lastName
              firstName
              credentials
              fullName
            }
          }
          participants {
            nextToken
          }
          reports {
            nextToken
          }
          tags {
            nextToken
          }
          createdAt
          updatedAt
          sessions {
            items {
              sessionDate
              sessionTime
            }
          }
        }
      }
      nextToken
    }
  }
`;

export const getParticipantMain = /* GraphQL */ `
  query GetParticipant($id: ID!) {
    getParticipant(id: $id) {
      id
      email
      phone
      bio
      paymentDetails
      firstName
      lastName
      nickName
      pronouns
      featuredImage
      city
      state
      assessment
      country
      username
      billingInformtion
      fullName
      tags {
        items {
          id
          participantId
          tagId
          createdAt
          updatedAt
          participant {
            id
            email
            phone
            bio
            paymentDetails
            firstName
            lastName
            nickName
            pronouns
            featuredImage
            city
            state
            assessment
            country
            username
            billingInformtion
            fullName
            createdAt
            updatedAt
          }
          tag {
            id
            name
            description
            createdAt
            updatedAt
          }
        }
        nextToken
      }
      createdAt
      updatedAt
      groups {
        items {
          id
          approved
          paymentId
          sessionId
          createdAt
          updatedAt
          group {
             id
             name
             zoomLink
             type
             audience
             description
             clinician {
                items {
                  id
                  approved
                  firstName
                  lastName
                  email
                  zoomLink
                  phone
                  bio
                  city
                  state
                  title
                  licenseNumber
                  stateLicenses
                  paymentDetails
                  featuredImage
                  credentials
                  username
                  groupFocus
                  billingInformtion
                  calendlyURL
                  fullName
                  reports {
                    nextToken
                  }
                  createdAt
                  updatedAt
                  group {
                    nextToken
                  }
                  sessions {
                    nextToken
                  }
                }
                nextToken
              }
             sessions{
               items {
                  id
                  sessionDate
                  sessionTime
                  status
                  type
                  groupId
                  clinicianId
               }
            }
            price
            length
            minParticipants
            maxParticipants
            schedule
            clinicianId
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;

export const getParticipant = /* GraphQL */ `
  query GetParticipant($id: ID!) {
    getParticipant(id: $id) {
      id
      username
      groups {
        items {
          id
          approved
        }
      }
      reports {
        items {
          id
          body
          status
        }
      }
    }
  }
`;

export const groupWithTag = (filter) => `
    query MyQuery {
        listTagGroups(filter: {or: ${filter}) {
            items {
                group {
                    name
                }
            }
        }
    }
`;

export const listTagGroups = /* GraphQL */ `
  query ListTagGroups(
    $filter: ModelTagGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTagGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        group {
          id
          name
          zoomLink
          type
          description
          price
          length
          schedule
          minParticipants
          maxParticipants
          clinicianId
          clinician {
            items {
              id
              firstName
              lastName
              email
              zoomLink
              calendlyURL
              phone
              bio
              city
              state
              title
              licenseNumber
              paymentDetails
              featuredImage
              credentials
              username
              groupFocus
              billingInformtion
              createdAt
              updatedAt
            }
            nextToken
          }
          participants {
            items {
              id
              approved
              createdAt
              updatedAt
            }
            nextToken
          }
          reports {
            items {
              id
              body
              status
              reason
              emergencyAttention
              contactedEmegrency
              removeUser
              type
              groupId
              participantId
              clinicianId
              createdAt
              updatedAt
            }
            nextToken
          }
          tags {
            items {
              tag {
                name
              }
            }
            nextToken
          }
          createdAt
          updatedAt
          sessions {
            items {
              id
              sessionTime
              status
              groupId
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }
    }
  }
`;

export const listGroupsCustom = (value) => gql`{
    listClinicians(filter: {or: [{fullName: {contains: "${value}"}}]}) {
        items {
          id
          group {
            items {
              sessions {
                  items {
                        id
                        sessionTime
                        status
                        groupId
                        createdAt
                        updatedAt
                    }
                    nextToken
              }
              maxParticipants
              length
              price
              schedule
              clinician {
                items {
                  featuredImage
                  firstName
                  lastName
                  calendlyURL
                  credentials
                }
              }
              tags {
                  items {
                    tag{
                      name
                    }
                  }
                  nextToken
                }
              id
              name
              type
              maxParticipants
              participants {
                  items {
                    id
                  }
                }
              price
              description
            }
          }
        }
  },
  listGroups(filter: {name: {contains: "${value}"}}) {
    items {
    sessions {
                  items {
                        id
                        sessionTime
                        status
                        groupId
                        createdAt
                        updatedAt
                    }
                    nextToken
              }
              schedule
              maxParticipants
              length
              price
      clinician {
            items {
              featuredImage
              firstName
              lastName
              calendlyURL
              credentials
            }
          }
          id
          name
          tags {
                  items {
                    tag{
                      name
                    }
                  }
                  nextToken
                }
          type
          maxParticipants
          participants {
                  items {
                    id
                  }
                }
          price
          description
        }    
  },
  listTags(filter: {name: {contains: "${value}"}}) {
    items {
      name
      groups {
        items {
          group {
          sessions {
                  items {
                        id
                        sessionTime
                        status
                        groupId
                        createdAt
                        updatedAt
                    }
                    nextToken
              }
              maxParticipants
              length
              price
              schedule
            clinician {
              items {
                featuredImage
                firstName
                lastName
                calendlyURL
                credentials
              }
            }
            tags {
                  items {
                    tag{
                      name
                    }
                  }
                  nextToken
                }
            id
            name
            type
            maxParticipants
            participants {
                  items {
                    id
                  }
                }
            price
            description
          }
        }
      }
    }
  }
}`;

export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        sessions {
          items {
            id
            sessionTime
            status
            groupId
            createdAt
            updatedAt
          }
          nextToken
        }
        maxParticipants
        length
        price
        schedule
        clinician {
          items {
            featuredImage
            firstName
            lastName
            calendlyURL
            credentials
          }
        }
        tags {
          items {
            tag {
              name
            }
          }
          nextToken
        }
        id
        name
        type
        maxParticipants
        participants {
          items {
            id
          }
        }
        price
        description
      }
      nextToken
    }
  }
`;

export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      name
      zoomLink
      type
      audience
      description
      price
      length
      minParticipants
      maxParticipants
      schedule
      clinicianId
      tags {
        items {
          id
          groupId
          tagId
          createdAt
          updatedAt
          group {
            id
            name
            zoomLink
            type
            audience
            description
            price
            length
            minParticipants
            maxParticipants
            schedule
            clinicianId
            createdAt
            updatedAt
          }
          tag {
            id
            name
            description
            createdAt
            updatedAt
          }
        }
        nextToken
      }
      createdAt
      updatedAt
      clinician {
        items {
          id
          approved
          firstName
          lastName
          email
          zoomLink
          phone
          bio
          city
          state
          title
          licenseNumber
          stateLicenses
          paymentDetails
          featuredImage
          credentials
          username
          groupFocus
          billingInformtion
          calendlyURL
          fullName
          reports {
            nextToken
          }
          createdAt
          updatedAt
          group {
            nextToken
          }
          sessions {
            nextToken
          }
        }
        nextToken
      }
      sessions {
        items {
          id
          sessionDate
          sessionTime
          status
          type
          groupId
          clinicianId
          createdAt
          updatedAt
          clinician {
            id
            approved
            firstName
            lastName
            email
            zoomLink
            phone
            bio
            city
            state
            title
            licenseNumber
            stateLicenses
            paymentDetails
            featuredImage
            credentials
            username
            groupFocus
            billingInformtion
            calendlyURL
            fullName
            createdAt
            updatedAt
          }
          group {
            id
            name
            zoomLink
            type
            audience
            description
            price
            length
            minParticipants
            maxParticipants
            schedule
            clinicianId
            createdAt
            updatedAt
          }
          participants {
            nextToken
          }
        }
        nextToken
      }
      participants {
        items {
          id
          approved
          paymentId
          createdAt
          updatedAt
          group {
            id
            name
            zoomLink
            type
            audience
            description
            price
            length
            minParticipants
            maxParticipants
            schedule
            clinicianId
            createdAt
            updatedAt
          }
          participant {
            id
            email
            phone
            bio
            paymentDetails
            firstName
            lastName
            nickName
            pronouns
            featuredImage
            city
            state
            assessment
            country
            username
            billingInformtion
            fullName
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;

export const listParticipantGroups = /* GraphQL */ `
  query ListParticipantGroups(
    $filter: ModelParticipantGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParticipantGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        approved
        group{
            id
        }
        sessionId
        createdAt
        updatedAt
      }
    }
  }
`;

export const deleteParticipantGroup = /* GraphQL */ `
  mutation DeleteParticipantGroup(
    $input: DeleteParticipantGroupInput!
    $condition: ModelParticipantGroupConditionInput
  ) {
    deleteParticipantGroup(input: $input, condition: $condition) {
      id
      approved
      paymentId
      sessionId
      createdAt
      updatedAt
      group {
        id
        name
        zoomLink
        type
        audience
        description
        price
        length
        minParticipants
        maxParticipants
        schedule
        clinicianId
        reports {
          items {
            id
            body
            status
            reason
            emergencyAttention
            contactedEmegrency
            removeUser
            type
            groupId
            participantId
            clinicianId
            createdAt
            updatedAt
          }
          nextToken
        }
        tags {
          items {
            id
            groupId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        clinician {
          items {
            id
            approved
            firstName
            lastName
            email
            zoomLink
            phone
            bio
            city
            state
            title
            licenseNumber
            stateLicenses
            paymentDetails
            featuredImage
            credentials
            username
            groupFocus
            billingInformtion
            calendlyURL
            fullName
            createdAt
            updatedAt
          }
          nextToken
        }
        sessions {
          items {
            id
            sessionDate
            sessionTime
            status
            type
            groupId
            clinicianId
            createdAt
            updatedAt
          }
          nextToken
        }
        participants {
          items {
            id
            approved
            paymentId
            sessionId
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      participant {
        id
        email
        phone
        bio
        paymentDetails
        firstName
        lastName
        nickName
        pronouns
        featuredImage
        city
        state
        assessment
        country
        username
        billingInformtion
        fullName
        reports {
          items {
            id
            body
            status
            reason
            emergencyAttention
            contactedEmegrency
            removeUser
            type
            groupId
            participantId
            clinicianId
            createdAt
            updatedAt
          }
          nextToken
        }
        tags {
          items {
            id
            participantId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        sessions {
          items {
            id
            attending
            sessionId
            participantId
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            approved
            paymentId
            sessionId
            createdAt
            updatedAt
          }
          nextToken
        }
      }
    }
  }
`;
export const createParticipantGroup = /* GraphQL */ `
  mutation CreateParticipantGroup(
    $input: CreateParticipantGroupInput!
    $condition: ModelParticipantGroupConditionInput
  ) {
    createParticipantGroup(input: $input, condition: $condition) {
      id
      approved
      paymentId
      sessionId
      createdAt
      updatedAt
      group {
        id
        name
        zoomLink
        type
        audience
        description
        price
        length
        minParticipants
        maxParticipants
        schedule
        clinicianId
        reports {
          items {
            id
            body
            status
            reason
            emergencyAttention
            contactedEmegrency
            removeUser
            type
            groupId
            participantId
            clinicianId
            createdAt
            updatedAt
          }
          nextToken
        }
        tags {
          items {
            id
            groupId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        clinician {
          items {
            id
            approved
            firstName
            lastName
            email
            zoomLink
            phone
            bio
            city
            state
            title
            licenseNumber
            stateLicenses
            paymentDetails
            featuredImage
            credentials
            username
            groupFocus
            billingInformtion
            calendlyURL
            fullName
            createdAt
            updatedAt
          }
          nextToken
        }
        sessions {
          items {
            id
            sessionDate
            sessionTime
            status
            type
            groupId
            clinicianId
            createdAt
            updatedAt
          }
          nextToken
        }
        participants {
          items {
            id
            approved
            paymentId
            sessionId
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      participant {
        id
        email
        phone
        bio
        paymentDetails
        firstName
        lastName
        nickName
        pronouns
        featuredImage
        city
        state
        assessment
        country
        username
        billingInformtion
        fullName
        reports {
          items {
            id
            body
            status
            reason
            emergencyAttention
            contactedEmegrency
            removeUser
            type
            groupId
            participantId
            clinicianId
            createdAt
            updatedAt
          }
          nextToken
        }
        tags {
          items {
            id
            participantId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        sessions {
          items {
            id
            attending
            sessionId
            participantId
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            approved
            paymentId
            sessionId
            createdAt
            updatedAt
          }
          nextToken
        }
      }
    }
  }
`;

export const updateParticipantGroup = /* GraphQL */ `
  mutation UpdateParticipantGroup(
    $input: UpdateParticipantGroupInput!
    $condition: ModelParticipantGroupConditionInput
  ) {
    updateParticipantGroup(input: $input, condition: $condition) {
      id
      approved
      paymentId
      sessionId
      createdAt
      updatedAt
      group {
        id
        name
        zoomLink
        type
        audience
        description
        price
        length
        minParticipants
        maxParticipants
        schedule
        clinicianId
        reports {
          items {
            id
            body
            status
            reason
            emergencyAttention
            contactedEmegrency
            removeUser
            type
            groupId
            participantId
            clinicianId
            createdAt
            updatedAt
          }
          nextToken
        }
        tags {
          items {
            id
            groupId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        clinician {
          items {
            id
            approved
            firstName
            lastName
            email
            zoomLink
            phone
            bio
            city
            state
            title
            licenseNumber
            stateLicenses
            paymentDetails
            featuredImage
            credentials
            username
            groupFocus
            billingInformtion
            calendlyURL
            fullName
            createdAt
            updatedAt
          }
          nextToken
        }
        sessions {
          items {
            id
            sessionDate
            sessionTime
            status
            type
            groupId
            clinicianId
            createdAt
            updatedAt
          }
          nextToken
        }
        participants {
          items {
            id
            approved
            paymentId
            sessionId
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      participant {
        id
        email
        phone
        bio
        paymentDetails
        firstName
        lastName
        nickName
        pronouns
        featuredImage
        city
        state
        assessment
        country
        username
        billingInformtion
        fullName
        reports {
          items {
            id
            body
            status
            reason
            emergencyAttention
            contactedEmegrency
            removeUser
            type
            groupId
            participantId
            clinicianId
            createdAt
            updatedAt
          }
          nextToken
        }
        tags {
          items {
            id
            participantId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        sessions {
          items {
            id
            attending
            sessionId
            participantId
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
          items {
            id
            approved
            paymentId
            sessionId
            createdAt
            updatedAt
          }
          nextToken
        }
      }
    }
  }
`;

export const listParticipantGroupss = /* GraphQL */ `
  query ListParticipantGroups(
    $filter: ModelParticipantGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParticipantGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        approved
        paymentId
        sessionId
        createdAt
        updatedAt
        group {
          id
          name
          zoomLink
          type
          audience
          description
          price
          length
          minParticipants
          maxParticipants
          schedule
          clinicianId
          reports {
            nextToken
          }
          tags {
            nextToken
          }
          createdAt
          updatedAt
          clinician {
            nextToken
          }
          sessions {
            items{
                id
                sessionDate
                sessionTime
                status
                type
                groupId
            }
          }
        }
      }
      nextToken
    }
  }
`;