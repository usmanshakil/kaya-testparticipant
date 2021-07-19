/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReport = /* GraphQL */ `
  query GetReport($id: ID!) {
    getReport(id: $id) {
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
export const listReports = /* GraphQL */ `
  query ListReports(
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      }
      nextToken
    }
  }
`;
export const getTagParticipant = /* GraphQL */ `
  query GetTagParticipant($id: ID!) {
    getTagParticipant(id: $id) {
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
export const listTagParticipants = /* GraphQL */ `
  query ListTagParticipants(
    $filter: ModelTagParticipantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTagParticipants(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        tag {
          id
          name
          description
          participants {
            nextToken
          }
          groups {
            nextToken
          }
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getTagGroup = /* GraphQL */ `
  query GetTagGroup($id: ID!) {
    getTagGroup(id: $id) {
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
export const listTagGroups = /* GraphQL */ `
  query ListTagGroups(
    $filter: ModelTagGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTagGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        tag {
          id
          name
          description
          participants {
            nextToken
          }
          groups {
            nextToken
          }
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listClinicians = /* GraphQL */ `
  query ListClinicians(
    $filter: ModelClinicianFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClinicians(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getClinician = /* GraphQL */ `
  query GetClinician($id: ID!) {
    getClinician(id: $id) {
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
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getSession = /* GraphQL */ `
  query GetSession($id: ID!) {
    getSession(id: $id) {
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
export const listParticipants = /* GraphQL */ `
  query ListParticipants(
    $filter: ModelParticipantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParticipants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getParticipant = /* GraphQL */ `
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
export const getParticipantSession = /* GraphQL */ `
  query GetParticipantSession($id: ID!) {
    getParticipantSession(id: $id) {
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
export const listParticipantSessions = /* GraphQL */ `
  query ListParticipantSessions(
    $filter: ModelParticipantSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParticipantSessions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      }
      nextToken
    }
  }
`;
export const getParticipantGroup = /* GraphQL */ `
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
      }
      nextToken
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
export const getPayments = /* GraphQL */ `
  query GetPayments($id: ID!) {
    getPayments(id: $id) {
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
export const listPaymentss = /* GraphQL */ `
  query ListPaymentss(
    $filter: ModelPaymentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaymentss(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getGlobalSettings = /* GraphQL */ `
  query GetGlobalSettings($id: ID!) {
    getGlobalSettings(id: $id) {
      id
      type
      settings
      createdAt
      updatedAt
    }
  }
`;
export const listGlobalSettingss = /* GraphQL */ `
  query ListGlobalSettingss(
    $filter: ModelGlobalSettingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGlobalSettingss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        settings
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listPayoutss = /* GraphQL */ `
  query ListPayoutss(
    $filter: ModelPayoutsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayoutss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPayouts = /* GraphQL */ `
  query GetPayouts($id: ID!) {
    getPayouts(id: $id) {
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
