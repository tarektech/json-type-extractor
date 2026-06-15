import { Databuddy } from '@databuddy/sdk/react';

export function DataBuddyProvider() {
    return (
        <Databuddy
            clientId={process.env.NEXT_PUBLIC_DATABUDDY_CLIENT_ID!}
            trackHashChanges={true}
            trackAttributes={true}
            trackOutgoingLinks={true}
            trackInteractions={true}
            trackScrollDepth={true}
            trackWebVitals={true}
            trackErrors={true}
            enableBatching={true}
        />
    );
}