/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClinician = /* GraphQL */ `
  mutation CreateClinician(
    $input: CreateClinicianInput!
    $condition: ModelClinicianConditionInput
  ) {
    createClinician(input: $input, condition: $condition) {
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
export const deleteClinician = /* GraphQL */ `
  mutation DeleteClinician(
    $input: DeleteClinicianInput!
    $condition: ModelClinicianConditionInput
  ) {
    deleteClinician(input: $input, condition: $condition) {
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
export const createReport = /* GraphQL */ `
  mutation CreateReport(
    $input: CreateReportInput!
    $condition: ModelReportConditionInput
  ) {
    createReport(input: $input, condition: $condition) {
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
export const updateReport = /* GraphQL */ `
  mutation UpdateReport(
    $input: UpdateReportInput!
    $condition: ModelReportConditionInput
  ) {
    updateReport(input: $input, condition: $condition) {
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
export const deleteReport = /* GraphQL */ `
  mutation DeleteReport(
    $input: DeleteReportInput!
    $condition: ModelReportConditionInput
  ) {
    deleteReport(input: $input, condition: $condition) {
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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
export const createTagParticipant = /* GraphQL */ `
  mutation CreateTagParticipant(
    $input: CreateTagParticipantInput!
    $condition: ModelTagParticipantConditionInput
  ) {
    createTagParticipant(input: $input, condition: $condition) {
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
export const updateTagParticipant = /* GraphQL */ `
  mutation UpdateTagParticipant(
    $input: UpdateTagParticipantInput!
    $condition: ModelTagParticipantConditionInput
  ) {
    updateTagParticipant(input: $input, condition: $condition) {
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
export const deleteTagParticipant = /* GraphQL */ `
  mutation DeleteTagParticipant(
    $input: DeleteTagParticipantInput!
    $condition: ModelTagParticipantConditionInput
  ) {
    deleteTagParticipant(input: $input, condition: $condition) {
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
export const createTagGroup = /* GraphQL */ `
  mutation CreateTagGroup(
    $input: CreateTagGroupInput!
    $condition: ModelTagGroupConditionInput
  ) {
    createTagGroup(input: $input, condition: $condition) {
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
export const updateTagGroup = /* GraphQL */ `
  mutation UpdateTagGroup(
    $input: UpdateTagGroupInput!
    $condition: ModelTagGroupConditionInput
  ) {
    updateTagGroup(input: $input, condition: $condition) {
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
export const deleteTagGroup = /* GraphQL */ `
  mutation DeleteTagGroup(
    $input: DeleteTagGroupInput!
    $condition: ModelTagGroupConditionInput
  ) {
    deleteTagGroup(input: $input, condition: $condition) {
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
export const updateClinician = /* GraphQL */ `
  mutation UpdateClinician(
    $input: UpdateClinicianInput!
    $condition: ModelClinicianConditionInput
  ) {
    updateClinician(input: $input, condition: $condition) {
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
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $input: CreateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    createSession(input: $input, condition: $condition) {
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
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $input: UpdateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    updateSession(input: $input, condition: $condition) {
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
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $input: DeleteSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    deleteSession(input: $input, condition: $condition) {
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
export const createParticipant = /* GraphQL */ `
  mutation CreateParticipant(
    $input: CreateParticipantInput!
    $condition: ModelParticipantConditionInput
  ) {
    createParticipant(input: $input, condition: $condition) {
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
export const updateParticipant = /* GraphQL */ `
  mutation UpdateParticipant(
    $input: UpdateParticipantInput!
    $condition: ModelParticipantConditionInput
  ) {
    updateParticipant(input: $input, condition: $condition) {
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
export const deleteParticipant = /* GraphQL */ `
  mutation DeleteParticipant(
    $input: DeleteParticipantInput!
    $condition: ModelParticipantConditionInput
  ) {
    deleteParticipant(input: $input, condition: $condition) {
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
export const createParticipantSession = /* GraphQL */ `
  mutation CreateParticipantSession(
    $input: CreateParticipantSessionInput!
    $condition: ModelParticipantSessionConditionInput
  ) {
    createParticipantSession(input: $input, condition: $condition) {
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
export const updateParticipantSession = /* GraphQL */ `
  mutation UpdateParticipantSession(
    $input: UpdateParticipantSessionInput!
    $condition: ModelParticipantSessionConditionInput
  ) {
    updateParticipantSession(input: $input, condition: $condition) {
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
export const deleteParticipantSession = /* GraphQL */ `
  mutation DeleteParticipantSession(
    $input: DeleteParticipantSessionInput!
    $condition: ModelParticipantSessionConditionInput
  ) {
    deleteParticipantSession(input: $input, condition: $condition) {
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
export const createPayments = /* GraphQL */ `
  mutation CreatePayments(
    $input: CreatePaymentsInput!
    $condition: ModelPaymentsConditionInput
  ) {
    createPayments(input: $input, condition: $condition) {
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
export const updatePayments = /* GraphQL */ `
  mutation UpdatePayments(
    $input: UpdatePaymentsInput!
    $condition: ModelPaymentsConditionInput
  ) {
    updatePayments(input: $input, condition: $condition) {
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
export const deletePayments = /* GraphQL */ `
  mutation DeletePayments(
    $input: DeletePaymentsInput!
    $condition: ModelPaymentsConditionInput
  ) {
    deletePayments(input: $input, condition: $condition) {
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
export const createGlobalSettings = /* GraphQL */ `
  mutation CreateGlobalSettings(
    $input: CreateGlobalSettingsInput!
    $condition: ModelGlobalSettingsConditionInput
  ) {
    createGlobalSettings(input: $input, condition: $condition) {
      id
      type
      settings
      createdAt
      updatedAt
    }
  }
`;
export const updateGlobalSettings = /* GraphQL */ `
  mutation UpdateGlobalSettings(
    $input: UpdateGlobalSettingsInput!
    $condition: ModelGlobalSettingsConditionInput
  ) {
    updateGlobalSettings(input: $input, condition: $condition) {
      id
      type
      settings
      createdAt
      updatedAt
    }
  }
`;
export const deleteGlobalSettings = /* GraphQL */ `
  mutation DeleteGlobalSettings(
    $input: DeleteGlobalSettingsInput!
    $condition: ModelGlobalSettingsConditionInput
  ) {
    deleteGlobalSettings(input: $input, condition: $condition) {
      id
      type
      settings
      createdAt
      updatedAt
    }
  }
`;
export const createPayouts = /* GraphQL */ `
  mutation CreatePayouts(
    $input: CreatePayoutsInput!
    $condition: ModelPayoutsConditionInput
  ) {
    createPayouts(input: $input, condition: $condition) {
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
export const updatePayouts = /* GraphQL */ `
  mutation UpdatePayouts(
    $input: UpdatePayoutsInput!
    $condition: ModelPayoutsConditionInput
  ) {
    updatePayouts(input: $input, condition: $condition) {
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
export const deletePayouts = /* GraphQL */ `
  mutation DeletePayouts(
    $input: DeletePayoutsInput!
    $condition: ModelPayoutsConditionInput
  ) {
    deletePayouts(input: $input, condition: $condition) {
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
