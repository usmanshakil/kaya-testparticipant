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