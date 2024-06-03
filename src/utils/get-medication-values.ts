import type {
  IMedicationValues,
  MedicationRequestResponseData,
} from '@/types/medication-request.interface';

export function getMedicationValues(
  data: (MedicationRequestResponseData & { medicationName: string })[]
): IMedicationValues[] {
  const dataValues: IMedicationValues[] = [];
  data.forEach((entry) => {
    dataValues.push({
      medicationName: entry.medicationName,
      dose:
        entry.dosageInstruction?.[0]?.doseAndRate?.[0]?.value +
        entry.dosageInstruction?.[0]?.doseAndRate?.[0]?.unit,
      instruction: entry.dosageInstruction?.[0]?.text,
    });
  });
  return dataValues;
}
