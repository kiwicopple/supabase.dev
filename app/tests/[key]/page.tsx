"use client"

import { supabase } from "@/lib/supabaseClient"
import { useState, useEffect } from "react"

import {
  Card,
  ColGrid,
  Text,
  Title,
  Badge,
  Flex,
  Block,
  BarChart,
  CategoryBar,
} from "@tremor/react"
import { HashtagIcon } from "@heroicons/react/20/solid"

import { Version } from "@/lib/versions"
import { Result } from "@/lib/results"
import { groupResultsByFeature } from "@/lib/resultsParse"

interface VersionWithResults extends Version {
  results: Result[] | null
}

async function getData({ key }: { key: string }) {
  // const { data } = await supabase.from("versions").select("*")
  const { data } = await supabase.rpc("version")

  if (!data) {
    return { versions: null }
  }
  const p = (data as any as VersionWithResults[]).map(async (v) => {
    const { data: results } = await supabase.rpc("results", {
      version: v.id,
    })
    v.results = results as Result[] | null
    return v
  })
  const versions = await Promise.all(p)

  return { versions }
}

export default function Tests({ params }: { params: { key: string } }) {
  const [versions, setVersions] = useState<VersionWithResults[] | null>(null)

  useEffect(() => {
    getData({ key: params.key }).then((data) => {
      setVersions(data.versions as VersionWithResults[] | null)
    })
  }, [])

  return (
    <div className="p-4">
      <ColGrid
        numColsMd={1}
        numColsLg={1}
        gapX="gap-x-6"
        gapY="gap-y-6"
        marginTop="mt-6"
      >
        {versions?.map((x) => (
          <Card maxWidth="max-w-full" key={x.id}>
            <Flex alignItems="items-start">
              <Block>
                <Title>{x.version_name}</Title>
                {/* <Metric># {x.results_number ?? 0}</Metric> */}
              </Block>
              {/* badge with id number and id hero icon */}
              <Badge
                tooltip="Version ID"
                icon={HashtagIcon}
                text={x.id.toString()}
              />
            </Flex>
            <CategoryBar
              tooltip="Tests by status"
              showAnimation={true}
              categoryPercentageValues={[
                x.results_number
                  ? Math.round((x.passed_number / x.results_number) * 100)
                  : 0,
                x.results_number
                  ? Math.round((x.failed_number / x.results_number) * 100)
                  : 0,
                x.results_number
                  ? Math.round((x.skipped_number / x.results_number) * 100)
                  : 0,
                x.results_number
                  ? Math.round((x.undefined_number / x.results_number) * 100)
                  : 0,
              ]}
              marginTop="mt-4"
              colors={["emerald", "rose", "yellow", "indigo"]}
              showLabels={false}
            />
            <BarChart
              marginTop="mt-6"
              data={groupResultsByFeature(x.results || []) ?? []}
              categories={["passed", "failed", "skipped", "undefined"]}
              colors={["emerald", "rose", "yellow", "indigo"]}
              dataKey="feature"
              layout="horizontal"
              stack={true}
            />
          </Card>
        ))}
      </ColGrid>
    </div>
  )
}
