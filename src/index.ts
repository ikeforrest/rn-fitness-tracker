import { NativeModules } from 'react-native';

export const { RNHealthTracker } = NativeModules;

export { HealthDataTypes, UnitTypes, WorkoutTypes } from './types/dataTypes';

export { HealthTrackerAPI } from './api/health';
