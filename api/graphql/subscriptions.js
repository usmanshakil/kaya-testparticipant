/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateReport = /* GraphQL */ `
  subscription OnCreateReport {
    onCreateReport {
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
        createdAt
        updatedAt
        group {
          items {
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
export const onUpdateReport = /* GraphQL */ `
  subscription OnUpdateReport {
    onUpdateReport {
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
        createdAt
        updatedAt
        group {
          items {
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
export const onDeleteReport = /* GraphQL */ `
  subscription OnDeleteReport {
    onDeleteReport {
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
        createdAt
        updatedAt
        group {
          items {
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
export const onCreateTagParticipant = /* GraphQL */ `
  subscription OnCreateTagParticipant {
    onCreateTagParticipant {
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
      tag {
        id
        name
        description
        participants {
          items {
            id
            participantId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
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
      }
    }
  }
`;
export const onUpdateTagParticipant = /* GraphQL */ `
  subscription OnUpdateTagParticipant {
    onUpdateTagParticipant {
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
      tag {
        id
        name
        description
        participants {
          items {
            id
            participantId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
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
      }
    }
  }
`;
export const onDeleteTagParticipant = /* GraphQL */ `
  subscription OnDeleteTagParticipant {
    onDeleteTagParticipant {
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
      tag {
        id
        name
        description
        participants {
          items {
            id
            participantId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
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
      }
    }
  }
`;
export const onCreateTagGroup = /* GraphQL */ `
  subscription OnCreateTagGroup {
    onCreateTagGroup {
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
      tag {
        id
        name
        description
        participants {
          items {
            id
            participantId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
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
      }
    }
  }
`;
export const onUpdateTagGroup = /* GraphQL */ `
  subscription OnUpdateTagGroup {
    onUpdateTagGroup {
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
      tag {
        id
        name
        description
        participants {
          items {
            id
            participantId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
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
      }
    }
  }
`;
export const onDeleteTagGroup = /* GraphQL */ `
  subscription OnDeleteTagGroup {
    onDeleteTagGroup {
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
      tag {
        id
        name
        description
        participants {
          items {
            id
            participantId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        groups {
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
      }
    }
  }
`;
export const onCreateClinician = /* GraphQL */ `
  subscription OnCreateClinician {
    onCreateClinician {
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
      createdAt
      updatedAt
      group {
        items {
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
            nextToken
          }
          participants {
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
    }
  }
`;
export const onUpdateClinician = /* GraphQL */ `
  subscription OnUpdateClinician {
    onUpdateClinician {
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
      createdAt
      updatedAt
      group {
        items {
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
            nextToken
          }
          participants {
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
    }
  }
`;
export const onDeleteClinician = /* GraphQL */ `
  subscription OnDeleteClinician {
    onDeleteClinician {
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
      createdAt
      updatedAt
      group {
        items {
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
            nextToken
          }
          participants {
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
    }
  }
`;
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
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
          payment {
            id
            stripeId
            amount
            type
            groupId
            participantId
            clinicianId
            payoutId
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
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
          payment {
            id
            stripeId
            amount
            type
            groupId
            participantId
            clinicianId
            payoutId
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
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
          payment {
            id
            stripeId
            amount
            type
            groupId
            participantId
            clinicianId
            payoutId
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession {
    onCreateSession {
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
        createdAt
        updatedAt
        group {
          items {
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
      participants {
        items {
          id
          attending
          sessionId
          participantId
          createdAt
          updatedAt
          session {
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
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession {
    onUpdateSession {
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
        createdAt
        updatedAt
        group {
          items {
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
      participants {
        items {
          id
          attending
          sessionId
          participantId
          createdAt
          updatedAt
          session {
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
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession {
    onDeleteSession {
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
        createdAt
        updatedAt
        group {
          items {
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
      participants {
        items {
          id
          attending
          sessionId
          participantId
          createdAt
          updatedAt
          session {
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
export const onCreateParticipant = /* GraphQL */ `
  subscription OnCreateParticipant {
    onCreateParticipant {
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
      sessions {
        items {
          id
          attending
          sessionId
          participantId
          createdAt
          updatedAt
          session {
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
          payment {
            id
            stripeId
            amount
            type
            groupId
            participantId
            clinicianId
            payoutId
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateParticipant = /* GraphQL */ `
  subscription OnUpdateParticipant {
    onUpdateParticipant {
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
      sessions {
        items {
          id
          attending
          sessionId
          participantId
          createdAt
          updatedAt
          session {
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
          payment {
            id
            stripeId
            amount
            type
            groupId
            participantId
            clinicianId
            payoutId
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteParticipant = /* GraphQL */ `
  subscription OnDeleteParticipant {
    onDeleteParticipant {
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
      sessions {
        items {
          id
          attending
          sessionId
          participantId
          createdAt
          updatedAt
          session {
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
          payment {
            id
            stripeId
            amount
            type
            groupId
            participantId
            clinicianId
            payoutId
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateParticipantSession = /* GraphQL */ `
  subscription OnCreateParticipantSession {
    onCreateParticipantSession {
      id
      attending
      sessionId
      participantId
      createdAt
      updatedAt
      session {
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
            nextToken
          }
          participants {
            nextToken
          }
        }
        participants {
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
export const onUpdateParticipantSession = /* GraphQL */ `
  subscription OnUpdateParticipantSession {
    onUpdateParticipantSession {
      id
      attending
      sessionId
      participantId
      createdAt
      updatedAt
      session {
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
            nextToken
          }
          participants {
            nextToken
          }
        }
        participants {
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
export const onDeleteParticipantSession = /* GraphQL */ `
  subscription OnDeleteParticipantSession {
    onDeleteParticipantSession {
      id
      attending
      sessionId
      participantId
      createdAt
      updatedAt
      session {
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
            nextToken
          }
          participants {
            nextToken
          }
        }
        participants {
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
export const onCreateParticipantGroup = /* GraphQL */ `
  subscription OnCreateParticipantGroup {
    onCreateParticipantGroup {
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
      payment {
        id
        stripeId
        amount
        type
        groupId
        participantId
        clinicianId
        payoutId
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
            nextToken
          }
          participants {
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
            nextToken
          }
          tags {
            nextToken
          }
          createdAt
          updatedAt
          sessions {
            nextToken
          }
          groups {
            nextToken
          }
        }
        payout {
          id
          stripePayoutId
          amount
          clinicianId
          groupId
          status
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
          payments {
            nextToken
          }
        }
      }
    }
  }
`;
export const onUpdateParticipantGroup = /* GraphQL */ `
  subscription OnUpdateParticipantGroup {
    onUpdateParticipantGroup {
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
      payment {
        id
        stripeId
        amount
        type
        groupId
        participantId
        clinicianId
        payoutId
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
            nextToken
          }
          participants {
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
            nextToken
          }
          tags {
            nextToken
          }
          createdAt
          updatedAt
          sessions {
            nextToken
          }
          groups {
            nextToken
          }
        }
        payout {
          id
          stripePayoutId
          amount
          clinicianId
          groupId
          status
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
          payments {
            nextToken
          }
        }
      }
    }
  }
`;
export const onDeleteParticipantGroup = /* GraphQL */ `
  subscription OnDeleteParticipantGroup {
    onDeleteParticipantGroup {
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
      payment {
        id
        stripeId
        amount
        type
        groupId
        participantId
        clinicianId
        payoutId
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
            nextToken
          }
          participants {
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
            nextToken
          }
          tags {
            nextToken
          }
          createdAt
          updatedAt
          sessions {
            nextToken
          }
          groups {
            nextToken
          }
        }
        payout {
          id
          stripePayoutId
          amount
          clinicianId
          groupId
          status
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
          payments {
            nextToken
          }
        }
      }
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
      id
      name
      description
      participants {
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
      groups {
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
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
      id
      name
      description
      participants {
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
      groups {
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
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
      id
      name
      description
      participants {
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
      groups {
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
    }
  }
`;
export const onCreatePayments = /* GraphQL */ `
  subscription OnCreatePayments {
    onCreatePayments {
      id
      stripeId
      amount
      type
      groupId
      participantId
      clinicianId
      payoutId
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
        createdAt
        updatedAt
        group {
          items {
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
      payout {
        id
        stripePayoutId
        amount
        clinicianId
        groupId
        status
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
            nextToken
          }
          participants {
            nextToken
          }
        }
        payments {
          items {
            id
            stripeId
            amount
            type
            groupId
            participantId
            clinicianId
            payoutId
            createdAt
            updatedAt
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdatePayments = /* GraphQL */ `
  subscription OnUpdatePayments {
    onUpdatePayments {
      id
      stripeId
      amount
      type
      groupId
      participantId
      clinicianId
      payoutId
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
        createdAt
        updatedAt
        group {
          items {
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
      payout {
        id
        stripePayoutId
        amount
        clinicianId
        groupId
        status
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
            nextToken
          }
          participants {
            nextToken
          }
        }
        payments {
          items {
            id
            stripeId
            amount
            type
            groupId
            participantId
            clinicianId
            payoutId
            createdAt
            updatedAt
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeletePayments = /* GraphQL */ `
  subscription OnDeletePayments {
    onDeletePayments {
      id
      stripeId
      amount
      type
      groupId
      participantId
      clinicianId
      payoutId
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
        createdAt
        updatedAt
        group {
          items {
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
      payout {
        id
        stripePayoutId
        amount
        clinicianId
        groupId
        status
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
            nextToken
          }
          participants {
            nextToken
          }
        }
        payments {
          items {
            id
            stripeId
            amount
            type
            groupId
            participantId
            clinicianId
            payoutId
            createdAt
            updatedAt
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreateGlobalSettings = /* GraphQL */ `
  subscription OnCreateGlobalSettings {
    onCreateGlobalSettings {
      id
      type
      settings
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGlobalSettings = /* GraphQL */ `
  subscription OnUpdateGlobalSettings {
    onUpdateGlobalSettings {
      id
      type
      settings
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGlobalSettings = /* GraphQL */ `
  subscription OnDeleteGlobalSettings {
    onDeleteGlobalSettings {
      id
      type
      settings
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePayouts = /* GraphQL */ `
  subscription OnCreatePayouts {
    onCreatePayouts {
      id
      stripePayoutId
      amount
      clinicianId
      groupId
      status
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
        createdAt
        updatedAt
        group {
          items {
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
      payments {
        items {
          id
          stripeId
          amount
          type
          groupId
          participantId
          clinicianId
          payoutId
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
          payout {
            id
            stripePayoutId
            amount
            clinicianId
            groupId
            status
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdatePayouts = /* GraphQL */ `
  subscription OnUpdatePayouts {
    onUpdatePayouts {
      id
      stripePayoutId
      amount
      clinicianId
      groupId
      status
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
        createdAt
        updatedAt
        group {
          items {
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
      payments {
        items {
          id
          stripeId
          amount
          type
          groupId
          participantId
          clinicianId
          payoutId
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
          payout {
            id
            stripePayoutId
            amount
            clinicianId
            groupId
            status
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeletePayouts = /* GraphQL */ `
  subscription OnDeletePayouts {
    onDeletePayouts {
      id
      stripePayoutId
      amount
      clinicianId
      groupId
      status
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
        createdAt
        updatedAt
        group {
          items {
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
      payments {
        items {
          id
          stripeId
          amount
          type
          groupId
          participantId
          clinicianId
          payoutId
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
          payout {
            id
            stripePayoutId
            amount
            clinicianId
            groupId
            status
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
