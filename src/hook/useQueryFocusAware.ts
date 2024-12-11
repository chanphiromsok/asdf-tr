import React from "react";
import { useFocusEffect } from "@react-navigation/native";

/**
 * Enabled can also be set to a callback to support disabling queries on out of focus screens without state and re-rendering on navigation, similar to how notifyOnChangeProps works but in addition it wont trigger refetching when invalidating queries with refetchType active.
 * @example const isFocused = useQueryFocusAware()
  const { dataUpdatedAt } = useQuery({
    queryKey: ['key'],
    queryFn: () => fetch(...),
    enabled: isFocused,
  })
 */
export function useQueryFocusAware() {
  const focusedRef = React.useRef(true);

  useFocusEffect(
    React.useCallback(() => {
      focusedRef.current = true;

      return () => {
        focusedRef.current = false;
      };
    }, [])
  );

  return () => focusedRef.current;
}
