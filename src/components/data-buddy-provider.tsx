import { Databuddy } from '@databuddy/sdk/react';

export function DataBuddyProvider() {
    return (
        <Databuddy
            clientId={process.env.DATABUDDY_CLIENT_ID!}
            trackHashChanges={true}
            trackAttributes={true}
            trackOutgoingLinks={true}
            trackInteractions={true}
            trackEngagement={true}
            trackScrollDepth={true}
            trackExitIntent={true}
            trackBounceRate={true}
            trackWebVitals={true}
            trackErrors={true}
            enableBatching={true}
        />
    );
}