import { Result } from "@/lib/results"

export const features = [
  "auth_admin",
  "authentication",
  "functions",
  "postgrest",
  "realtime",
  "rpc",
  "storage",
  "other",
]

export interface GroupedResults {
  feature: string
  passed: number
  failed: number
  skipped: number
  undefined: number
}

export function groupResultsByFeature(results: Result[]): GroupedResults[] {
  const groupedResults: {
    passed: { [key: string]: Result[] }
    failed: { [key: string]: Result[] }
    skipped: { [key: string]: Result[] }
    undefined: { [key: string]: Result[] }
  } = {
    passed: {},
    failed: {},
    skipped: {},
    undefined: {},
  }

  features.forEach((feature: string) => {
    groupedResults.passed[feature] = []
    groupedResults.failed[feature] = []
    groupedResults.skipped[feature] = []
    groupedResults.undefined[feature] = []
  })
  if (!results) {
    return []
  }
  results.forEach((result) => {
    switch (result.status) {
      case "passed":
        if (features.includes(result.feature)) {
          groupedResults.passed[result.feature].push(result)
        } else if (features.includes(result.parent_suite)) {
          groupedResults.passed[result.parent_suite].push(result)
        } else if (features.includes(result.suite)) {
          groupedResults.passed[result.suite].push(result)
        } else if (features.includes(result.sub_suite)) {
          groupedResults.passed[result.sub_suite].push(result)
        } else {
          // eslint-disable-next-line dot-notation
          groupedResults.passed["other"].push(result)
        }
        break
      case "failed":
        if (features.includes(result.feature)) {
          groupedResults.failed[result.feature].push(result)
        } else if (features.includes(result.parent_suite)) {
          groupedResults.failed[result.parent_suite].push(result)
        } else if (features.includes(result.suite)) {
          groupedResults.failed[result.suite].push(result)
        } else if (features.includes(result.sub_suite)) {
          groupedResults.failed[result.sub_suite].push(result)
        } else {
          // eslint-disable-next-line dot-notation
          groupedResults.failed["other"].push(result)
        }
        break
      case "skipped":
        if (features.includes(result.feature)) {
          groupedResults.skipped[result.feature].push(result)
        } else if (features.includes(result.parent_suite)) {
          groupedResults.skipped[result.parent_suite].push(result)
        } else if (features.includes(result.suite)) {
          groupedResults.skipped[result.suite].push(result)
        } else if (features.includes(result.sub_suite)) {
          groupedResults.skipped[result.sub_suite].push(result)
        } else {
          // eslint-disable-next-line dot-notation
          groupedResults.skipped["other"].push(result)
        }
        break
      case "broken":
      default:
        if (features.includes(result.feature)) {
          groupedResults.undefined[result.feature].push(result)
        } else if (features.includes(result.parent_suite)) {
          groupedResults.undefined[result.parent_suite].push(result)
        } else if (features.includes(result.suite)) {
          groupedResults.undefined[result.suite].push(result)
        } else if (features.includes(result.sub_suite)) {
          groupedResults.undefined[result.sub_suite].push(result)
        } else {
          // eslint-disable-next-line dot-notation
          groupedResults.undefined["other"].push(result)
        }
        break
    }
  })

  const groupedResultsWithCounts: GroupedResults[] = [] as any
  features.forEach((feature: string) => {
    groupedResultsWithCounts.push({
      feature,
      passed: groupedResults.passed[feature].length,
      failed: groupedResults.failed[feature].length,
      skipped: groupedResults.skipped[feature].length,
      undefined: groupedResults.undefined[feature].length,
    })
  })
  return groupedResultsWithCounts
}
