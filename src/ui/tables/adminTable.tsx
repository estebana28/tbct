'use client'

import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react'

interface AdminTableProps {
  headers: String[]
  data: any
}

export default function AdminTable({ headers, data }: AdminTableProps) {
  console.log('data', data)

  return (
    <div>
      <TableContainer>
        <Table variant="striped" size="sm">
          <Thead>
            <Tr>
              {headers.map((header: any, index: any) => (
                <Th key={index}>{header}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data && data.length ? (
              data.map((row: any) => {
                return (
                  <Tr key={row._id}>
                    {Object.values(headers).map((header: any, index: any) => {
                      if (header === 'choices') {
                        return <Td key={index}>TODO Modal</Td>
                      } else if (header === 'status') {
                        return (
                          <Td key={index}>
                            {row[header] ? 'Active' : 'Inactive'}
                          </Td>
                        )
                      }

                      return <Td key={index}>{row[header]}</Td>
                    })}
                  </Tr>
                )
              })
            ) : (
              <Tr key={'nodata'}>
                <Td>No Data available</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}
